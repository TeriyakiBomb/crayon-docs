---
outline: [2, 3]
---

# Sizing

Width, height, and size classes use the same spacing scale, plus fractional classes derived from `$layout-divisions`, and keyword values. You can also pass breakpoint values into size classes and mixins.

> To add new fraction denominators (e.g. eighths), add `8` to `$layout-divisions` in config.

## Sass mixins

### Width mixins

<!--@include: ./reference/mixins/width.md-->

### Height mixins

<!--@include: ./reference/mixins/height.md-->

### Size mixins

<!--@include: ./reference/mixins/size.md-->

### Responsive range mixins

Range mixins take a base size followed by named breakpoint overrides, such as `crayon.w-range(24, $md: 48, $lg: 96)`.

<!--@include: ./reference/mixins/responsive-sizing.md-->

## Utility classes

### Width

<!--@include: ./reference/utility-classes/width.md-->

### Height

<!--@include: ./reference/utility-classes/height.md-->

### Size

<!--@include: ./reference/utility-classes/size.md-->

## Examples

### Sass mixins

::: code-group

```scss
.card {
  @include crayon.w(24);
  @include crayon.max-w(96);
}

.avatar {
  @include crayon.size(8);
}
```

```sass
.card
  +crayon.w(24)
  +crayon.max-w(96)

.avatar
  +crayon.size(8)
```

:::

### Utility classes

```html
<!-- Numeric values use the spacing scale -->
<div class="w-24">Width: 6rem</div>
<div class="h-12">Height: 3rem</div>
<div class="size-8">Width and height: 2rem</div>

<!-- Fractions are generated from $layout-divisions -->
<div class="w-1/2">Width: 50%</div>
<div class="w-2/3">Width: 66.666%</div>

<!-- Sizing keywords and constraints -->
<div class="w-full h-screen">Full width and viewport height</div>
<div class="w-fit h-dvh">Fit-content width and dynamic viewport height</div>
<div class="min-w-0 max-w-96">Constrained width</div>
```

### Sass functions

::: code-group

```scss
.card {
  width: crayon.size(24);
  max-width: crayon.size(96);
}

.avatar {
  width: crayon.size(8);
  height: crayon.size(8);
}
```

```sass
.card
  width: crayon.size(24)
  max-width: crayon.size(96)

.avatar
  width: crayon.size(8)
  height: crayon.size(8)
```

:::

### CSS variables

```css
.card {
  width: var(--size-24);
  max-width: var(--size-96);
}

.avatar {
  width: var(--size-8);
  height: var(--size-8);
}
```
