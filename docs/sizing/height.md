---
outline: [2, 3]
---

# Height

Use the spacing scale or breakpoint. Height utilities also cover `auto`, `full`, viewport heights (`screen`, `svh`, `lvh`, `dvh`), intrinsic heights (`min`, `max`, `fit`), and `max-h-none`.

## Sass mixins

<!--@include: ../reference/mixins/height.md-->

### Responsive range mixin

Pass a base size followed by named breakpoint overrides, such as `crayon.h-range(24, $md: 48, $lg: 96)`.

<!--@include: ../reference/mixins/responsive-height.md-->

## Utility classes

<!--@include: ../reference/utility-classes/height.md-->

## Examples

### Sass mixins

::: code-group

```scss
.panel {
  @include crayon.h(24);
  @include crayon.max-h(96);
}
```

```sass
.panel
  +crayon.h(24)
  +crayon.max-h(96)
```

:::

### Utility classes

```html
<div class="h-24 max-h-96">Constrained height</div>
<div class="h-full">Full parent height</div>
<div class="h-screen">Viewport height</div>
<div class="h-dvh">Dynamic viewport height</div>
```

### Sass functions

```scss
.panel {
  height: crayon.size(24);
  max-height: crayon.size(96);
}
```

### CSS variables

```css
.panel {
  height: var(--size-24);
  max-height: var(--size-96);
}
```
