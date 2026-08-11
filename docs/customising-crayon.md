# Customising and extending Crayon

All defaults live in `src/_config.scss`. To override them, create a wrapper file that forwards Crayon with your values:

```scss
/* src/styles/_my-custom-config.scss */
@forward 'crayon-css' with (
  $output-css-vars: true,

  $layout-columns: 12,
  $layout-divisions: (2, 3, 4, 6, 12),

  $border-widths: (
    "DEFAULT": 1px,
    0: 0,
    2: 2px,
    4: 4px,
  ),
  $border-radii: (
    "none": 0,
    "DEFAULT": 4px,
    "md": 6px,
    "lg": 8px,
    "full": 9999px,
  ),

  $breakpoints: (
    "sm": 640px,
    "md": 768px,
    "lg": 1024px,
    "xl": 1280px,
  ),

  $base-size: 8px,
  $sizes: (0.5, 1, 2, 3, 4, 6, 8, 12, 16, 24),

  $font-families: (
    "sans": ("Inter", system-ui, sans-serif),
    "serif": (Georgia, "Times New Roman", serif),
    "mono": (ui-monospace, monospace),
  ),
  $default-font: "sans",
  $base-font-size: 16px,
  $font-sizes: (
    "sm": (0.875, 1.25rem),
    "base": (1, 1.5rem),
    "lg": (1.125, 1.75rem),
    "2xl": (1.5, 2rem),
  ),
  $font-weights: (
    "normal": 400,
    "medium": 500,
    "semibold": 600,
    "bold": 700,
  ),
  $letter-spacings: (
    "tight": -0.025em,
    "normal": 0,
    "wide": 0.025em,
  ),
  $line-heights: (
    "tight": 1.25,
    "normal": 1.5,
    "relaxed": 1.625,
  ),

  $use-tailwind-colors: true,
  $convert-colorspace: true,
  $output-colorspace: oklch,
  $use-color-opacity-modifiers: true,
  $colors: (
    "brand-50": #f0f0ff,
    "brand-500": #635bff,
    "brand-900": #201a55,
  ),
  $opacities: (
    0: 0,
    25: 0.25,
    50: 0.5,
    75: 0.75,
    100: 1,
  ),
);
```

Then `@use` your wrapper everywhere instead of `crayon-css` directly. @forward is a whole larger topic in Sass. For more info, see [Sass: @forward](https://sass-lang.com/documentation/at-rules/forward/#configuring-modules)
