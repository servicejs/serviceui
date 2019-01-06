/**
 * text-shadow property helpers
 */

/** Imports */

import { CommaSeparatedList } from "./util/css-value-helpers";
import { FunctionMixin } from "./mixin";

/** Declarations */

export interface TextShadowValueProps {
  color?: string;
  x?: string;
  y?: string;
  blur?: string;
}

export const textShadowValue = ({ color, x, y, blur }: TextShadowValueProps) =>
  [color, x || "0", y || "0", blur].filter(Boolean).join(" ");

export const textShadowList = CommaSeparatedList;

export interface TextShadowMixinProps {
  tsh?: string | undefined;
}

export const textShadowMixin: FunctionMixin<TextShadowMixinProps> = ({ tsh: textShadow }) => ({ textShadow });
