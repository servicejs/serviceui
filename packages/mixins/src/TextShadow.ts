/**
 * text-shadow property helpers
 */

import { StaticFunctionMixin } from "./Mixin";
import { CommaSeparatedList } from "./util/css-value-helpers";

namespace TextShadow {
  export interface Props {
    color?: string;
    x?: string;
    y?: string;
    blur?: string;
  }

  export const value = ({ color, x, y, blur }: TextShadow.Props) =>
    [color, x || "0", y || "0", blur].filter(Boolean).join(" ");

  export const list = CommaSeparatedList;

  export interface MixinProps {
    tsh?: string | undefined;
  }

  export const mixin: StaticFunctionMixin<TextShadow.MixinProps> = ({ tsh: textShadow }) => ({ textShadow });
}

export default TextShadow;
