/**
 * Padding mixin
 */

import { ThemedInlineFunctionMixin } from "./Mixin";
import maybe from "./util/maybe";
import { selectFirstDefined } from "./util/select-first";
import stringOrNumberScale from "./util/stringOrNumberScale";

namespace Padding {
  export interface MixinProps {
    pl?: string | number;
    pr?: string | number;
    pt?: string | number;
    pb?: string | number;
    px?: string | number;
    py?: string | number;
    p?: string | number;
  }

  export const mixin: ThemedInlineFunctionMixin<Padding.MixinProps> = ({ pl, pr, pt, pb, px, py, p }) => (
    theme: any,
  ) => {
    const scale = maybe(stringOrNumberScale(theme.scale));
    return {
      padding: scale(p),
      paddingBottom: scale(selectFirstDefined(pb, py, p)),
      paddingLeft: scale(selectFirstDefined(pl, px, p)),
      paddingRight: scale(selectFirstDefined(pr, px, p)),
      paddingTop: scale(selectFirstDefined(pt, py, p)),
    };
  };
}

export default Padding;
