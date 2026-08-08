# Getting Started

Crayon works best with frameworks that support co-located scoped `<style>` blocks. We'll cover install instructions for Vue, Svelte, Astro, and Ember, plus an experimental setup for React.
It's just some sass files after all, so it'll work anywhere Sass does. Though setup is especially straightforward with Vite. (Isn't everything just better with Vite?)

::: tip :writing_hand: Remember 
  Of course, you are free to work in any way you wish, but the happy path for Crayon is a mixture of utility classes and mixins with these scoped CSS blocks.
:::

## Installation

::: code-group


```sh [yarn]
$ yarn add crayon-css
$ yarn add --dev sass-embedded
```

```sh [pnpm]
$ pnpm add crayon-css
$ pnpm add --save-dev sass-embedded
```

```sh [npm]
$ npm install crayon-css
$ npm install --save-dev sass-embedded
```

:::

## Vue/Vite

Create a global stylesheet, e.g. `src/assets/main.scss`:

```scss
@use 'crayon-css' as crayon;
```

Import it in `main.js` / `main.ts`:

```js
import './assets/main.scss'
```

Use Crayon's functions and mixins in component `<style>` blocks:

```vue
<style lang="scss" scoped>
@use 'crayon-css' as crayon;

.card {
  padding: crayon.size(4);
  border-radius: crayon.rounded("lg");
  color: crayon.color("slate-800");

  @include crayon.dark {
    color: crayon.color("slate-200");
  }
}
</style>
```

## Svelte/SvelteKit

Add to your root `+layout.svelte`:

```svelte
<style lang="scss">
@use 'crayon-css' as crayon;
</style>
```

Use functions and mixins in any component:

```html
<style lang="scss">
@use 'crayon-css' as crayon;

h1 {
  font-size: crayon.font-size("3xl");
  padding: crayon.size(6) 0;

  @include crayon.screen("md") {
    font-size: crayon.font-size("5xl");
  }
}
</style>
```

## Astro

Add the Vite Sass load path config in `astro.config.mjs`:

```mjs
import { defineConfig } from 'astro/config';

export default defineConfig({
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          loadPaths: ['node_modules'],
        },
      },
    },
  },
});
```

Create `src/styles/crayon.scss`:

```scss
@use 'crayon-css' as crayon;
```

Import it in your base layout frontmatter so it applies everywhere:

```md
---
// src/layouts/Layout.astro
import '../styles/crayon.scss';
---
```

Use Crayon's mixins in any `.astro` component:

```html
<style lang="scss">
  @use 'crayon-css' as crayon;

  .card {
    @include crayon.box($p: 6, $rounded: "xl", $bg: "white", $border: "slate-200");
    @include crayon.vstack(4);
  }
</style>
```

## Ember

Requires **Polaris / Embroider + Vite** — classic Ember CLI is not supported.

Configure Vite to resolve Sass packages from `node_modules`:

```mjs
// vite.config.mjs
export default defineConfig({
  css: {
    preprocessorOptions: {
      scss: {
        loadPaths: ['node_modules'],
      },
    },
  },
});
```

Add a Sass entry point and import it in `app.js`:

```scss
// app/styles/crayon.scss
@use 'crayon-css' as crayon;
```

```js
// app/app.js
import './styles/crayon.scss';
```

For scoped component styles (Highly recommended), set up [ember-scoped-css](https://github.com/auditboard/ember-scoped-css):

```gjs
<template>
  <div class="card bg-blue-500">Hello</div>
  <style lang="scss" scoped>
    @use "crayon-css" as crayon;
    .card {
      padding: crayon.size(4);
      border-radius: crayon.rounded("lg");
    }
  </style>
</template>
```
## React (Experimental)

::: warning React support is not yet official
Crayon can be used in React projects that compile Sass, but the recommended component-scoped workflow has not yet been tested thorougly.
Third-party tools such as [styled-jsx](https://github.com/vercel/styled-jsx) or [Astroturf](https://astroturfcss.github.io/astroturf/) can work, but these integrations are not officially supported by Crayon.
:::

### Vite

Create a global stylesheet, e.g. `src/assets/main.scss`:

```scss
@use 'crayon-css' as crayon;
```

Import it in `main.jsx` / `main.tsx`:

```tsx
import './assets/main.scss'
```

### Next.js

Configure Next.js to use `sass-embedded`:

```ts
// next.config.ts
import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  sassOptions: {
    implementation: 'sass-embedded',
  },
}

export default nextConfig
```

Create `app/globals.scss`:

```scss
@use 'crayon-css' as crayon;
```

Import it in the root layout:

```tsx
// app/layout.tsx
import './globals.scss'
```

## PurgeCSS

Crayon generates all utility classes by default. In production, [PurgeCSS](https://purgecss.com/getting-started.html) trims this to only what's used in your markup. A generic setup in Vite might look a little like this:

```js
import purgecss from '@fullhuman/postcss-purgecss'

export default defineConfig({
  css: {
    postcss: {
      plugins: [
        ...(process.env.NODE_ENV === 'production' ? [
          purgecss({
            content: ['./index.html', './src/**/*.{js,ts,html,vue,svelte,astro}'],
            defaultExtractor: content => content.match(/[\w\-\.\/]+/g) || []
          })
        ] : [])
      ]
    }
  }
})
```

## Editor tools

For `@include` and function autocomplete in Sass files and scoped `<style lang="scss">` or `<style lang="sass">` blocks, we recommend installing the **[some-sass](https://github.com/wkillerud/some-sass)** LSP.

- **VS Code**: Install the [Some Sass](https://marketplace.visualstudio.com/items?itemName=SomewhatStationery.some-sass) extension from the marketplace
- **Other editors**: The standalone `some-sass-language-server` NPM package works with any LSP-compatible editor like Neovim or Helix.
