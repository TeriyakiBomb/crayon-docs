---
outline: [2, 3]
---

# Margin

Use the spacing scale to set margins on every side, one side, or an axis. Margins can also be negative or `auto`.

## Sass mixins

Pass `$negative: true`, or use a `minus-*` mixin, for negative margins.

<!--@include: ../reference/mixins/margin.md-->

### Responsive range mixins

Pass a base size followed by named breakpoint overrides, such as `crayon.m-range(4, $md: 8, $lg: 12)`.

<!--@include: ../reference/mixins/responsive-margin.md-->

## Utility classes

<!--@include: ../reference/utility-classes/margin.md-->

## Examples

### Sass mixins

::: code-group

```scss
.card {
  @include crayon.m(4);
  @include crayon.mx-auto;
}
```

```sass
.card
  +crayon.m(4)
  +crayon.mx-auto
```

:::

### Utility classes

```html
<div class="m-4">Margin on all sides</div>
<div class="mx-auto">Centred with auto margins</div>
<div class="center">The same horizontal centering using an alias</div>
<div class="center-y">Automatic vertical margins</div>
<div class="-mt-4">Negative top margin</div>
```

### Sass functions

::: code-group

```scss
.card {
  margin: crayon.size(4);
  margin-top: -(crayon.size(2));
}
```

```sass
.card
  margin: crayon.size(4)
  margin-top: -(crayon.size(2))
```

:::

### CSS variables

```css
.card {
  margin: var(--size-4);
  margin-top: calc(var(--size-2) * -1);
}
```
