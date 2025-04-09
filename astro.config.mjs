import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import UnoCSS from "@unocss/astro";
import remarkIconShorthand from "./emojis.mjs";

export default defineConfig({
  site: "https://ld3z.github.io",
  base: "emu-docs",

  integrations: [
    starlight({
      title: "Emu-Docs",
      customCss: [
        "./src/styles/custom.css",
        "@fontsource-variable/inter",
        "./src/styles/inline.css",
        "./src/styles/table.css",
      ],
      social: [
        {
          icon: "github",
          label: "GitHub",
          href: "https://github.com/ld3z/emu-docs",
        },
      ],
      logo: { src: "./src/assets/Deltalogo.png", replacesTitle: true },
      favicon: "/favicon.png",
      components: {
        Head: "./src/components/Head.astro",
      },
    }),
    UnoCSS(),
  ],

  markdown: {
    remarkPlugins: [remarkIconShorthand],
  },
});
