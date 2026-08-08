---
outline: [2, 3]
---

# Grid

## Sass mixins

<!--@include: ../reference/mixins/grid.md-->

### Responsive range mixins

Pass a base value followed by named breakpoint overrides, such as `crayon.grid-cols-range(1, $md: 2, $lg: 4)`.

<!--@include: ../reference/mixins/responsive-grid.md-->

## Utility classes

<!--@include: ../reference/utility-classes/grid.md-->

## Grid examples

### Sass mixins

```html
<style lang="scss">
  @use "crayon-css" as crayon;

  .layout-grid {
    @include crayon.grid;
    @include crayon.grid-cols(3);
    @include crayon.gap(4);

    .wide {
      @include crayon.col-span(2);
    }

    .full-row {
      @include crayon.col-span-full;
    }
  }
</style>
```

### Utility classes

```html
<div class="layout-grid grid grid-cols-3 gap-4">
  <div class="wide col-span-2">Wide column</div>
  <div>Narrow column</div>
  <div class="full-row col-span-full">Full width row</div>
</div>
```

### Sass functions

```html
<style lang="scss">
  @use "crayon-css" as crayon;

  .layout-grid {
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: crayon.size(4);

    .wide {
      grid-column: span 2 / span 2;
    }

    .full-row {
      grid-column: 1 / -1;
    }
  }
</style>
```

### CSS Variables

```css
<style>
  .layout-grid {
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: var(--size-4);
  }

  .layout-grid .wide {
    grid-column: span 2 / span 2;
  }

  .layout-grid .full-row {
    grid-column: 1 / -1;
  }
</style>
```
