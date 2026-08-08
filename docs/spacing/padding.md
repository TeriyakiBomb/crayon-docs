---
outline: [2, 3]
---

# Padding

Use the spacing scale to set padding on every side, one side, or an axis.

## Sass mixins

<!--@include: ../reference/mixins/padding.md-->

### Responsive range mixins

Pass a base size followed by named breakpoint overrides, such as `crayon.p-range(4, $md: 8, $lg: 12)`.

<!--@include: ../reference/mixins/responsive-padding.md-->

## Utility classes

<!--@include: ../reference/utility-classes/padding.md-->

## Examples

### Sass mixins

::: code-group

```scss
.card {
  @include crayon.p(4);
  @include crayon.px(8);
}
```

```sass
.card
  +crayon.p(4)
  +crayon.px(8)
```

:::

### Utility classes

```html
<div class="p-4">Padding on all sides</div>
<div class="px-8">Horizontal padding</div>
<div class="pt-2">Top padding</div>
```

### Sass functions

::: code-group

```scss
.card {
  padding: crayon.size(4) crayon.size(8);
}
```

```sass
.card
  padding: crayon.size(4) crayon.size(8)
```

:::

### CSS variables

```css
.card {
  padding: var(--size-4) var(--size-8);
}
```
