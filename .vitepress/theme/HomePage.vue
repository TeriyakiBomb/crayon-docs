<script setup>
function selectRandomVariant(event) {
  const model = event.target;
  const variants = model.availableVariants;
  const randomIndex = Math.floor(Math.random() * variants.length);
  const randomVariant = variants[randomIndex];

  model.variantName = randomVariant;
  return;
}
</script>

<template>
  <div class="tear"></div>
  <main class="h-svh">
    <section class="hero">
      <div class="max-w-1/3">
        <h1>Crayon is a Sass-based CSS toolkit that's all about working at <span id="scale">scale</span></h1>
        <p>Yes, I've made this, in current year. Yes, I'm serious.</p>

        <div class="buttons">
          <a href="/docs/introduction">What is Crayon?</a>
          <a href="/docs/installation">Getting Started</a>
        </div>
      </div>

     <model-viewer
       alt="Crayon"
       src="/models/stubby.gltf"
       poster="/models/stubby-poster.webp"
       tone-mapping="neutral"
       shadow-intensity="1"
       camera-controls
       auto-rotate
       interaction-prompt="none"
       disable-zoom
       camera-orbit="-173.3deg 98.49deg 4.642m"
       field-of-view="30deg"
       touch-action="pan-y"
       @load="selectRandomVariant"
     />
    </section>
  </main>
</template>

<style lang="sass" scoped>
@use 'crayon-css' as c


main
  background-image: url('/images/line.png')
  background-repeat: repeat, no-repeat
  background-size: auto, cover
  height: calc(100dvh - var(--vp-nav-height))

  +c.w-full
  +c.center()

.tear
  width: 100%;
  height: 20px
  position: fixed
  z-index: 99999
  background-image: url('/images/tear.png')
  background-position: bottom;
  background-repeat: repeat-x;

.hero
  +c.center("y")
  +c.h-full

  h1, p
    +c.text-color("amber-950")

  h1
    +c.text("5xl")
    font-family: "Modak", system-ui, sans-serif
    font-weight: 400

    #scale
      +c.text("7xl")
  p
    +c.py(2)
    +c.pl(4)
    +c.text("xl")
    +c.font-weight("medium")

  +c.max-w("lg")
  +c.center("y")
  +c.hstack(6)

  model-viewer
    height: c.px-to-rem(700px)
    width: c.px-to-rem(800px)

  .buttons
    +c.py(8)
    +c.pl(6)
    +c.hstack(4)

    a
      +c.px(3.5)
      +c.rounded("xl")
      +c.py(3)
      +c.font-weight("bold")

    a:first-of-type
      +c.bg("indigo-400")
      +c.text-color("indigo-50")
      +c.hover
       +c.bg("indigo-700")

/* Yea yea, crayon doesn't support class based dark mode...yet */

:global(.dark .tear)
  background-image: url('/images/tear-dark.png')

:global(.dark .hero h1), :global(.dark .hero p)
  +c.text-color("amber-100")

:global(.dark .hero .buttons a:not(:first-of-type))
  +c.text-color("amber-100")


</style>
