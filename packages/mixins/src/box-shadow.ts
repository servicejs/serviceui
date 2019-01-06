/**
 * box-shadow property helpers
 */

/** Imports */

import { BoxShadowProperty } from "csstype";
import { CommaSeparatedList } from "./util/css-value-helpers";
import { Mixin } from "./mixin";

/** Declarations */

export interface BoxShadowProps {
  color?: string;
  x?: string;
  y?: string;
  blur?: string;
  spread?: string;
  inset?: boolean;
}

export const boxShadow = ({ color, x, y, blur, spread, inset }: BoxShadowProps) =>
  [color, x || "0", y || "0", blur || (spread ? "0" : undefined), spread, inset ? "inset" : undefined]
    .filter(Boolean)
    .join(" ");

export const boxShadowList = CommaSeparatedList;

export interface BoxShadowShorthandProps {
  bsh?: BoxShadowProperty | BoxShadowProperty[];
}

export const boxShadowMixin: Mixin<BoxShadowShorthandProps> = ({ bsh }: BoxShadowShorthandProps) => ({
  boxShadow: typeof bsh !== "undefined" ? (Array.isArray(bsh) ? boxShadowList(bsh) : bsh) : undefined,
});
