# Using Crayon

Crayon ships with a default configuration, everything can be overridden by extending that default configuration

All defaults  colours, sizes, breakpoints, fonts, grid columns, border radii etc live in `src/_config.scss`. To override them, create a wrapper file that forwards Crayon with your values:

```scss
// src/styles/_my-custom-config.scss
@forward 'crayon-css' with (
  $base-size: 8px,
  $colors: (
    "brand-50": #f0f0ff,
    "brand-500": #6200ee,
    "brand-900": #1a0044,
  )
);
```

Then `@use` your wrapper file everywhere instead of `crayon-css` directly.

## Utility Classes

If you've used Tailwind in the past, this works the way you'd expect, Crayon shares the same naming conventions. The main thing to note here is that Crayon does not cover every Tailwind utility class, for a list see here

### Spacing

The spacing scale is built on `$base-size` in the config (4px by default). Size 4 = 4 × 4px = 16px = 1rem.

```html
<div class="p-4">      <!-- padding: 1rem on all sides -->
<div class="px-8">     <!-- padding-left and right: 2rem -->
<div class="pt-2">     <!-- padding-top only: 0.5rem -->
<div class="m-4">      <!-- margin: 1rem -->
<div class="mx-auto">  <!-- horizontal centering -->
<div class="-mt-4">    <!-- negative margin-top: -1rem -->
```

Every step in the spacing scale is also available as a CSS variable  `--size-4`, `--size-8`, `--size-0_5`

### Sizing

Width, height, and size classes use the same spacing scale, plus fractional classes derived from `$layout-divisions`, and keyword values.

```html
<!-- Numeric - same scale as spacing -->
<div class="w-24">    <!-- width: 6rem -->
<div class="h-12">    <!-- height: 3rem -->
<div class="size-8">  <!-- width and height: 2rem -->

<!-- Fractional - generated from $layout-divisions -->
<div class="w-1/2">   <!-- width: 50% -->
<div class="w-2/3">   <!-- width: 66.666% -->

<!-- Keywords -->
<div class="w-full">    <div class="h-screen">
<div class="w-fit">     <div class="h-dvh">
<div class="min-w-0">   <div class="max-w-96">
```

To add new fraction denominators (e.g. eighths), add `8` to `$layout-divisions` in your config.

### Colours

Colour classes are generated from the full Tailwind v3 palette. This can be turned off in `_config`

Tailwind colours are enabled by default.

The output format is controlled by `$output-colorspace`.

```html
<div class="bg-blue-500">
<p class="text-slate-900">
<div class="border-red-300">
```

To change all colour output to OKLCH, set `$output-colorspace: oklch` in config. Every `.bg-*`, `.text-*`, and `.border-*` class will be recompiled in that space.

Every colour is also available as a CSS variable  `--color-blue-500`, `--color-slate-900`

### Typography

Font size classes set both `font-size` (in rem) and `line-height` together. Font weight classes are scoped to text elements to avoid unintentional inheritance.

```html
<!-- Size + line-height -->
<p class="text-base">   <p class="text-sm">   <h1 class="text-4xl">

<!-- Weight (works inside h1–h6, p, a, span, li, button, etc.) -->
<p class="bold">        <span class="semibold">    <p class="light">

<!-- Style -->
<em class="italic">     <em class="not-italic">
```

Font sizes, weights, and the font family are also available as CSS variables  `--text-sm`, `--text-2xl`, `--font-weight-bold`, `--font-family`

## Lookup Functions

For writing component styles in Sass, Crayon exposes lookup functions that return values from the config scales. This is the recommended way to use Crayon values in your own CSS  rather than hardcoding `1rem`, reference `crayon.size(4)` so the value stays tied to your config.

```other
@use 'crayon-css' as crayon;

.card {
  background:   crayon.color("slate-100");      
  border-color: crayon.color("blue-300");

  padding:      crayon.size(4);                 // → 1rem (base-size × 4)
  gap:          crayon.size(2);                 // → 0.5rem

  font-size:    crayon.font-size("lg");          // → 1.125rem
  font-weight:  crayon.font-weight("semibold");  // → 600
}
```

Not writing Sass? The same values are available as CSS custom properties  `var(--color-blue-500)`, `var(--size-4)`, `var(--text-lg)`  if `$output-css-vars` is set in config.
