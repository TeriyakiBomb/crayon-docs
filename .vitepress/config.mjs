import { defineConfig } from "vitepress";
import { groupIconVitePlugin } from "vitepress-plugin-group-icons";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Crayon",
  description: "Crayon is a Sass-based utility CSS toolkit",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "Home", link: "/" },
      { text: "What is Crayon?", link: "/docs/introduction" },
      { text: "Getting Started", link: "/docs/installation" },
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
          { text: "Spacing, padding and margin", link: "/docs/spacing-padding-and-margin" },
        ],
      },
      { text: "Customisation", link: "/docs/customising-crayon" },
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
