# Project GIF Showcase

This directory contains the GIF assets used by the portfolio project showcase.

The current site no longer uses the old two-column project cards as the visible
project presentation. The `#projects` section is a GIF-first showcase:

- each project displays several gameplay GIFs in a horizontal slider
- GIFs lazy-load from `data-src`
- clicking/tapping a GIF opens a larger in-page lightbox
- dragging/swiping a GIF slider scrolls through clips
- each project can expose a YouTube gameplay link through `data-video-url`
- GitHub links are intentionally omitted from the visible project action buttons

## Active GIF Files

Current showcase files:

- `Cubika_01.gif`
- `Cubika_02.gif`
- `Cubika_03.gif`
- `Cubika_04.gif`
- `GhostMarch_01.gif`
- `GhostMarch_02.gif`
- `GhostMarch_04.gif`
- `GhostMarch_05.gif`
- `GhostMarch_06.gif`
- `IronSarcophagus_01.gif`
- `IronSarcophagus_02.gif`
- `IronSarcophagus_03.gif`
- `IronSarcophagus_04.gif`
- `LostCone_01.gif`
- `LostCone_02.gif`
- `LostCone_03.gif`
- `LostCone_04.gif`
- `LostCone_05.gif`
- `Match3Roguelike_01.gif`
- `Match3Roguelike_02.gif`
- `Match3Roguelike_03.gif`
- `Match3Roguelike_04.gif`

## Display Rules

Do not force every project into the same visual ratio.

- wide projects use `.gif-grid-wide`
- phone-shaped projects use `.gif-grid-phone`
- portrait puzzle clips use `.gif-grid-portrait`

Within a single project, all GIF tiles should display at the same size.
Different projects may use different ratios.

The site currently keeps GIF aspect ratios intact with `object-fit: contain`.

## Video Links

YouTube links are stored on each `.showcase-project` as `data-video-url`.

The video button opens a modal iframe using:

- `https://www.youtube-nocookie.com/embed/...`
- `origin`
- `widget_referrer`
- `referrerpolicy="strict-origin-when-cross-origin"`

The modal also includes a `YouTube에서 열기` fallback link because YouTube embed
Error 153 can still depend on browser, domain, and referrer behavior.

## Mobile Behavior

Mobile keeps the same URL and uses responsive CSS. There is no mobile redirect.

The mobile project order is:

1. project summary, tags, and action buttons
2. GIF slider
3. description and implementation highlights

Slider arrow buttons are hidden on mobile. Touch swipe is the primary navigation.

## Export Notes

GIFs are generated from MP4 clips with `ffmpeg` palette encoding.

Usual defaults:

- keep original aspect ratio
- no crop
- infinite loop
- source FPS when practical
- resize only when file size is too high

For wide 16:9 clips, `Width 720` is a good first pass for visual quality.
`Width 640` is acceptable when file size is more important.
