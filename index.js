import astro from "./astro.js";
import html from "./html.js";
import php from "./php.js";
import svelte from "./svelte.js";
import vue from "./vue.js";
import xml from "./xml.js";

const config = {
  overrides: [
    ...html.overrides,
    ...vue.overrides,
    ...php.overrides,
    ...svelte.overrides,
    ...astro.overrides,
    ...xml.overrides,
  ],
};

export default config;
export { config as "module.exports" };
