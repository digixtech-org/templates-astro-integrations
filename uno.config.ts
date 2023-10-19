// uno.config.ts
import { defineConfig, presetUno, presetIcons, presetTypography } from "unocss";
import transformerCompileClass from "@unocss/transformer-compile-class";
import transformerVariantGroup from "@unocss/transformer-variant-group";
import { theme } from "./unocss/theme";
import { shortcuts } from "./unocss/shortcuts";

export default defineConfig({
  content: {
    filesystem: ["**/*.{html,js,ts,jsx,tsx,vue,svelte,astro}"],
  },
  presets: [
    presetUno(),
    presetTypography({
      selectorName: 'markdown',
    }),
    presetIcons({
      extraProperties: {
        display: "inline-block",
        "vertical-align": "middle",
      },
      collections: {
        custom: {
          circle:
            '<svg viewBox="0 0 120 120"><circle cx="60" cy="60" r="50"></circle></svg>',
          /* <span class="i-custom:circle"></span> */
        },
      },
    }),
  ],
  rules: [
    [/^mpx-(\d+)$/, ([, d]) => ({ margin: `${d}px` })],
    /* <span class="mpx-20"></span> -> margin: 20px; */
    [/^ppx-(\d+)$/, (match) => ({ padding: `${match[1]}px` })],
    /* <span class="ppx-20"></span> -> padding: 20px; */
  ],
  theme,
  shortcuts,
  transformers: [
    transformerCompileClass({
      trigger: "compile",
      classPrefix: "dxt-",
    }),
    transformerVariantGroup() /* <div class="hover:(bg-gray-400 font-bold) font-(light mono)">Hover me</div> */,
  ],
});
