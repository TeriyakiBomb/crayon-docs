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
  <main class="flex mx-auto">
    <section class="hero mx-auto">
      <div class="max-w-xl">
        <h1><span class="crayon-the-word">Crayon</span> is a Sass-based CSS toolkit that's all about working at <span id="scale">scale</span></h1>
        <p>Yes, it's a CSS thing that isn't Tailwind, in current year.<br/> And yes, I'm serious.</p>

        <div class="buttons">
          <a href="/docs/introduction">Why would you do this?</a>
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
       camera-orbit="-173deg 87deg 4.65m"
       field-of-view="30deg"
       touch-action="pan-y"
       @load="selectRandomVariant"
     />
    </section>
  </main>
</template>

<style lang="sass" scoped>
@use './crayon-config' as c

/* The following is an utterly appalling example of how to use Crayon. But can you imagine if I didn't use it on the homepage of the docs site for the thing? Madness. Anyway, why are you reading this? Surely you have better things to be doing right now, go outside. Hug a loved one. IDK.

main
  background-image: url('/images/line.png')
  background-repeat: repeat, no-repeat
  background-size: auto, cover
  height: calc(100dvh - var(--vp-nav-height))


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
  +c.max-w("lg")
  +c.stack(6, $reverse: true)
  +c.pt(12)
  +c.px(6)
  +c.screen("md")
    +c.hstack(6)
    +c.px(12)

  h1, p
    +c.text-color("amber-950")

  h1
    font-weight: 400
    +c.tracking("tight")
    +c.font-family("heading")
    +c.text("4xl")

    +c.screen("lg")
      +c.text("5xl")

    .crayon-the-word, #scale
      font-weight: 400

    .crayon-the-word
      +c.font-weight("bold")
      +c.inline-block
      background-position: center
      background-repeat: no-repeat
      background-size: 100% 100%

    #scale
      +c.font-family("fancy")
      +c.text("5xl")
      transform: rotate(-4deg)
      +c.inline-block
      animation: slowmove 7s ease-in-out 0s infinite normal forwards;

      +c.screen("lg")
        +c.text("7xl")

  p
    +c.py(2)
    +c.text("lg")
    +c.font-weight("semibold")

    +c.screen("lg")
      +c.text("xl")


  model-viewer
    height: c.px-to-rem(600px)
    min-height: 30dvh;
    width: c.px-to-rem(600px)
    max-width: 80dvw;

  .buttons
    +c.py(8)
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
