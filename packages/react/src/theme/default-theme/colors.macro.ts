/**
 * An example for a Macro in typescript
 */

// tslint:disable:object-literal-sort-keys

/** Imports */

import chroma from "chroma-js";
import * as hsluv from "hsluv-ts";

/** Declarations */

const navy = chroma.hex("#001f3f");
const blue = chroma.hex("#0074d9");
const aqua = chroma.hex("#7fdbff");
const teal = chroma.hex("#39cccc");
const olive = chroma.hex("#3d9970");
const green = chroma.hex("#2ecc40");
const lime = chroma.hex("#01ff70");
const yellow = chroma.hex("#ffdc00");
const orange = chroma.hex("#ff851b");
const red = chroma.hex("#ff4136");
const maroon = chroma.hex("#85144b");
const fuchsia = chroma.hex("#f012be");
const purple = chroma.hex("#b10dc9");
const black = chroma.hex("#111111");
const gray = chroma.hex("#aaaaaa");
const silver = chroma.hex("#dddddd");
const white = chroma.hex("#FFF");

const tint = (color: chroma.Color) => chroma.mix(color, white, 0.1);
const shade = (color: chroma.Color) => chroma.mix(color, black, 0.1);
const textColor = (color: chroma.Color) =>
  hsluv.hexToHsluv(color.hex())[2] > 70 ? black : white;
// chroma.contrast(color, black) > chroma.contrast(color, white) ? black : white;
const textShadowColor = (color: chroma.Color) =>
  chroma.mix(color, textColor(color), 0.1);

const colorMix = (color: chroma.Color) => ({
  base: color.css(),
  shade: shade(color).css(),
  tint: tint(color).css(),
  text: textColor(color).css(),
  textShadow: textShadowColor(color).css(),
});

const exportedValue = (() => {
  return {
    navy: colorMix(navy),
    blue: colorMix(blue),
    aqua: colorMix(aqua),
    teal: colorMix(teal),
    olive: colorMix(olive),
    green: colorMix(green),
    lime: colorMix(lime),
    yellow: colorMix(yellow),
    orange: colorMix(orange),
    red: colorMix(red),
    maroon: colorMix(maroon),
    fuchsia: colorMix(fuchsia),
    purple: colorMix(purple),
    black: colorMix(black),
    gray: colorMix(gray),
    silver: colorMix(silver),
    white: colorMix(white),
  };
})();

export default exportedValue;
