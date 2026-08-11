---
outline: [2, 3]
---

# Composition mixins

Composition mixins are high-level shortcuts for patterns you write constantly. Rather than reaching for multiple mixins, a single mixin can  handles the whole thing when needed. All parameters are optional, so you can use only what you need.
Absolutely not an idea ~stolen~ borrowed from SwiftUI^[Maybe slighty ~stolen~ borrowed from SwiftUI]

## Stacks

### vstack and stack

`vstack($gap, $reverse: false)` and `stack($gap, $reverse: false)`

Stack children vertically with a consistent gap from the spacing scale. Pass
`$reverse: true` to use `column-reverse`.

::: code-group

```scss
.card-list {
  @include crayon.vstack(4);
}

.sidebar {
  @include crayon.stack(6); /* same thing, different name */
}

.newest-first {
  @include crayon.vstack(4, $reverse: true);
}
```

```sass
.card-list
  +crayon.vstack(4)

.sidebar
  +crayon.stack(6) /* same thing, different name */

.newest-first
  +crayon.vstack(4, $reverse: true)
```

:::

Output: `display: flex; flex-direction: column; gap: <spacing-scale-value>;`, or
`flex-direction: column-reverse` when reversed.

### hstack

`hstack($gap, $reverse: false)`

Lay children out in a horizontal row with a gap. No wrapping, items stay on one line. Use `cluster` if you want items to wrap when space is tight.
Pass `$reverse: true` to use `row-reverse`.

::: code-group

```scss
.toolbar {
  @include crayon.hstack(3); 
}

.toolbar-reversed {
  @include crayon.hstack(3, $reverse: true);
}
```

```sass
.toolbar
  +crayon.hstack(3)

.toolbar-reversed
  +crayon.hstack(3, $reverse: true)
```

:::

Output: `display: flex; flex-direction: row; gap: <spacing-scale-value>;`, or
`flex-direction: row-reverse` when reversed.

### cluster

`cluster($gap)`

Like `hstack`, but items wrap onto new lines when there isn't enough space. Great for tag lists, badge groups or anything that should reflow naturally.

::: code-group

```scss
.tags {
  @include crayon.cluster(2);
}
```

```sass
.tags
  +crayon.cluster(2)
```

:::

Output: `display: flex; flex-direction: row; flex-wrap: wrap; gap: <spacing-scale-value>;`

### Nesting composition mixins

The layout primitives (`vstack`, `hstack`, `cluster`) are composable. So you can do things like mae  a `vstack` of sections, each containing an `hstack` of items:

::: code-group

```scss
.layout {
  @include crayon.vstack(8);

  .row {
    @include crayon.hstack(4);
  }
}
```

```sass
.layout
  +crayon.vstack(8)

  .row
    +crayon.hstack(4)
```

:::

Wrap a layout primitive in `box` to add visuals of the container:

::: code-group

```scss
.card {
  @include crayon.box($p: 6, $rounded: "xl", $bg: "white", $border: "slate-200");
  @include crayon.vstack(4);
}
```

```sass
.card
  +crayon.box($p: 6, $rounded: "xl", $bg: "white", $border: "slate-200")
  +crayon.vstack(4)
```

:::

Or don't. S'all good.

## palette

`palette($family, $bg, $text, $border)`

Apply background, text, and border colours from a single colour family in one call. All three colour parameters are optional, any you don't need, just skip them.

The colour family is the prefix (e.g. `"red"`), and the shade is the number (e.g. `100`, `900`). These map directly to the colour palette: `"red"` + `100` → `red-100`.

::: code-group

```scss
/* Alert variants */
.alert-success { @include crayon.palette("green", $bg: 100, $text: 900, $border: 300); }
.alert-warning { @include crayon.palette("amber", $bg: 100, $text: 900, $border: 300); }
.alert-error   { @include crayon.palette("red",   $bg: 100, $text: 900, $border: 300); }

/* Badge — bg + text only, no border */
.badge-new { @include crayon.palette("emerald", $bg: 50, $text: 700); }

/* Dark mode */
.card {
  @include crayon.palette("slate", $bg: 50, $text: 900, $border: 200);
  
  @include crayon.dark {
    @include crayon.palette("slate", $bg: 900, $text: 50, $border: 700);
  }
}
```

```sass
/* Alert variants */
.alert-success
  +crayon.palette("green", $bg: 100, $text: 900, $border: 300)
.alert-warning
  +crayon.palette("amber", $bg: 100, $text: 900, $border: 300)
.alert-error
  +crayon.palette("red", $bg: 100, $text: 900, $border: 300)

/* Badge — bg + text only, no border */
.badge-new
  +crayon.palette("emerald", $bg: 50, $text: 700)

/* Dark mode */
.card
  +crayon.palette("slate", $bg: 50, $text: 900, $border: 200)

  +crayon.dark
    +crayon.palette("slate", $bg: 900, $text: 50, $border: 700)
```

