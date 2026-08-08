---
outline: [2, 3]
---

# Width

Use the spacing scale or breakpoint. Width utilities also cover `auto`, `full`, viewport widths (`screen`, `svw`, `lvw`, `dvw`), intrinsic widths (`min`, `max`, `fit`), fractions, and `max-w-none`.

::: info 🥷 Didyaknow?
To add new fraction denominators (e.g. eighths), add `8` to `$layout-divisions` in config.
:::

## Sass mixins

<!--@include: ../reference/mixins/width.md-->

### Responsive range mixin

Pass a base size followed by named breakpoint overrides, such as `crayon.w-range(24, $md: 48, $lg: 96)`.

<!--@include: ../reference/mixins/responsive-width.md-->

## Utility classes

<!--@include: ../reference/utility-classes/width.md-->

## Examples

### Sass mixins

::: code-group

```scss
.card {
  @include crayon.w(24);
  @include crayon.max-w(96);
}
```

```sass
.card
  +crayon.w(24)
  +crayon.max-w(96)
```

:::

### Utility classes

```html
<div class="w-24 max-w-96">Constrained width</div>
<div class="w-1/2">Half width</div>
<div class="w-full">Full width</div>
<div class="w-fit">Fit-content width</div>
```

### Sass functions

Use `size()` to look up a spacing-scale value for the `width` property.

::: code-group

```scss
.sidebar {
  width: crayon.size(64);
}
```

```sass
.sidebar
  width: crayon.size(64)
```

:::

### CSS variables

```css
.sidebar {
  width: var(--size-64);
}
```
