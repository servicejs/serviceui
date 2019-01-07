/**
 * Box shadow property helpers & mixin
 */

import { BoxShadowProperty } from "csstype";
import { StaticFunctionMixin } from "./Mixin";
import { CommaSeparatedList } from "./util/css-value-helpers";

namespace BoxShadow {
  export interface Props {
    color?: string;
    x?: string;
    y?: string;
    blur?: string;
    spread?: string;
    inset?: boolean;
  }

  export const property = ({ color, x, y, blur, spread, inset }: BoxShadow.Props) =>
    [color, x || "0", y || "0", blur || (spread ? "0" : undefined), spread, inset ? "inset" : undefined]
      .filter(Boolean)
      .join(" ");

  export const list = CommaSeparatedList;

  export interface MixinProps {
    bsh?: BoxShadowProperty | BoxShadowProperty[];
  }

  export const mixin: StaticFunctionMixin<BoxShadow.MixinProps> = ({ bsh }) => ({
    boxShadow: typeof bsh !== "undefined" ? (Array.isArray(bsh) ? BoxShadow.list(bsh) : bsh) : undefined,
  });
}

export default BoxShadow;
