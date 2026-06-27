param(
  [string]$CutsFile = "images/gifs/gif-cuts.csv",
  [int]$Fps = 24,
  [int]$DefaultWidth = 0,
  [int]$DefaultQuality = 85,
  [switch]$UseGifski
)

$ErrorActionPreference = "Stop"

$cutsPath = Resolve-Path -LiteralPath $CutsFile
$rows = Import-Csv -LiteralPath $cutsPath
$scriptPath = Join-Path $PSScriptRoot "make-gif.ps1"

foreach ($row in $rows) {
  if (-not $row.Project -or -not $row.Start -or -not $row.End) {
    Write-Host "Skipping incomplete row: $($row.Project)"
    continue
  }

  $clip = if ($row.Clip) { $row.Clip } else { "main" }
  $output = if ($row.Output) { $row.Output } else { "images\gifs\$($row.Project)_$clip.gif" }
  $width = if ($row.Width) { [int]$row.Width } else { $DefaultWidth }
  $quality = if ($row.Quality) { [int]$row.Quality } else { $DefaultQuality }
  $rowFps = if ($row.Fps) { [int]$row.Fps } else { $Fps }

  Write-Host "Creating $($row.Project) / ${clip}: $($row.Start) -> $($row.End)"

  $args = @(
    "-Input", $row.Input,
    "-Output", $output,
    "-Start", $row.Start,
    "-End", $row.End,
    "-Fps", $rowFps,
    "-Width", $width,
    "-Quality", $quality
  )

  if ($UseGifski) {
    $args += "-UseGifski"
  }

  & $scriptPath @args
}
