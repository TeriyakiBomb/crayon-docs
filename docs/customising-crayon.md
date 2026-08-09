# Customising and extending Crayon

All defaults live in `src/_config.scss`. To override them, create a wrapper file that forwards Crayon with your values:

```scss
/* src/styles/_my-custom-config.scss */
@forward 'crayon-css' with (
  $base-size: 8px,
  $font-families: (
    "sans": ("Inter", system-ui, sans-serif),
  ),
  $default-font: "sans",
  $colors: (
    "brand-50": #f0f0ff,
  )
);
```

Then `@use` your wrapper everywhere instead of `crayon-css` directly. @forward is a whole larger topic in Sass. For more info, see [Sass: @forward](https://sass-lang.com/documentation/at-rules/forward/#configuring-modules)
