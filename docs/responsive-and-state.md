---
outline: [2, 3]
---

# Responsive, state, visibility & Dark Mode

## Breakpoints

::: info
One way in which crayon differs to Tailwind is that Sass variables cannot begin with a number. This is used extensively by range mixins. So instead of `2xl` , you should call it something else. We use XXL by default. The Sass compiler will complain if you attempt to name a breakpoint with a number. This only applies to breakpoints, no other named scales are currently affected.
:::

Breakpoints are defined in `$breakpoints` in config. The default set matches Tailwind:

`sm` (640px), `md` (768px), `lg` (1024px), `xl` (1280px), `xxl` (1536px).

Using mixins is the correct way to manage responsive behaviour in Crayon. You won't find any `md:flex` here.

## Mixins

### screen

`screen($breakpoint)`

Pass a breakpoint into the screen mixin, pretty straightforward:

::: code-group

```scss
@use 'crayon-css' as crayon;

.button {
  @include crayon.screen("md") {
    padding: crayon.size(4);
  }

  @include crayon.dark {
    background: crayon.color("blue-700");
    color: crayon.color("slate-100");
  }
}
```

```sass
@use 'crayon-css' as crayon

.button
  +crayon.screen("md")
    padding: crayon.size(4)

  +crayon.dark
    background: crayon.color("blue-700")
    color: crayon.color("slate-100")
```

:::

### screens

`screens($breakpoints...)`

A multi-breakpoint variant of `screen()`. Applies the same styles at each named breakpoint you pass:

::: code-group

```scss
@include crayon.screens("md", "xl") {
  flex-direction: row;
}
```

```sass
+crayon.screens("md", "xl")
  flex-direction: row
```

:::

## Display

<!--@include: ./reference/utility-classes/display.md-->

## Responsive Visibility

Shorthand mixins for showing and hiding elements at a breakpoint. Useful for swapping between mobile and desktop layouts without a class toggle.

<!--@include: ./reference/mixins/responsive-visibility.md-->

`show-until` and `hide-from` produce identical output. Same for `show-from` and `hide-until`. Use whichever reads more naturally for the element you're describing.

::: code-group

```scss
.mobile-nav  { @include crayon.hide-from("md"); }
.desktop-nav { @include crayon.show-from("md"); }
```

```sass
.mobile-nav
  +crayon.hide-from("md")

.desktop-nav
  +crayon.show-from("md")
```

:::

