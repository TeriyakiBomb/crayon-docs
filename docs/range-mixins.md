---
outline: [2, 3]
---

# Range Mixins

Range mixins let you set a property across multiple breakpoints in a single call. Neat! The `$base` value applies at all sizes; named keyword arguments map breakpoint names to values at that width and above.

::: code-group

```scss
/* Instead of this: */
.hero {
  @include crayon.p(4);
  @include crayon.screen("md") { @include crayon.p(8); }
  @include crayon.screen("lg") { @include crayon.p(12); }
}

/* Write this: */
.hero {
  @include crayon.p-range(4, $md: 8, $lg: 12);
}
```

```sass
/* Instead of this: */
.hero
  +crayon.p(4)
  +crayon.screen("md")
    +crayon.p(8)
  +crayon.screen("lg")
    +crayon.p(12)

/* Write this: */
.hero
  +crayon.p-range(4, $md: 8, $lg: 12)
```

:::

Any breakpoint name from `$breakpoints` in config works as a keyword  `$sm`, `$md`, `$lg`, `$xl`, `$xxl` by default.

## Example

::: code-group

```scss
/* Heading that grows at breakpoints */
.page-title {
  @include crayon.text-size-range("xl", $md: "2xl", $lg: "4xl");
}

/* Card grid: 1 col, 2 at md, 3 at xl */
.card-grid {
  @include crayon.grid;
  @include crayon.grid-cols-range(1, $md: 2, $xl: 3);
  @include crayon.gap-range(4, $md: 6);
}
```

```sass
/* Heading that grows at breakpoints */
.page-title
  +crayon.text-size-range("xl", $md: "2xl", $lg: "4xl")

/* Card grid: 1 col, 2 at md, 3 at xl */
.card-grid
  +crayon.grid
  +crayon.grid-cols-range(1, $md: 2, $xl: 3)
  +crayon.gap-range(4, $md: 6)
```

:::

## Reference

### Spacing

#### Padding

<!--@include: ./reference/mixins/responsive-padding.md-->

#### Margin

<!--@include: ./reference/mixins/responsive-margin.md-->

#### Gap

<!--@include: ./reference/mixins/responsive-gap.md-->

### Sizing

#### Width

<!--@include: ./reference/mixins/responsive-width.md-->

#### Height

<!--@include: ./reference/mixins/responsive-height.md-->

#### Size

<!--@include: ./reference/mixins/responsive-size.md-->

### Layout

<!--@include: ./reference/mixins/responsive-grid.md-->

### Typography

<!--@include: ./reference/mixins/responsive-typography.md-->

### Borders

<!--@include: ./reference/mixins/responsive-borders.md-->
