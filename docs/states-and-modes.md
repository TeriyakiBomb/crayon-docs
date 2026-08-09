---
outline: [2, 3]
---

# States and modes

## Dark mode

The `dark` mixin wraps its content in a
`prefers-color-scheme: dark` media query.

::: code-group

```scss
.card {
  @include crayon.dark {
    @include crayon.bg("slate-900");
    @include crayon.text-color("slate-100");
  }
}
```

```sass
.card
  +crayon.dark
    +crayon.bg("slate-900")
    +crayon.text-color("slate-100")
```

:::

## State

The `hover`, `focus`, and `active` mixins do what they say on the tin. Nice for consistency, but probably longer than just using CSS.

::: code-group

```scss
.button {
  @include crayon.hover {
    @include crayon.bg("blue-600");
  }

  @include crayon.focus {
    outline: 2px solid crayon.color("blue-400");
    @include crayon.rounded("md");
  }

  @include crayon.active {
    @include crayon.opacity(75);
  }
}
```

```sass
.button
  +crayon.hover
    +crayon.bg("blue-600")

  +crayon.focus
    outline: 2px solid crayon.color("blue-400")
    +crayon.rounded("md")

  +crayon.active
    +crayon.opacity(75)
```

:::

