---
outline: [2, 3]
---

# Flexbox

## Sass mixins

<!--@include: ../reference/mixins/flexbox.md-->

## Utility classes

<!--@include: ../reference/utility-classes/flexbox.md-->

## Flexbox examples

### Sass mixins

```html
<style lang="scss">
  @use "crayon-css" as crayon;

  .site-nav {
    @include crayon.flex;
    @include crayon.items-center;
    @include crayon.justify-between;
    @include crayon.p(4);

    .links {
      @include crayon.flex;
      @include crayon.gap(4);
    }
  }
</style>
```

### Utility classes

```html
<nav class="site-nav flex items-center justify-between p-4">
  <a href="/">Logo</a>
  <div class="links flex gap-4">
    <a href="/about">About</a>
    <a href="/contact">Contact</a>
  </div>
</nav>
```

### Sass functions

```html
<style lang="scss">
  @use "crayon-css" as crayon;

  .site-nav {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: crayon.size(4);

    .links {
      display: flex;
      gap: crayon.size(4);
    }
  }
</style>
```

### CSS Variables

```css
.site-nav {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: var(--size-4);
}

.site-nav .links {
  display: flex;
  gap: var(--size-4);
}
```
