---
outline: [2, 3]
---

# States and modes

## Dark mode

The `dark` mixin wraps its content in a
`prefers-color-scheme: dark` media query.

::: tip
You can use [`lightdark()`](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Values/color_value/light-dark) instead of the dark mode mixins, it's a good pattern!
:::

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

## State mixins

The `hover`, `focus`, `focus-visible`, `focus-within`, `active`, `enabled`, `disabled`, and `checked` mixins do what they say on the tin. Nice for consistency, but probably longer than just using CSS.

| Mixin | Selector |
| --- | --- |
| `hover` | `:hover` |
| `focus` | `:focus` |
| `focus-visible` | `:focus-visible` |
| `focus-within` | `:focus-within` |
| `active` | `:active` |
| `enabled` | `:enabled` |
| `disabled` | `:disabled` |
| `checked` | `:checked` |

### Interaction states

Use `focus` whenever an element has focus. Use `focus-visible` when the browser determines that a visible focus indicator is helpful, usually for keyboard navigation. `focus-within` applies to an element when it or one of its descendants has focus.

::: code-group

```scss
.button {
  @include crayon.hover {
    @include crayon.bg("blue-600");
  }

  @include crayon.focus-visible {
    outline: 2px solid crayon.color("blue-400");
    @include crayon.rounded("md");
  }

  @include crayon.active {
    @include crayon.opacity(75);
  }
}

.field {
  @include crayon.focus-within {
    @include crayon.border-color("blue-400");
  }
}
```

```sass
.button
  +crayon.hover
    +crayon.bg("blue-600")

  +crayon.focus-visible
    outline: 2px solid crayon.color("blue-400")
    +crayon.rounded("md")

  +crayon.active
    +crayon.opacity(75)

.field
  +crayon.focus-within
    +crayon.border-color("blue-400")
```

:::

### Form-control states

Use `enabled` and `disabled` with form controls such as buttons and inputs. `checked` applies to checked checkboxes and radio buttons.

::: code-group

```scss
.button {
  @include crayon.enabled {
    cursor: pointer;
  }

  @include crayon.disabled {
    cursor: not-allowed;
    @include crayon.opacity(50);
  }
}

.checkbox {
  @include crayon.checked {
    accent-color: crayon.color("blue-500");
  }
}
```

```sass
.button
  +crayon.enabled
    cursor: pointer

  +crayon.disabled
    cursor: not-allowed
    +crayon.opacity(50)

.checkbox
  +crayon.checked
    accent-color: crayon.color("blue-500")
```

:::
