
# What is Crayon?

Crayon is a Sass-based utility CSS toolkit focused on maintainability. It's a little like tailwind, but intentionally smaller in scope.
Not because it can do less, but because it has stronger opinions on what utility classes should actually do and delegates more to Sass and modern CSS standards.


Crayon covers the basics with tailwind-style utility classes, they're fast and great to prototype layouts with:

- Layout
- Display
- Colours
- Typography
- Basic aesthetics (borders, radius)

You've got exposed functions and mixins if you're using Sass, and CSS variables if you aren't. Lean on standard modern CSS for the rest. 

Crayon's output is pretty small, its surface area learnable in an afternoon and instantly familiar if you already know tailwind. It also has several convenience features that aim to let you write maintainable styles at scale, with mixins and terse composition mixins.


## Config-first

Every scale in Crayon spacing, colours, type sizes, breakpoints, grid columns is defined in  `_config.scss`. Every utility class and every lookup function draws from it. Change `$base-size` from `4px` to `5px` and every spacing class, every`size()` call, every generated padding and margin updates in the next build. Sass is super easy to extend and modify with less ceremony than tailwind for simple modifications and vastly more flexibility when you want to get fancy. Everyting is publically available in Crayon, so go nuts.


## Tailwind is awesome

For the last few years, I've advocated heavily for tailwind. BEM and arbitrary semantics just don't scale too well. When working with component systems, do you really need a second full set of style semantics that have to perpetually match up to your component system? We've all ended doing something like `.card--active--customer_other_customer2-red{}` Be honest. As applications and websites grow so does the cognitive load of the named presentation of these elements. It adds friction, it becomes tech debt.

Components also have semantic naming and organisation, the difference being they _do things_ too. As their function evolves they are naturally re-organised, abstracted. Presentation of components should be kept with the component. This is a huge win for tailwind - it's simple once you understand it - uniform, (mostly) consistent and keeps design intent where it should be.

But then your app gets larger. 

The answer from the Tailwind team is "use find and replace or multiple cursors, nest more components". While we agree in principle, reality is often more complicated.  In production, you can spend a lot of time hunting down classes and the single biggest weakness of tailwind is dark mode and breakpoints. They add huge amounts of noise to class lists. Responsive breakpoints, grouping and many extraneous styling classes are the worst culprits.

You have a bunch of repeating text formatting you use EVERYWHERE, and a component won't cut it. Get ready to repeat yourself, or use @apply. Which you were told explicitly not to do. You're using tailwind in js? You're gonna need twMerge. You have a bunch of conditional styling, you're gonna need to use tailwind-variants. Wait...is this still co-located with my component? I've started to abstract this css...hrmm...

Well, here's the thing.

## Sass is awesome

Sass is crazy powerful, you guys. Crayon is built with sass and exposes it's best things with it. Every utility class is available as a sass mixin, values are exposed as css variables and as sass functions. Everything that can be a map is a map, allowing you to easily extend the functionality. All within CSS. We can (and do) create power compositional mixins that apply many classes at once with a nice DSL. It's also nice just...writing CSS. You want some logic? Cool, go for it. You can learn sass in an afternoon.

The elephant in the room with tailwind is and has always been...tailwind. It adds noise to markup, weight to the DOM and eventually it can become difficult to maintain at scale. 

```html
<button type="button" class="text-white bg-brand box-border border border-transparent hover:bg-brand-strong focus:ring-4 focus:ring-brand-medium shadow-xs font-medium leading-5 rounded-base text-sm px-4 py-2.5 focus:outline-none">Default</button>
```

More recently with Tailwind 4 has moved closer to standard CSS, exposing it's values as CSS variables. Crayon does this too, but leans in harder on standards. 

Crayon is a set of utilities, not a framework. For what you don't have provided, you have sass and web standards.

Tailwind has strong opinions about how you write it-it's all or nothing, crayon is much less opinionated about this. You can choose any number of ways to use the available tools, or mix and match them if you wish. You're an adult, we trust you.

