---
outline: [2, 3]
---

# Height

Use the spacing scale or a breakpoint. Height utilities also cover `auto`, `full`, viewport heights (`screen`, `vh`, `svh`, `lvh`, `dvh`), intrinsic heights (`min`, `max`, `fit`), fractions, and `max-h-none`.

## Sass mixins

<!--@include: ../reference/mixins/height.md-->

### Accepted keys

`h()`, `min-h()`, and `max-h()` accept:

- A size-scale, such as `24`
- A breakpoint name, like `"md"`
- A fraction defined in  `$layout-divisions`, like  `"1/2"` or `"2/3"`
- A viewport keyword: `"screen"`, `"vh"`, `"svh"`, `"lvh"`, or `"dvh"`

::: code-group

```scss
.panel {
  @include crayon.h("1/2");
  @include crayon.min-h(64);
  @include crayon.max-h("lg");
}

.full-viewport {
  @include crayon.h("dvh");
}
```

```sass
.panel
  +crayon.h("1/2")
  +crayon.min-h(64)
  +crayon.max-h("lg")

.full-viewport
  +crayon.h("dvh")
```

:::

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
<div class="min-h-1/2 max-h-2/3">Fractionally constrained height</div>
<div class="h-full">Full parent height</div>
<div class="h-screen">Viewport height</div>
<div class="h-vh">Viewport height alias</div>
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
