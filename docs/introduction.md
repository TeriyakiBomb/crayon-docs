::: warning
Crayon is not at 1.0 yet and the API and docs are undergoing changes frequently right now.
:::

# TL;DR

Crayon is a Sass-based utility CSS toolkit focused on **maintainability.** It provides a combination of utility classes, Sass mixins, functions, CSS variables and powerful composition tools to keep you productive, while making your markup cleaner, more concise and your styles more manageable at scale.

You choose whichever approach that suits the current situation and Crayon provides numerous ways of keeping everything tied to your central configuration, without introducing another set of rules or duplicating features that CSS and Sass already handle well.

In some ways, it's a little like Tailwind, but intentionally smaller in scope.

It does *less* *on* *purpose*. Crayon has stronger opinions about which values benefit from utility classes, while delegating everything else to Sass and modern CSS. It is opinionated about what it provides, but not about how you use it.

## Crayon? Why? What do?

This section is mostly about Crayon's philosophy. If you already know that this toolkit is for you, you can probably skip this section. If you're thinking "Why does this exist?" read on. Or not. I'm not your mum.

## Tailwind is awesome.

For the last few years, I've been a big advocate of Tailwind. [BEM](https://getbem.com) and arbitrary CSS naming just don't *scale* well, add cognitive load and give you whole *other thing* to maintain.

When working with **component systems** in Vue or Svelte, do you really need a second full set of style semantics that have to perpetually sync up? 

> What was the name of that container again? `.box--news_other-green-2`? What file was it in?

Components do a fantastic job of covering the things it needs to, styling belongs within the component. Simple. 

This is a **huge** win for tailwind - it's simple once you understand it, uniform, (mostly)consistent and keeps design intent with the UI itself. Cool! And I can write it fast and prototype UI really quickly! This is awesome.

But then your app gets **larger**. And you work with *people*.

Things start to get **messy.**

The official answer from the Tailwind team is: "use find and replace or multiple cursors, nest more components". 

While I agree in principle, reality is often more complicated. 

In production, you can spend a lot of time hunting down arbitrary value classes, chasing the instances where someone has bent the rules, abused @apply. They add huge amounts of noise to class lists. Responsive breakpoints, dark mode and grouping classes are the worst culprits.

A *slightly* straw-manny scenario:

You have a bunch of repeating text formatting you use EVERYWHERE, and a component won't cut it. Get ready to repeat yourself, or use @apply. Which you were told explicitly not to do. You're using tailwind in js? You're gonna need twMerge. You have a bunch of conditional styling, you're gonna need to use tailwind-variants. Wait... is this still co-located with my component? I've started to abstract this css... hrmm...

Well, here's the thing.

## Sass is awesome.

Sass is crazy powerful, you guys. 

