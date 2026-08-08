---
outline: [2, 3]
---

# Spacing, padding and margins

The spacing scale is built on `$base-size` (4px by default). Size 4 = 4 × 4px = 16px = 1rem.

Every step is also available as a CSS variable, such as `--size-4`, `--size-8`, or `--size-0_5`.

## Sass mixins

### Padding mixins

<!--@include: ./reference/mixins/padding.md-->

### Margin mixins

Pass `$negative: true`, or use a `minus-*` mixin, for negative margins.

<!--@include: ./reference/mixins/margin.md-->

### Gap mixins

<!--@include: ./reference/mixins/gap.md-->

### Responsive range mixins

Range mixins take a base size followed by named breakpoint overrides, such as `crayon.p-range(4, $md: 8, $lg: 12)`.

<!--@include: ./reference/mixins/responsive-spacing.md-->

## Utility classes

### Padding

<!--@include: ./reference/utility-classes/padding.md-->

### Margin

<!--@include: ./reference/utility-classes/margin.md-->

### Gap

<!--@include: ./reference/utility-classes/gap.md-->

## Examples

### Sass mixins

::: code-group

```scss
.card {
  @include crayon.p(4);
  @include crayon.mx-auto;
}

.toolbar {
  @include crayon.gap(2);
}
```

```sass
.card
  +crayon.p(4)
  +crayon.mx-auto

.toolbar
  +crayon.gap(2)
```

:::

### Utility classes

```html
<div class="p-4">Padding on all sides</div>
<div class="px-8">Horizontal padding</div>
<div class="pt-2">Top padding</div>
<div class="m-4">Margin on all sides</div>
<div class="mx-auto max-w-xl">Centred container</div>
<div class="-mt-4">Negative top margin</div>
```

### Sass functions

::: code-group

```scss
.card {
  padding: crayon.size(4) crayon.size(8);
  margin-top: -(crayon.size(4));
}
```

```sass
.card
  padding: crayon.size(4) crayon.size(8)
  margin-top: -(crayon.size(4))
```

:::

### CSS variables

```css
.card {
  padding: var(--size-4) var(--size-8);
  margin-top: calc(var(--size-4) * -1);
  margin-inline: auto;
}
```
