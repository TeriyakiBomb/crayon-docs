# TL;DR

Crayon is a Sass-based utility CSS toolkit focused on maintainability. It's a little like tailwind, but intentionally smaller in scope. Not because it can do less, but because it has stronger opinions on what utility classes should actually do and delegates more to Sass and modern CSS standards. Crayon has far looser opinions on how you use tools it provides.

A utility class is a design decision. When you write `.p-4`, you're not just setting `padding: 1rem`; you're saying *this element uses the fourth multiple of a base size*, which is defined centrally and can be changed globally. That's super useful.

When you write `.overflow-hidden`, you're just saying `overflow: hidden` but adding noise to your markup. There's no scale, no central config, no shared decision, it's just a 1:1 alias for a CSS property. And it adds up. Writing that in a css block takes seconds. Crayon doesn't generate classes like that, and deliberately so. 

Spacing, sizing , colour, type size, layout columns. These are the the things you'd otherwise maintain as scattered magic numbers across dozens of files, and they benefit enormously from being defined once and referenced consistently. 

Animation timing, gradient stops, transform values these are things you often write once per component, they're often one-off by nature, and a utility class adds no *real* value over just writing the CSS or defining a custom class.

Crayon covers the basics with tailwind-style utility classes, they're fast and great to prototype layouts with:

- Layout
- Display
- Colours
- Typography
- Basic aesthetics (borders, radius)

You've got exposed functions and mixins if you're using Sass, and CSS variables if you aren't. Lean on standard modern CSS for the rest. 

Crayon's output is pretty small, its surface area learnable in an afternoon and instantly familiar if you already know tailwind. It also has several convenience features that aim to let you write maintainable styles at scale.