```html
<style lang="scss" scoped>
  @use "crayon" as *;
  .thing{
    color: color("white");
    @include bg("brand"); 
    @include size(12);
    
    @include dark {
      background-color: color("red-500");
    }
    
    @include size("xl") {
      @inlcude width(24);
    }
  }
</style>
```

You don't have to use it's utility classes at all if you don't want. The above is completely valid, and can be mixed with inline utility classes. Crayon is a box of tools and in the grand scheme of things, CSS is mostly quite straightforward. 

The critical peice being `scoped` . Scoped CSS has always been a good alternative to tailwind and modern CSS goes even further, `@scoped` is widely available, we can levarage that, media queries exist. We do not need a custom solution for container queries...you just write a container query. Svelte and Astro components are scoped by default, s'all good.

Crayon provides the thing that counts, centralising the values that can change. As long as values are tied to a variable or map, you're all good! Being co-located you get the same immediacy as tailwind, but leverage the more powerful composition capabilites and ergonomics of sass. Win-win? I think so.

You also centralise all of your modifiers (dark modes, breakpoints etc) rather than look in 12 places to update them. 

## Crayon vs Tailwind

Crayon differs philosophically from Tailwind in a number of ways. This is not some statement that this approach is in any way "better" objectively, the world is complicated and few things are black and white. But Crayon seeks to address what we percieve to be shortcomings in the approach advocated for by Tailwind. Especially with established codebases with a decent amount of surface area.

Tailwind provides a utility class that covers the the majority of the things you can do do in CSS and strongly suggests you use those classes at all times.

Crayon provides a subset of the core "useful" Tailwind utility classes, corresponding mixins for the provided classes, as well as access to all of the variables (both in CSS and internal Sass) and functions. Crayon has far looser opinions on how you use tools it provides. Crayon shares the same opinion that whenever possible, CSS should be co-located within components or near the markup it relates to. Additionally that meaningful values should **always** be centralised.


### Why provide utility classes at all if everything is also a mixin?

Crayon focuses on a fairly subjective list of core utility classes, mostly the things you reach for when scaffolding layouts. A handful of `p-`, `flex` and `bg-color` classes give you a lot of the *feel* of moving quickly with Tailwind, and do not add much noise to markup. Crayon intentionally draws a hard line at the more presentational/complex aspects of defining a layout however. This is when you should move into using mixins, variables and more regular CSS. You can find a full list of supported Tailwind classes here --insert link--


A utility class is a design decision. When you write `.p-4`, you're not just setting `padding: 1rem`; you're saying *this element uses the fourth multiple of a base size*, which is defined centrally and can be changed globally. That's super useful.

When you write `.overflow-hidden`, you're just saying `overflow: hidden` but adding noise to your markup. There's no scale, no central config, no shared decision, it's just a 1:1 alias for a CSS property. And it adds up. Writing that in a css block takes seconds. Crayon doesn't generate classes like that, and deliberately so. 

Spacing, sizing , colour, type size, layout columns. These are the the things you'd otherwise maintain as scattered magic numbers across dozens of files, and they benefit enormously from being defined once and referenced consistently. 

Animation timing, gradient stops, transform values these are things you often write once per component, they're often one-off by nature, and a utility class adds no *real* value over just writing the CSS or defining a custom class.


### Conditional styles belong in your CSS, not your HTML

Tailwind's `dark:bg-blue-500 hover:text-white md:flex` approach puts conditional logic in the markup. It works at small scale, but as components grow it becomes harder to read: a single element can carry a dozen or more classes encoding its normal state, hover state, dark mode state, and responsive variation all at once.

Crayon takes the view that conditional styles are CSS, and should live in CSS. Instead of variant prefixes, Crayon gives you Sass mixins:

```other
@use 'crayon-css' as crayon;

.button {
  background: crayon.color("blue-500");

  @include crayon.hover { background: crayon.color("blue-600"); }
  @include crayon.dark  { background: crayon.color("blue-800"); }
  @include crayon.screen("md") { width: auto; }
}
```

Your HTML stays clean. Your component's full visual behaviour including all its states in one place, in real CSS, without inventing a new language on top of it.

