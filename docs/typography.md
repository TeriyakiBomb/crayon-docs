---
outline: [2, 3]
---

# Typography

Font size classes set both `font-size` (in rem) and `line-height` together. 

Font weight classes are scoped to text elements to avoid unintentional inheritance. This means, if you prefer, you can simply use `bold` instead of font-bold on text elements without the `text` prefix

## Sass mixins

<!--@include: ./reference/mixins/typography.md-->

### Responsive range mixins

Pass a base value followed by named breakpoint overrides, such as `crayon.text-size-range("base", $md: "lg", $lg: "2xl")`.

<!--@include: ./reference/mixins/responsive-typography.md-->

## Utility classes

<!--@include: ./reference/utility-classes/typography.md-->

## Examples

### Mixins

::: code-group

```scss
@use "crayon-css" as crayon;

.page-title {
  @include crayon.text("4xl");
  @include crayon.font("bold");
}

.supporting-copy {
  @include crayon.text("sm");
  @include crayon.font("light");
  @include crayon.italic;
}
```

```sass
@use "crayon-css" as crayon

.page-title
  +crayon.text("4xl")
  +crayon.font("bold")

.supporting-copy
  +crayon.text("sm")
  +crayon.font("light")
  +crayon.italic
```

:::

### Utility classes

```html
<!-- Font size and line height -->
<p class="text-base">Base body text</p>
<p class="text-sm">Small body text</p>
<h1 class="text-4xl">Large heading</h1>

<!-- Global font weight classes -->
<p class="font-bold">Bold text</p>
<span class="font-semibold">Semibold text</span>
<p class="font-light">Light text</p>

<!-- Scoped style classes work inside text elements -->
<p><span class="italic">Italic text</span></p>
<p><span class="not-italic">Normal text</span></p>
```

### Sass functions

::: code-group

```scss
@use "crayon-css" as crayon;

.page-title {
  font-family: crayon.font-family("sans");
  font-size: crayon.font-size("4xl");
  font-weight: crayon.font-weight("bold");
  line-height: crayon.leading("tight");
}

.supporting-copy {
  font-size: crayon.font-size("sm");
  font-weight: crayon.font-weight("light");
  letter-spacing: crayon.tracking("wide");
}
```

```sass
@use "crayon-css" as crayon

.page-title
  font-family: crayon.font-family("sans")
  font-size: crayon.font-size("4xl")
  font-weight: crayon.font-weight("bold")
  line-height: crayon.leading("tight")

.supporting-copy
  font-size: crayon.font-size("sm")
  font-weight: crayon.font-weight("light")
  letter-spacing: crayon.tracking("wide")
```

:::

### CSS Variables

```html
<style>
  .page-title {
    font-family: var(--font-sans);
    font-size: var(--text-4xl);
    font-weight: var(--font-weight-bold);
    line-height: var(--leading-tight);
  }

  .supporting-copy {
    font-size: var(--text-sm);
    font-weight: var(--font-weight-light);
    letter-spacing: var(--tracking-wide);
  }
</style>
```
