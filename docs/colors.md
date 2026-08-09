---
outline: [2, 3]
---

# Colors

Crayon ships with the full Tailwind v3 color palette out of the box. You get utility classes (`.bg-blue-500`, `.text-slate-900`), CSS variables (`--color-blue-500`), and Sass functions (`color("blue-500")`) for everything in the palette.

You can also mix color and opacity

> Tailwind colours are enabled by default.  They can be turned off in `_config`

The output format is controlled by `$output-colorspace`.

```html
<div class="bg-blue-500">
  <p class="text-slate-900"></p>
</div>
<div class="border-red-300"></div>
```

To change all colour output to OKLCH, set `$output-colorspace: oklch` in config.

> Every colour is also available as a CSS variable  `--color-blue-500`, `--color-slate-900`

## Sass mixins

<!--@include: ./reference/mixins/colors.md-->

## Utility classes

<!--@include: ./reference/utility-classes/colors.md-->

## Opacity

Opacity is in increments of 5%

<!--@include: ./reference/utility-classes/opacity.md-->

```html
<div class="opacity-50">Half transparent</div>
<div class="opacity-0">Invisible but present in layout</div>
```

## Customising Colours

To add your own brand colours alongside the Tailwind palette, pass them via `$colors` in your config file. Your colours are merged on top of Tailwind's, so you get both:

```scss
// _crayon-config.scss
@forward 'crayon-css' with (
  $colors: (
    "brand":      #ff5500,
    "brand-dark": #cc4400,
    "brand-pale": #fff0e8,
  )
);
```

That's it. Crayon will generate `.bg-brand`, `.text-brand`, `.border-brand` (and the same for every key), plus a `--color-brand` CSS variable. Your colours sit alongside the full Tailwind palette.

You can also override an existing Tailwind colour.  If you define `"blue-500"` in your `$colors` map, your value wins.

## Colour Space Conversion

Crayon converts any colour to a different colour space at build time, using Sass's built-in `color.to-space()`. This is useful when you want to hand-author values in one space but output in another (e.g. OKLCH for perceptual uniformity).

### Bulk conversion via config

Set `$output-colorspace` in config and all generated colour classes will be output in that space:

```scss
$convert-colorspace: true;
$output-colorspace: oklch;
```

### Per-value conversion in component CSS

Use the conversion functions directly when you need a specific space for a single value:

```scss
@use 'crayon-css' as crayon;

.hero {
  // Palette colour converted to a specific space
  background: crayon.to-oklch(crayon.color("blue-500"));
  color:      crayon.to-p3(crayon.color("slate-900"));

  // Any Sass colour value works, not just palette lookups
  border-color: crayon.to-hsl(#3b82f6);
}
```

**Available functions**

`crayon.convert()` (uses `$output-colorspace`)

`crayon.to-oklch()`

`crayon.to-oklab()`

`crayon.to-hsl()`

`crayon.to-rgb()`

`crayon.to-p3()`

## Turning off the Tailwind palette

The Tailwind palette adds around **82 KB** to your compiled CSS (before gzip). If you're building something small or want full control over what's in your stylesheet, you can disable it:

```scss
@forward 'crayon-css' with (
  $use-tailwind-colors: false,
  $colors: (
    "brand":      #ff5500,
    "brand-dark": #cc4400,
    "neutral-100": #f5f5f5,
    "neutral-900": #1a1a1a,
  )
);
```

With `$use-tailwind-colors: false`, only the colours you define in `$colors` are included. You're in full control of the palette.

## Using colours in Sass

However you've configured your palette, colours are available via the `color()` function:

```scss
@use 'crayon-config' as crayon;

.card {
  background-color: crayon.color("brand");
  color: crayon.color("neutral-900");

  @include crayon.dark {
    background-color: crayon.color("brand-dark");
  }
}
```

## Quick reference

| **Goal**                              | **Config**                                           |
| ------------------------------------- | ---------------------------------------------------- |
| Keep Tailwind + add your own          | Set `$colors: ("brand": #ff5500)`                    |
| Override a Tailwind shade             | Set `$colors: ("blue-500": #your-blue)`              |
| Ditch Tailwind, use only your colours | Set `$use-tailwind-colors: false` + `$colors: (...)` |
| Keep Tailwind, no additions           | Default,  nothing to configure                       |
