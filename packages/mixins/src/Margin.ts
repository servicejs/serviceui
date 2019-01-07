/**
 * Margin mixin
 */

import { ThemedInlineFunctionMixin } from "./Mixin";
import maybe from "./util/maybe";
import { selectFirstDefined } from "./util/select-first";
import stringOrNumberScale from "./util/stringOrNumberScale";

namespace Margin {
  export interface MixinProps {
    ml?: string | number;
    mr?: string | number;
    mt?: string | number;
    mb?: string | number;
    mx?: string | number;
    my?: string | number;
    m?: string | number;
  }

  export const mixin: ThemedInlineFunctionMixin<Margin.MixinProps> = ({ ml, mr, mt, mb, mx, my, m }) => (
    theme: any,
  ) => {
    const scale = maybe(stringOrNumberScale(theme.scale));
    return {
      margin: scale(m),
      marginBottom: scale(selectFirstDefined(mb, my, m)),
      marginLeft: scale(selectFirstDefined(ml, mx, m)),
      marginRight: scale(selectFirstDefined(mr, mx, m)),
      marginTop: scale(selectFirstDefined(mt, my, m)),
    };
  };
}

export default Margin;