Crayon is built with Sass and exposes its best things with it. Every utility class is available as a [sass mixin](https://sass-lang.com/documentation/at-rules/mixin/), values are exposed as CSS variables and as sass functions. Crayon is pretty small and very easy to pull apart.

Everything that can be a map is a map, allowing you to easily extend the functionality. All within CSS. We can (and do) create power compositional mixins that apply many classes at once with a nice DSL. It's also nice just...writing CSS. You want some logic? Cool, go for it. You can learn Sass in an afternoon.

The elephant in the room with Tailwind is and has always been...Tailwind. It adds noise to markup, weight to the DOM and eventually it can become difficult to maintain at scale.

```html
<button type="button" class="text-white bg-brand box-border border border-transparent hover:bg-brand-strong focus:ring-4 focus:ring-brand-medium shadow-xs font-medium leading-5 rounded-base text-sm px-4 py-2.5 focus:outline-none">Default</button>
```

An example pulled from [flowbite](https://flowbite.com/docs/components/buttons/). This is not a complex Tailwind example.

### A utility class is a design decision. 

When you write `p-4`, you're not just setting `padding: 1rem;` you're saying *this element uses the fourth multiple of a base size.* Which is defined centrally and can be changed globally.

That's **super useful** and scalable.

When you write `overflow-hidden`, you're just saying `overflow: hidden` but also adding noise to your markup.

There's no scale, no central config, no shared decision. It's just a 1:1 alias for a CSS property, specified slightly differently, and more verbose.

Writing that in a CSS block takes seconds. Crayon doesn't generate classes like that, and deliberately so. 

Recently, Tailwind 4+ has moved closer to standard CSS, exposing it's values as CSS variables. Crayon does this too, but leans in harder on standards.

#### 🍦Things that make good utility classes

Spacing, sizing, colour, type size, layout columns. These are the things you'd otherwise maintain as scattered magic numbers across dozens of files, and they benefit enormously from being defined once and referenced consistently.

#### 💩Things that don't

Animation timings, gradient stops, transform values these are things you often write *once* per component, they're often one-off by nature. A utility class adds no *real* value over just writing the CSS or defining a custom class. So why do we do it?

**You're an adult, I trust you.**

Crayon is a set of utilities, it is not a framework. For what you don't have provided, you have Sass and web standards. Tailwind has strong opinions about how you write it. It's all or nothing.  Crayon is much less opinionated about this. You can choose any number of ways to use the available tools, or mix and match them if you wish. The thing that counts is keeping values central and being able to continue moving quickly.

You don't have to use Crayons utility classes at all if you don't want. Crayon is a box of tools and in the grand scheme of things, CSS is mostly quite straightforward and solves a ton of problems.

**Crayon is learnable in an afternoon and much of it is instantly familiar if you already know Tailwind. It also has several convenience features that aim to let you write maintainable styles at scale.**

## What Crayon leaves to CSS

Crayon doesn't try to cover everything. For anything that doesn't benefit from a shared configurable scale, the right answer is to write CSS. A few common examples:

**Container queries.** Viewport breakpoints are global and project-wide, which is why wrapping them in `@include screen(md)` is worthwhile. Container breakpoints are the opposite: they're per-component, rarely shared, and the values only make sense in context. Writing `@container (min-width: 400px)` is as clear and concise as it needs to be.

**Animations and transitions.** These are inherently expressive and one-off. A `transition-all` class doesn't tell you what's transitioning, at what speed, or why.

**The same applies to:** transforms, filters, gradients, `clip-path`, `scroll-behavior`, and newer features like `@starting-style` and scroll-driven animations. CSS covers all of these well. Crayon wrapping them would add syntax without adding value.

> **TL;DR** If you find yourself wanting a utility class for something Crayon doesn't have, ask whether it involves a shared scale or a repeated config value. If the answer is no, you can use vanilla CSS and that's fine, being scoped is the thing that prevents clashes.

## Scoped CSS is critical

Scoped CSS has always been a good alternative to tailwind and modern CSS goes even further, `@scoped` is widely available, we can leverage that, media queries exist. We do not need a custom solution for container queries...just write a container query. Svelte and Astro components are scoped by default, s'all good.

Crayon provides the thing that counts, **centralising the values that can change.** As long as values are tied to a variable or map, you're all good! Being co-located you get the same immediacy as tailwind, but leverage the more powerful composition capabilities and ergonomics of sass. Win-win? I think so.

You also centralise all of your modifiers (dark modes, breakpoints etc) rather than look in 12 places to update them.

### Conditional styles belong in your CSS, not your HTML

Tailwind's `dark:bg-blue-500 hover:text-white md:flex` approach puts conditional logic in the markup. It works at small scale, but as components grow it becomes harder to read: a single element can carry a dozen or more classes encoding its normal state, hover state, dark mode state, and responsive variation all at once.

Crayon takes the view that conditional styles are CSS, and should live in CSS. Instead of variant prefixes, Crayon gives you Sass mixins:

::: code-group

```scss
@use 'crayon-css' as crayon;

.button {
  background: crayon.color("blue-500");

  @include crayon.hover { background: crayon.color("blue-600"); }
  @include crayon.dark  { background: crayon.color("blue-800"); }
  @include crayon.screen("md") { width: auto; }
}
```
```sass
@use 'crayon-css' as crayon

.button
  background: crayon.color("blue-500")

  +crayon.hover
    background: crayon.color("blue-600")
  +crayon.dark
    background: crayon.color("blue-800")
  +crayon.screen("md")
    width: auto
```

:::

Your HTML stays clean. Your component's full visual behaviour including all its states in one place, in real CSS, without inventing a new language on top of it.

::: code-group

```scss
<style lang="scss" scoped>
  @use "crayon-css" as crayon;

  .thing {
    color: crayon.color("white");
    @include crayon.bg("brand");
    @include crayon.size(12);
    
    @include crayon.dark {
      background-color: crayon.color("red-500");
    }
    
    @include crayon.screen("xl") {
      @include crayon.w(24);
    }
  }
</style>
```

```sass
<style lang="sass" scoped>
  @use "crayon-css" as crayon

  .thing
    color: crayon.color("white")
    +crayon.bg("brand")
    +crayon.size(12)

    +crayon.dark
      background-color: crayon.color("red-500")

    +crayon.screen("xl")
      +crayon.w(24)
</style>
```

:::

Not using Sass? Crayon also generates named `@custom-media` declarations for every breakpoint and for dark mode, so you can write `@media (--md)` and `@media (--dark)` in plain CSS without any mixins. Support for custom-media is experimental and requires postCss. See the Custom Media Queries section.

## Config-first

Every scale in Crayon spacing, colours, type sizes, breakpoints, grid columns is defined in  `_config.scss`. Every utility class and every lookup function draws from it. Change `$base-size` from `4px` to `5px` and every spacing class, every `size()` call, every generated padding and margin updates in on the next compile. 

Sass is super easy to extend with less ceremony than Tailwind for simple modifications and vastly more flexible when you want to get [fancy](https://sass-lang.com/documentation/at-rules/control/for/). Everything is easy to see in Crayon, it's a pretty small codebase so go nuts.

## Utility classes in Crayon

Crayon covers the basics with tailwind-style utility classes, they're fast and great to prototype layouts.

Crayon uses the same utility class naming scheme as Tailwind. If you're migrating from Tailwind or working alongside it, the classes you reach for most, often behave identically:

- **Spacing**: `p-4`, `mt-8`, `mx-auto`, `px-6`, `-mt-2`
- **Sizing**: `w-full`, `h-screen`, `w-1/2`, `max-w-96`, `size-8`
- **Colours**: `bg-blue-500`, `text-slate-900`, `border-red-300`
- **Typography**: `text-sm`, `text-2xl`, `bold`, `semibold`, `italic`
- **Layout**: `flex`, `grid`, `hidden`, `block`, `inline-flex`
- **Flex**: `flex-row`, `flex-col`, `flex-wrap`, `flex-grow`

There are some exceptions to this, but more details can be found further into the documentation.

**Where the line stops:**
Crayon does not support Tailwind's feature set 1:1, it's just those categories.

**Where Crayon deliberately differs:**

**No variant prefixes.** There are no `dark:`, `hover:`, or `md:` class variants. In Sass, use the provided mixins instead - see  [Responsive design](/docs/responsive) and [States and modes](/docs/states-and-modes). In plain CSS, use the generated [`@custom-media` declarations](/docs/css-variables#custom-media-queries).

**No (well, fewer.) single-property utility classes.** Crayon doesn't generate classes for `overflow`, `cursor`, `position`, `animation`, `transition`, `transform`, `filter`, or `gradient` - anything where the class is just a direct alias for one CSS property value. This rule gets bent when it comes to flexbox, grid etc. 

Basic layout and prototyping is cool. But lines like `bg-linear-to-r from-cyan-500 to-blue-500 via-red-200` ...why?

## Mixins and functions in Crayon

Oh yeah, Crayon features a wide array of composition tools that allow for expressive but terse style building like flex direction and spacing in a one liner , making use of fluid layouts and the ability specify how a [property should change across a range of breakpoints](/docs/range-mixins) and much more.

#### Mixin?

A sass mixin is a bit like an instance, that can accept multiple args and apply conditional logic. It also allows powerful mass generation of classes and features like Crayon's composition mixins.

For more info on how Sass mixins work:

[Sass: @mixin and @include](https://sass-lang.com/documentation/at-rules/mixin/)

There are also functions, which are well...functions? 

```css
background: crayon.color("blue-500");
```

## Comparison and tradeoffs

**TL;DR - it's fine.**

Sass is effectively an entire language (albeit a simple one) that gets compiled to CSS. It is massively extensible and flexible but at a cost of the time taken to compile that CSS. 

First run compile times for Sass might be up to a second or two for a larger project, but reloads are fast, in the ms range. 

Tailwind compiles always in the ms range. Tailwind also only generates the classes needed. 

Sass, by default will generate an entire CSS file, but also tree-shakes via purgeCSS, which is recommended.

Using inline `@use 'crayon-css' as crayon;` does add  cumulative cold-build time per component, but IRL has little effect on HMR or production bundle size with PurgeCSS.

Bundle sizes for Crayon and Tailwind are comparable out of the box, but Crayon has fewer guardrails for this bundle size to increase, as sass allows you to generate reams of CSS classes if you desire. 

As Tailwind builds classes on the fly and can do a couple of things that sass can't, like arbitrary values in utility classes. Eg. `text-[#d1d1d1]` Though this pattern would be avoided in Crayon if it were possible.
