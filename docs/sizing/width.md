---
outline: [2, 3]
---

# Width

Use the spacing scale or a breakpoint. Width utilities also cover `auto`, `full`, viewport widths (`screen`, `vw`, `svw`, `lvw`, `dvw`), intrinsic widths (`min`, `max`, `fit`), fractions, and `max-w-none`.

::: info 🥷 Didyaknow?
To add new fraction denominators (e.g. eighths), add `8` to `$layout-divisions` in config.
:::

## Sass mixins

<!--@include: ../reference/mixins/width.md-->

### Accepted keys

`w()`, `min-w()`, and `max-w()` accept:

- A size-scale, such as `24`
- A breakpoint name, like `"md"`
- A fraction defined in `$layout-divisions`, like `"1/2"` or `"2/3"`
- A viewport keyword: `"screen"`, `"vw"`, `"svw"`, `"lvw"`, or `"dvw"`

::: code-group

```scss
.sidebar {
  @include crayon.w("1/2");
  @include crayon.min-w(64);
  @include crayon.max-w("lg");
}

.full-viewport {
  @include crayon.w("dvw");
}
```

```sass
.sidebar
  +crayon.w("1/2")
  +crayon.min-w(64)
  +crayon.max-w("lg")

.full-viewport
  +crayon.w("dvw")
```

:::

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
<div class="min-w-1/2 max-w-2/3">Fractionally constrained width</div>
<div class="w-full">Full width</div>
<div class="w-vw">Viewport width</div>
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
