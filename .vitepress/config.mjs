import { defineConfig } from "vitepress";
import { groupIconVitePlugin } from "vitepress-plugin-group-icons";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Crayon",
  description: "Crayon is a Sass-based utility CSS toolkit",
  head: [
    ["link", { rel: "icon", href: "/favicon.ico" }],
    [
      "script",
      {
        type: "module",
        src: "https://ajax.googleapis.com/ajax/libs/model-viewer/4.3.1/model-viewer.min.js",
      },
    ],
  ],
  vue: {
    template: {
      compilerOptions: {
        isCustomElement: (tag) => tag === "model-viewer",
      },
    },
  },
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "Home", link: "/" },
      { text: "What is Crayon?", link: "/docs/introduction" },
      { text: "Getting Started", link: "/docs/installation" },
      { text: "API", link: "/api/index.html", target: "_new" },
    ],

    sidebar: [
      {
        text: "Introduction",
        items: [
          { text: "What is Crayon?", link: "/docs/introduction" },
          { text: "Getting Started", link: "/docs/installation" },
        ],
      },
      {
        text: "Using Crayon",
        items: [
          { text: "Usage basics", link: "/docs/usage-basics" },
          {
            text: "Spacing",
            collapsed: false,
            items: [
              { text: "Padding", link: "/docs/spacing/padding" },
              { text: "Margin", link: "/docs/spacing/margin" },
              { text: "Gap", link: "/docs/spacing/gap" },
            ],
          },
          {
            text: "Sizing",
            collapsed: false,
            items: [
              { text: "Width", link: "/docs/sizing/width" },
              { text: "Height", link: "/docs/sizing/height" },
              { text: "Size", link: "/docs/sizing/size" },
            ],
          },
          {
            text: "Layout",
            collapsed: false,
            items: [
              { text: "Display", link: "/docs/layout/display" },
              { text: "Container", link: "/docs/layout/container" },
              { text: "Flexbox", link: "/docs/layout/flexbox" },
              { text: "Flex ordering", link: "/docs/layout/flex-ordering" },
              { text: "Grid", link: "/docs/layout/grid" },
            ],
          },
          {
            text: "Borders",
            collapsed: false,
            items: [
              { text: "Borders", link: "/docs/borders/borders" },
              { text: "Divide", link: "/docs/borders/divide" },
            ],
          },
          { text: "Colors", link: "/docs/colors" },
          { text: "Typography", link: "/docs/typography" },
          {
            text: "Responsive & state",
            collapsed: false,
            items: [
              {
                text: "Responsive & state",
                link: "/docs/responsive-and-state",
              },
              { text: "Range mixins", link: "/docs/range-mixins" },
            ],
          },
          { text: "Composition mixins", link: "/docs/composition-mixins" },
          { text: "Accessibility", link: "/docs/accessibility" },
        ],
      },
      {
        text: "Customisation",
        collapsed: false,
        items: [
          { text: "Customising Crayon", link: "/docs/customising-crayon" },
          { text: "CSS variables", link: "/docs/css-variables" },
        ],
      },
    ],

    socialLinks: [
      { icon: "github", link: "https://github.com/TeriyakiBomb/crayon" },
      { icon: "npm", link: "https://www.npmjs.com/package/crayon-css" },
      {
        icon: "yarn",
        link: "https://yarnpkg.com/package?q=crayon-css&name=crayon-css",
      },
    ],
    search: {
      provider: "local",
    },
    logo: "/logo.svg",
    siteTitle: false,
  },
  vite: {
    plugins: [groupIconVitePlugin()],
    css: {
      preprocessorOptions: {
        scss: {
          loadPaths: ["node_modules"],
        },
      },
    },
  },
});
