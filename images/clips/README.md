# Project Gameplay Clips

Gameplay clips used by the hero reel and the `#projects` showcase.
Each clip is a muted looping mp4 plus a first-frame jpg poster with the same name.

The original GIFs (205MB) were removed on 2026-11-10; they remain in git history
before that date if a clip ever needs to be re-encoded.

## Adding a clip

```
ffmpeg -i X.gif -an -c:v libx264 -preset slow -crf 25 -pix_fmt yuv420p -movflags +faststart -vf "scale=trunc(iw/2)*2:trunc(ih/2)*2" X.mp4
ffmpeg -i X.mp4 -frames:v 1 -q:v 3 X.jpg
```

Pixel art (Last Write) is upscaled 2x without smoothing:
`-vf "scale=iw*2:ih*2:flags=neighbor"`, and its grid uses `.gif-grid-pixel`.

## How the page loads them

- Tiles and hero clips are `<video data-src data-poster muted loop playsinline preload="none">`.
- Posters load when within 600px of the viewport; video loads and plays only while
  at least 25% visible and pauses offscreen.
- `prefers-reduced-motion` shows posters only and stops the hero reel.
- Clicking a tile opens the in-page lightbox, which plays the same mp4.

## Display rules

Do not force every project into the same ratio.

- wide projects use `.gif-grid-wide`
- phone-shaped projects use `.gif-grid-phone`
- portrait puzzle clips use `.gif-grid-portrait`

Within a single project, all tiles display at the same size. Clips keep their
aspect ratio with `object-fit: contain`.

## Video links

YouTube links are stored on each `.showcase-project` as `data-video-url` and open
in a modal iframe via `youtube-nocookie.com`, with a `YouTube에서 열기` fallback link.
GitHub links are intentionally omitted from the visible project buttons.

## Mobile

Same URL, responsive CSS. Order: summary/tags/buttons, then the clip slider, then
description. Slider arrows are hidden on mobile; swipe is the primary navigation.
