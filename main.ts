const utfDecoder = new TextDecoder("utf-8");
const textEncoder = new TextEncoder();
var styleCss = utfDecoder.decode(await Deno.readFile("style.css"));

async function inlineFont(fontName: string, woffFormat: string) {
  const base64 = utfDecoder.decode(
    await Deno.readFile(`dist/${fontName}.${woffFormat}.base64`),
  );
  styleCss = styleCss.replace(
    new RegExp(`${fontName}\\.${woffFormat}`, "g"), // Dynamically build the regex
    `data:font/${woffFormat};base64,${base64}`,
  );
}

await inlineFont("Inter-Regular", "woff2");
await inlineFont("Inter-Regular", "woff");
await inlineFont("Inter-Italic", "woff2");
await inlineFont("Inter-Italic", "woff");

import { transform } from "https://esm.sh/@parcel/css";

// Input CSS files
const resetCss = await Deno.readTextFile("reset.css");

// Merge and Minify
const mergedCss = styleCss + "\n" + resetCss;
const minifiedCss = transform({
  code: textEncoder.encode(mergedCss),
  minify: true,
});
const html = await Deno.readTextFile("dist/base.html");

const inlinedHtml = html.replace(
  "</head>",
  `<style>${utfDecoder.decode(minifiedCss.code)}</style></head>`,
);

await Deno.writeTextFile("dist/index.html", inlinedHtml);
