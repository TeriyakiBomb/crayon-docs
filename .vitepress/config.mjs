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
      { text: "Examples", link: "/markdown-examples" },
    ],

    sidebar: [
      {
        text: "Introduction",
        items: [
          { text: "TL;DR", link: "/tldr" },
          { text: "What is Crayon?", link: "/introduction" },
          { text: "Getting Started", link: "/installation" },
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
    logo: "./images/logo.svg",
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
