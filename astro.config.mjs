import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import UnoCSS from "@unocss/astro";
import remarkIconShorthand from "./emojis.mjs";
import starlightMarkdownBlocks, { Aside } from "starlight-markdown-blocks";

import vue from "@astrojs/vue";

export default defineConfig({
  site: "https://emu.ldez.top",

  integrations: [
    starlight({
      title: "Emu-Docs",
      customCss: [
        "./src/styles/custom.css",
        "@fontsource-variable/inter",
        "./src/styles/inline.css",
        "./src/styles/table.css",
        "./src/styles/example.css",
        "./src/styles/question.css",
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
      plugins: [
        starlightMarkdownBlocks({
          blocks: {
            question: Aside({
              label: "Question",
              color: "green",
              icon: '<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><!-- Icon from Material Symbols by Google - https://github.com/google/material-design-icons/blob/master/LICENSE --><path fill="currentColor" d="M14.6 8.075q0-1.075-.712-1.725T12 5.7q-.725 0-1.312.313t-1.013.912q-.4.575-1.088.663T7.4 7.225q-.35-.325-.387-.8t.237-.9q.8-1.2 2.038-1.862T12 3q2.425 0 3.938 1.375t1.512 3.6q0 1.125-.475 2.025t-1.75 2.125q-.925.875-1.25 1.363T13.55 14.6q-.1.6-.513 1t-.987.4t-.987-.387t-.413-.963q0-.975.425-1.787T12.5 11.15q1.275-1.125 1.688-1.737t.412-1.338M12 22q-.825 0-1.412-.587T10 20t.588-1.412T12 18t1.413.588T14 20t-.587 1.413T12 22"/></svg>',
            }),
            example: Aside({
              label: "Example",
              color: "purple",
              icon: '<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><!-- Icon from Material Design Icons by Pictogrammers - https://github.com/Templarian/MaterialDesign/blob/master/LICENSE --><path fill="currentColor" d="M3 3v2a2 2 0 0 1 2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 1 2-2V3zm4 6h3v1H7zm0 2h3v1H7zm3 5H7v-1h3zm2-2H7v-1h5zm0-6H7V7h5z"/></svg>',
            }),
          },
        }),
      ],
    }),
    UnoCSS(),
    vue({
      appEntrypoint: "/src/vue-setup.js",
    }),
  ],

  markdown: {
    remarkPlugins: [remarkIconShorthand],
  },
});
