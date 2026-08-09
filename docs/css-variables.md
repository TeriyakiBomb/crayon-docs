---
outline: [2, 3]
---

# CSS Variables

Crayon generates CSS custom properties for every value in its config. 

These are output on `:root` automatically when you import Crayon, making the full design token set available anywhere in your project without a Sass build step.

## Usage

```css
.card {
  background: var(--color-white);
  color: var(--color-slate-900);
  padding: var(--size-5) var(--size-6);
  font-size: var(--text-sm);
  font-weight: var(--font-weight-medium);
}
```

### Colours

Every colour in `$colors` is available as `--color-{name}`:

```css
--color-slate-700
--color-blue-500
--color-red-300
--color-white
```

The name matches the utility class exactly: `.bg-blue-500` uses `--color-blue-500`.

### Sizes

Every step in the spacing scale is available as `--size-{n}`. Fractional steps use underscores instead of dots:

```css
--size-4
--size-0_5
--size-1_5
--size-96
```

### Typography

Font sizes, weights, and the font family are available as:

```css
--text-sm
--text-2xl
--font-weight-bold
--font-weight-semibold
--font-family
```

## Reference

| **Category**   | **Pattern**            | **Example**               |
| -------------- | ---------------------- | ------------------------- |
| Colours        | `--color-{name}`       | `var(--color-blue-500)`   |
| Sizes          | `--size-{n}`           | `var(--size-4)`           |
| Font sizes     | `--text-{size}`        | `var(--text-sm)`          |
| Font weights   | `--font-weight-{name}` | `var(--font-weight-bold)` |
| Font families  | `--font-{name}`        | `var(--font-sans)`        |
| Letter spacing | `--tracking-{name}`    | `var(--tracking-tight)`   |
| Line height    | `--leading-{name}`     | `var(--leading-relaxed)`  |
| Borders        | `--rounded-{size}`     | `var(--rounded-lg)`       |
| Opacity        | `--opacity-{value}`    | `var(--opacity-50)`       |

## Disabling CSS variable output

By default Crayon outputs CSS custom properties for everything. If you're using Crayon purely via Sass functions and utility classes and don't need any of that, you can turn it all off and save about **19 KB**:

```scss
@forward 'crayon-css' with (
  $output-css-vars: false
);
```

This disables all `:root` custom property output and the `@custom-media` breakpoint declarations. Utility classes (`.bg-*`, `.p-*`, `.text-*` etc.) and Sass functions (`color()`, `size()`, `font-size()`) are unaffected — they compile directly to CSS values.

## Custom Media Queries

> `@custom-media` is a CSS Level 5 feature not yet natively supported in all browsers. Add `postcss-custom-media` to your PostCSS pipeline to polyfill it.

Crayon generates `@custom-media` declarations for every breakpoint in `$breakpoints`, plus a `--dark` alias for the dark mode media feature:

```css
@custom-media --sm   (min-width: 640px);
@custom-media --md   (min-width: 768px);
@custom-media --lg   (min-width: 1024px);
@custom-media --xl   (min-width: 1280px);
@custom-media --xxl  (min-width: 1536px);
@custom-media --dark (prefers-color-scheme: dark);
```

These let you use named breakpoints in plain CSS and `<style>` tags, without needing Sass mixins:

```css
.card {
  flex-direction: column;
  background: var(--color-white);
}

@media (--md)   { .card { flex-direction: row; } }
@media (--dark) { .card { background: var(--color-slate-900); } }
```

This is equivalent to using the Sass mixins `@include screen("md")` and `@include dark`, but works anywhere CSS is written.

### Browser support

```javascript
// postcss.config.js
module.exports = {
  plugins: [
    require('postcss-import'),
    require('postcss-custom-media'),
    require('autoprefixer'),
  ]
}
```

**Vite:**

```javascript
// vite.config.js
import customMedia from 'postcss-custom-media'

export default defineConfig({
  css: {
    postcss: {
      plugins: [customMedia()]
    }
  }
})
```

### Combining variables and custom media

CSS variables and custom media together cover most use cases without any Sass build step:

```html
<style>
  .card {
    display: flex;
    flex-direction: column;
    background: var(--color-white);
    color: var(--color-slate-900);
    padding: var(--size-5) var(--size-6);
    border: 1px solid var(--color-slate-200);
    border-radius: var(--size-3);
  }

  @media (--md) {
    .card {
      flex-direction: row;
      max-width: var(--size-96);
    }
  }

  @media (--dark) {
    .card {
      background: var(--color-slate-900);
      border-color: var(--color-slate-700);
      color: var(--color-slate-50);
    }
  }
</style>
```

Sass mixins remain the right choice in `.scss` files and Vue/Svelte `<style lang="scss">` blocks. CSS variables and custom media are the equivalent for contexts where Sass isn't available.
