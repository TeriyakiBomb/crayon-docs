---
outline: [2, 3]
---

# Size

Size sets equal width and height from the spacing scale or a breakpoint width.

## Sass mixins

<!--@include: ../reference/mixins/size.md-->

### Responsive range mixin

Pass a base size followed by named breakpoint overrides, such as `crayon.size-range(8, $md: 12, $lg: 16)`.

<!--@include: ../reference/mixins/responsive-size.md-->

## Utility classes

<!--@include: ../reference/utility-classes/size.md-->

## Examples

### Sass mixins

::: code-group

```scss
.avatar {
  @include crayon.size(8);
  @include crayon.max-size(24);
}
```

```sass
.avatar
  +crayon.size(8)
  +crayon.max-size(24)
```

:::

### Utility classes

```html
<div class="size-8">2rem square</div>
<div class="size-full">Fill the parent</div>
<div class="min-size-8 max-size-24">Constrained size</div>
```

### Sass functions

```scss
.avatar {
  width: crayon.size(8);
  height: crayon.size(8);
}
```

### CSS variables

```css
.avatar {
  width: var(--size-8);
  height: var(--size-8);
}
```
