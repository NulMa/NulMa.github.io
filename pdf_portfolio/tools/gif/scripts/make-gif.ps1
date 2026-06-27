param(
  [Parameter(Mandatory = $true)]
  [Alias("Input")]
  [string]$Source,

  [Parameter(Mandatory = $true)]
  [string]$Output,

  [Parameter(Mandatory = $true)]
  [string]$Start,

  [string]$End = "",
  [double]$Duration = 3,
  [int]$Fps = 24,
  [int]$Width = 0,
  [int]$Quality = 85,
  [switch]$UseGifski
)

$ErrorActionPreference = "Stop"

function Resolve-Tool {
  param(
    [Parameter(Mandatory = $true)]
    [string]$Name,

    [string[]]$Candidates = @()
  )

  $command = Get-Command $Name -ErrorAction SilentlyContinue
  if ($command) { return $command.Source }

  foreach ($candidate in $Candidates) {
    $matches = Get-ChildItem -Path $candidate -ErrorAction SilentlyContinue
    if ($matches) { return $matches[0].FullName }
  }

  throw "$Name is required but was not found."
}

function Convert-TimeToSeconds {
  param([Parameter(Mandatory = $true)][string]$Value)

  $trimmed = $Value.Trim()
  if ($trimmed -match '^\d+(\.\d+)?$') {
    return [double]::Parse($trimmed, [Globalization.CultureInfo]::InvariantCulture)
  }

  $parts = $trimmed.Split(':')
  if ($parts.Count -lt 2 -or $parts.Count -gt 3) {
    throw "Invalid time value: $Value. Use seconds, MM:SS, or HH:MM:SS."
  }

  $seconds = [double]::Parse($parts[-1], [Globalization.CultureInfo]::InvariantCulture)
  $minutes = [double]::Parse($parts[-2], [Globalization.CultureInfo]::InvariantCulture)
  $hours = if ($parts.Count -eq 3) { [double]::Parse($parts[0], [Globalization.CultureInfo]::InvariantCulture) } else { 0 }
  return ($hours * 3600) + ($minutes * 60) + $seconds
}

function Assert-NativeSuccess {
  param(
    [Parameter(Mandatory = $true)]
    [string]$ToolName
  )

  if ($LASTEXITCODE -ne 0) {
    throw "$ToolName failed with exit code $LASTEXITCODE."
  }
}

$ffmpeg = Resolve-Tool -Name "ffmpeg" -Candidates @(
  "$env:LOCALAPPDATA\Microsoft\WinGet\Packages\Gyan.FFmpeg_Microsoft.Winget.Source_8wekyb3d8bbwe\ffmpeg-*\bin\ffmpeg.exe",
  "$env:ProgramData\chocolatey\bin\ffmpeg.exe",
  "$env:ProgramFiles\ffmpeg\bin\ffmpeg.exe"
)

$gifski = $null
if ($UseGifski) {
  try {
    $gifski = Resolve-Tool -Name "gifski" -Candidates @(
      "$env:ProgramFiles\gifski\gifski.exe",
      "${env:ProgramFiles(x86)}\gifski\gifski.exe"
    )
  }
  catch {
    Write-Warning "gifski was requested but not found. Falling back to ffmpeg palette encoding."
    $gifski = $null
  }
}

if ($End.Trim()) {
  $startSeconds = Convert-TimeToSeconds $Start
  $endSeconds = Convert-TimeToSeconds $End
  $Duration = $endSeconds - $startSeconds
  if ($Duration -le 0) {
    throw "End must be later than Start. Start=$Start End=$End"
  }
}

$inputPath = Resolve-Path -LiteralPath $Source
$outputPath = $ExecutionContext.SessionState.Path.GetUnresolvedProviderPathFromPSPath($Output)
$outputDir = Split-Path -Parent $outputPath

if ($outputDir -and -not (Test-Path -LiteralPath $outputDir)) {
  New-Item -ItemType Directory -Force -Path $outputDir | Out-Null
}

$tempRoot = Join-Path ([System.IO.Path]::GetTempPath()) ("portfolio-gif-" + [System.Guid]::NewGuid().ToString("N"))
$framesDir = Join-Path $tempRoot "frames"
New-Item -ItemType Directory -Force -Path $framesDir | Out-Null

try {
  $scaleFilter = if ($Width -gt 0) { ",scale=$($Width):-2:flags=lanczos" } else { "" }
  $videoFilter = "fps=$Fps$scaleFilter"
  $framePattern = Join-Path $framesDir "frame_%05d.png"

  & $ffmpeg -hide_banner -loglevel error -y `
    -ss $Start `
    -t $Duration `
    -i $inputPath `
    -vf $videoFilter `
    $framePattern
  Assert-NativeSuccess "ffmpeg frame extraction"

  if ($gifski) {
    $frameFiles = Get-ChildItem -LiteralPath $framesDir -Filter "frame_*.png" |
      Sort-Object Name |
      ForEach-Object { $_.FullName }

    if (-not $frameFiles) {
      throw "No frames were extracted from $Source."
    }

    & $gifski `
      --fps $Fps `
      --quality $Quality `
      -o $outputPath `
      $frameFiles
    Assert-NativeSuccess "gifski"
  } else {
    $palettePath = Join-Path $tempRoot "palette.png"
    $gifFilter = if ($Width -gt 0) {
      "fps=$Fps,scale=$($Width):-2:flags=lanczos"
    } else {
      "fps=$Fps"
    }

    & $ffmpeg -hide_banner -loglevel error -y `
      -ss $Start `
      -t $Duration `
      -i $inputPath `
      -vf "$gifFilter,palettegen=stats_mode=diff" `
      $palettePath
    Assert-NativeSuccess "ffmpeg palettegen"

    & $ffmpeg -hide_banner -loglevel error -y `
      -ss $Start `
      -t $Duration `
      -i $inputPath `
      -i $palettePath `
      -filter_complex "$gifFilter[x];[x][1:v]paletteuse=dither=sierra2_4a" `
      $outputPath
    Assert-NativeSuccess "ffmpeg paletteuse"
  }

  $created = Get-Item -LiteralPath $outputPath
  Write-Host "Created GIF: $($created.FullName)"
  Write-Host "Size: $([Math]::Round($created.Length / 1MB, 2)) MB"
}
finally {
  if (Test-Path -LiteralPath $tempRoot) {
    Remove-Item -Recurse -Force -LiteralPath $tempRoot
  }
}