:::

## box

`box($p, $px, $py, $rounded, $bg, $border)`

Padding, border radius, background, and border in a single call. `$px` and `$py` can be used alongside or instead of `$p` for asymmetric padding (e.g. badges and buttons that need wider horizontal padding than vertical).

::: code-group

```scss
/* Card with full treatment */
.panel {
  @include crayon.box($p: 6, $rounded: "xl", $bg: "white", $border: "slate-200");

  @include crayon.dark {
    @include crayon.box($bg: "slate-800", $border: "slate-700");
  }
}

/* Asymmetric padding */
.badge {
  @include crayon.box($px: 3, $py: 1, $rounded: "full", $bg: "blue-100");
}

/* Just a shape, no colour */
.card {
  @include crayon.box($p: 4, $rounded: "lg");
}
```

```sass
/* Card with full treatment */
.panel
  +crayon.box($p: 6, $rounded: "xl", $bg: "white", $border: "slate-200")

  +crayon.dark
    +crayon.box($bg: "slate-800", $border: "slate-700")

/* Asymmetric padding */
.badge
  +crayon.box($px: 3, $py: 1, $rounded: "full", $bg: "blue-100")

/* Just a shape, no colour */
.card
  +crayon.box($p: 4, $rounded: "lg")
```

:::

`$border` sets `border: 1px solid <colour>`  it doesn't control border width, just whether a border is present and what colour it is. For custom widths, combine with `@include crayon.border(2)`.

## center

`center($axis?)`

Flex centering shorthand. With no argument, it’ll center a single child both horizontally and vertically. Pass `x` or `y` to constrain to one axis.

::: code-group

```scss
/* Both axes */
.hero {
  @include crayon.center;
}

/* Horizontal only */
.nav {
  @include crayon.center(x);
}

/* Vertical only */
.sidebar {
  @include crayon.center(y);
}
```

```sass
/* Both axes */
.hero
  +crayon.center

/* Horizontal only */
.nav
  +crayon.center(x)

/* Vertical only */
.sidebar
  +crayon.center(y)
```

:::

`center` always sets `display: flex`. Without an argument it sets both `align-items: center` and `justify-content: center`. With `x`, only `justify-content: center`. With `y`, only `align-items: center`.

At **last**, a solution to the hardest problem in software engineering. History has been made today, people.

## 💧Fluid mixin

The `fluid()` mixin generates a `clamp()` value that smoothly interpolates between two scale values across a viewport range. TL;DR - [this](https://utopia.fyi)

Basically, instead of text or spacing snapping between sizes at hard breakpoints, values scale continuously as the viewport changes size.

::: code-group

```scss
.hero {
  @include crayon.fluid-text("base", "4xl");
  /* → font-size: clamp(1rem, -0.25rem + 1.25vw, 2.25rem); */
}

/* Fluid spacing — numeric keys from the size scale */
.section {
  @include crayon.fluid-p(4, 12);
  /* → padding: clamp(1rem, -0.5rem + 1.5vw, 3rem); */
}

.sidebar {
  @include crayon.fluid("width", 48, 80, "lg", "xl");
}
```

```sass
.hero
  +crayon.fluid-text("base", "4xl")
  /* → font-size: clamp(1rem, -0.25rem + 1.25vw, 2.25rem); */

/* Fluid spacing — numeric keys from the size scale */
.section
  +crayon.fluid-p(4, 12)
  /* → padding: clamp(1rem, -0.5rem + 1.5vw, 3rem); */

.sidebar
  +crayon.fluid("width", 48, 80, "lg", "xl")
```

:::

**Parameters:**

- `$property`  any CSS property that accepts a size (`font-size`, `padding`, `gap`, `width`, etc.)
- `$min-key`  minimum value. Numeric key (e.g. `4`) from the size scale. String (e.g. `"base"`) from the font-size scale.
- `$max-key`  maximum value, same rules.
- `$from`  breakpoint at which scaling starts. Named key from `$breakpoints`. Defaults to `"sm"` (640px).
- `$to`  breakpoint at which scaling stops. Named key from `$breakpoints`. Defaults to `"xl"` (1280px).

**Shorthand wrappers:**

| Mixin                    | Equivalent                       |
| ------------------------ | -------------------------------- |
| `fluid-text($min, $max)` | `fluid("font-size", $min, $max)` |
| `fluid-p($min, $max)`    | `fluid("padding", $min, $max)`   |
| `fluid-gap($min, $max)`  | `fluid("gap", $min, $max)`       |

All shorthands accept optional `$from` and `$to` as third and fourth arguments.

**Why it's different from breakpoint mixins:**

`screen()` gives you hard jumps. The value snaps from one size to another. `fluid()` gives you smooth transitions the value grows linearly between the two endpoints. Use `fluid-text` for headings and display copy. Use `fluid-p` for section padding that should feel generous on desktop but not wasteful on mobile.
