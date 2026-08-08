---
outline: [2, 3]
---

# Gap

Use the spacing scale to set gaps between rows, columns, or both.

## Sass mixins

<!--@include: ../reference/mixins/gap.md-->

### Responsive range mixins

Pass a base size followed by named breakpoint overrides, such as `crayon.gap-range(2, $md: 4, $lg: 8)`.

<!--@include: ../reference/mixins/responsive-gap.md-->

## Utility classes

<!--@include: ../reference/utility-classes/gap.md-->

## Examples

### Sass mixins

::: code-group

```scss
.grid {
  @include crayon.gap(4);
  @include crayon.gap-x(8);
}
```

```sass
.grid
  +crayon.gap(4)
  +crayon.gap-x(8)
```

:::

### Utility classes

```html
<div class="grid gap-4">Row and column gap</div>
<div class="grid gap-x-8 gap-y-4">Different column and row gaps</div>
```

### Sass functions

::: code-group

```scss
.grid {
  gap: crayon.size(4);
}
```

```sass
.grid
  gap: crayon.size(4)
```

:::

### CSS variables

```css
.grid {
  gap: var(--size-4);
}
```
