# Crayon basics

If you're used to Sass, you can probably skip this section TBH, but if any of the ideas here are new and for a bit of extra context, you can read on if you fancy. Why not?

Crayon provides tools in several formats, _most_ things are available in more than one format:

- Sass mixins - Powerful little bits of stuff
- Utility classes - good for quick and dirty styles and prototyping
- Lookup functions - good for situations that require raw values but with a bit of powahhh
- CSS variables - CSS variables.

## Using Utility Classes

If you've used Tailwind in the past, this works mostly the way you'd expect. Crayon shares the same naming conventions. The main thing to note here is that Crayon intentionally [does not cover every Tailwind utility class](/docs/introduction#utility-classes-in-crayon).

All utility classes have a corresponding mixin with the same name. But remember, every class has a mixin, but not every mixin has a class. Utility classes are primarily for prototyping, or you can use them more extensively if you want.

```html
<div class="flex items-center gap-4">
  <span class="flex items-center justify-center size-16 bg-yellow-300 text-3xl rounded-full">
    🖍️
  </span>
  <div>
    <h3 class="text-2xl bold">Don't eat it all at once</h3>
  </div>
</div>
```

::: info 🥷 Didyaknow?
Crayon does not support (Actually Sass doesn't) arbitrary value classes like `text-[#d1d1d1]` or `w-[32px]`.
:::

## Lookup Functions

For writing component styles in Sass rather than inline, Crayon exposes lookup functions that return values from the config scales. Kind of obvious, but is the recommended way to use Crayon values in your own CSS  rather than hardcoding `1rem`, reference `crayon.size(4)` so the value stays tied to your config.
Crayon also has public functions for things like colour and unit conversion. See the API docs for more info

::: code-group

```scss
.thingy {
  background: crayon.color("slate-100");
  border-color: crayon.color("blue-300");

  padding: crayon.size(4);
  gap: crayon.size(2);

  font-size: crayon.font-size("lg");
  font-weight: crayon.font-weight("semibold");
}
```

```sass
.thingy
  background: crayon.color("slate-100")
  border-color: crayon.color("blue-300")

  padding: crayon.size(4)
  gap: crayon.size(2)

  font-size: crayon.font-size("lg")
  font-weight: crayon.font-weight("semibold")
```

:::

## Component Scoping

For scoping styles to a specific component without class naming conventions, use [native CSS `@scope`](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/At-rules/@scope). This is supported in all modern browsers and requires no tooling. Although not required by Crayon, this is the **happy path.**

Unlike BEM, `@scope` lets you use plain element selectors without naming every structural element. Although you'll see selectors all over these docs, they are confined to their component, so they won’t clash elsewhere. That leaves class names free to be useful local references instead of mandatory naming. Nice!

::: code-group

```scss
@scope (.card) {
  // I style the root
  :scope {
    @include crayon.stack(6);
  }

  h2 {
    @include crayon.font-family("serif");
  }
  p {
    @include crayon.px(8);
  }
}
```

```sass
@scope (.card)
  // I style the root
  :scope
    +crayon.stack(6)

  h2
    +crayon.font-family("serif")
  p
    +crayon.px(8)
```

:::

## SCSS Namespace

We recommend namspacing under `crayon`:

```scss
@use 'crayon-css' as crayon;
}
```

But you can skip this entirely, import with `as *`:

```scss
@use 'crayon-css' as *;

.button {
  background: color("blue-500");
  @include hover { background: color("blue-600"); }
}
```

Watch for name collisions with other Sass files if you use `as *`. Don't say you weren't warned ;)
