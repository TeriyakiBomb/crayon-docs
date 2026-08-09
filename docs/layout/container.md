---
outline: [2, 3]
---

# Container

A favourite(probably) from Tailwind 3, Crayon has it too.

If you don't know: The container fills the available width, then sets its maximum width to the
current breakpoint as the viewport grows.

## Sass mixin

`container($center: true)`

By default, the mixin centers the container. Pass `$center: false` to prevent this.

::: code-group

```scss
.page {
  @include crayon.container;
}

.page-start {
  @include crayon.container($center: false);
}
```

```sass
.page
  +crayon.container

.page-start
  +crayon.container($center: false)
```

:::

## Utility classes

<!--@include: ../reference/utility-classes/container.md-->