Not using Sass? Crayon also generates named `@custom-media` declarations for every breakpoint and for dark mode, so you can write `@media (--md)` and `@media (--dark)` in plain CSS without any mixins. Support for custom-media is experimental and requires postCss. See the Custom Media Queries section.

## Technical comparison and tradeoffs

**TL;DR - it's fine.**

Sass is effectively an entire language (albeit a simple one) that gets compiled to CSS. It is massively extensible and flexible but at a cost of the time taken to compile that CSS. 

Tailwind builds classes on the fly and can do a couple of things that sass can't, like arbitrary values in utility classes. Eg. `text-[#d1d1d1]` Though this would be avoided in Crayon if it were possible. A sass mixin is much more like a method, that can accept mutliple args and apply conditional logic. It also allows powerful mass generation of classes and powerful features like Crayon's composition mixins.

But back to that cost - initial cold compile times for Sass might be up to a second or two for a larger project, but reloads are fast, in the ms range. Tailwind cold is always in the ms range. Tailwind also only generates the classes needed. Sass, by default will generate an entire CSS file, but also tree-shakes via purgeCSS, which is recommended. Bundle sizes for Crayon and Tailwind are comparable out of the box, but Crayon has fewer guardrails for this bundle size to increase, as sass allows you to generate reams of CSS classes if you desire. 

## Tailwind Compatibility

Most common Tailwind class names work in Crayon without changes. If you're migrating from Tailwind or working alongside it, the classes you reach for most often behave identically:

- **Spacing**: `p-4`, `mt-8`, `mx-auto`, `px-6`, `-mt-2`
- **Sizing**: `w-full`, `h-screen`, `w-1/2`, `max-w-96`, `size-8`
- **Colours**: `bg-blue-500`, `text-slate-900`, `border-red-300`
- **Typography**: `text-sm`, `text-2xl`, `bold`, `semibold`, `italic`
- **Layout**: `flex`, `grid`, `hidden`, `block`, `inline-flex`
- **Flex**: `flex-row`, `flex-col`, `flex-wrap`, `flex-grow`

**Where the line stops**
Crayon does not support tailwinds feature set 1:1, it's just those categories. See the example file for a kitchen sink of the available stuff.

**Where Crayon deliberately differs:**

**No variant prefixes.** There are no `dark:, hover:, or md:` class variants. In Sass, use the mixins instead — see the Mixins section. In plain CSS or ERB, use generated `@custom-media` declarations — see Custom Media Queries.

**No (well, few.) single-property utility classes.** Crayon doesn't generate classes for `overflow`, `cursor`, `position`, `animation`, `transition`, `transform`, `filter`, or `gradient` — anything where the class is just a direct alias for one CSS property value. This rule gets bent when it comes to flexbox, grid etc. Basic layout and prototyping is cool. But lines like `bg-linear-to-r from-cyan-500 to-blue-500 via-red-200`...why?



---

## What Crayon leaves to CSS

Crayon doesn't try to cover everything. For anything that doesn't benefit from a shared configurable scale, the right answer is to write CSS directly. A few common examples:

**Container queries.** Viewport breakpoints are global and project-wide, which is why wrapping them in `@include screen(md)` is worthwhile. Container breakpoints are the opposite: they're per-component, rarely shared, and the values only make sense in context. Writing `@container (min-width: 400px)` directly is just as fast and far more readable than any mixin abstraction would be. You also still need to set `container-type` on the parent yourself, so the mixin would only be saving you one line.

**Animations and transitions.** These are inherently expressive and one-off. A `transition-all` class doesn't tell you what's transitioning, at what speed, or why.  Write transitions where they live, in your component CSS, where the full context is visible. You can always abstract your own classes later and extend crayon - or just leave it 

**The same applies to:** transforms, filters, gradients, `clip-path`, `scroll-behavior`, and newer features like `@starting-style` and scroll-driven animations. CSS covers all of these well. Crayon wrapping them would add syntax without adding value.

The broader pattern: if you find yourself wanting a utility class for something Crayon doesn't have, ask whether it involves a shared scale or a repeated config value. If the answer is no, it's CSS — and that's fine.
