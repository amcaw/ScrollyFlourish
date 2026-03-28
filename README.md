# ScrollyFlourish

A reusable scrollytelling component built with SvelteKit that embeds [Flourish](https://flourish.studio/) stories and drives slide navigation through scroll-based interaction.

## What it does

As the reader scrolls through text panels, an `IntersectionObserver` detects which step is visible and updates the embedded Flourish story to the corresponding slide. The Flourish iframe uses the `#slide-N` hash fragment to trigger its built-in slide transitions.

The layout places text steps on one side and a sticky Flourish embed on the other, creating a classic scrollytelling experience without requiring any Flourish API key or JavaScript SDK.

## Project structure

```
src/
├── app.css                  # Global styles (CSS variables, typography, base reset)
├── app.html                 # HTML shell (Montserrat font loading)
├── lib/
│   └── Scrolly.svelte       # The scrollytelling component
└── routes/
    ├── +layout.svelte       # Root layout (imports global CSS)
    └── +page.svelte         # Demo page with article text + Scrolly component
```

## How the Scrolly component works

1. **Steps** — An array of `stepsData` objects defines the text content for each scroll panel.
2. **IntersectionObserver** — On mount, each `.step` element is observed. When a step crosses the visibility threshold (50%), `activeStepIndex` updates.
3. **Flourish embed** — The iframe `src` is reactively bound to `activeStepIndex`, appending `#slide-{index}` to the Flourish story URL. Flourish handles the animated transition between slides internally.
4. **Sticky layout** — The Flourish iframe sits in a `position: sticky` container so it remains visible while the reader scrolls through the steps.

## Customisation

- **Flourish story ID** — Change the `flourishID` variable in `Scrolly.svelte` to point to any public Flourish story.
- **Steps content** — Edit the `stepsData` array. Each entry supports HTML via `{@html}`.
- **Theming** — CSS variables in `src/app.css` control colours, typography, and spacing.

## Known limitation

Changing the Flourish iframe `src` hash adds entries to the browser's joint session history. This means pressing the browser back button will step through each slide before navigating to the previous page. This is a fundamental constraint of cross-origin iframes — there is no reliable way to change an iframe's hash without creating history entries when the iframe is on a different origin.

## Getting started

```sh
npm install
npm run dev
```

## Building

```sh
npm run build
```

The project uses `adapter-static` for static site generation. You can switch to another [SvelteKit adapter](https://svelte.dev/docs/kit/adapters) depending on your deployment target.

Preview the production build with:

```sh
npm run preview
```
