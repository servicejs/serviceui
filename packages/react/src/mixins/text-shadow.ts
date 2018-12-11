/**
 * text-shadow property helpers
 */

/** Imports */

import { CommaSeparatedList } from "../util/css-value-helpers";

/** Declarations */

export interface TextShadowProps {
  color?: string;
  x?: string;
  y?: string;
  blur?: string;
}

export const textShadow = ({ color, x, y, blur }: TextShadowProps) =>
  [color, x || "0", y || "0", blur].filter(Boolean).join(" ");

export const textShadowList = CommaSeparatedList;

export const textShadowMixin = (...values: string[]) => ({
  textShadow: textShadowList(...values),
});
