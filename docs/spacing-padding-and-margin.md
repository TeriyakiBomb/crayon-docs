---
outline: [2, 3]
---

# Spacing, padding and margins

The spacing scale is built on `$base-size` (4px by default). Size 4 = 4 × 4px = 16px = 1rem. 

Every step in the spacing scale is also available as a CSS variable  `--size-4`, `--size-8`, `--size-0_5`

## Utility classes

### Padding

<!--@include: ./reference/utility-classes/padding.md-->

### Margin

<!--@include: ./reference/utility-classes/margin.md-->

### Gap

<!--@include: ./reference/utility-classes/gap.md-->

## Examples

### Utility classes

```html
<div class="p-4">Padding on all sides</div>
<div class="px-8">Horizontal padding</div>
<div class="pt-2">Top padding</div>
<div class="m-4">Margin on all sides</div>
<div class="mx-auto max-w-xl">Centred container</div>
<div class="-mt-4">Negative top margin</div>
<div class="size-12">Equal width and height</div>
```

### Sass mixins

::: code-group

```scss
.card {
  @include crayon.p(4);
  @include crayon.px(8);
  @include crayon.max-w("xl");
  @include crayon.mx-auto;
}

.avatar {
  @include crayon.size(12);
}
```

```sass
.card
  +crayon.p(4)
  +crayon.px(8)
  +crayon.max-w("xl")
  +crayon.mx-auto

.avatar
  +crayon.size(12)
```

:::

### Sass functions

::: code-group

```scss
.card {
  padding: crayon.size(4) crayon.size(8);
  margin-top: -(crayon.size(4));
  max-width: crayon.size(96);
}
```

```sass
.card
  padding: crayon.size(4) crayon.size(8)
  margin-top: -(crayon.size(4))
  max-width: crayon.size(96)
```

:::

### CSS variables

```css
.card {
  padding: var(--size-4) var(--size-8);
  margin-top: calc(var(--size-4) * -1);
  max-width: var(--size-96);
  margin-inline: auto;
}
```
