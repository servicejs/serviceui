/**
 * Height mixin
 */

import { HeightProperty } from "csstype";
import { ThemedInlineFunctionMixin } from "./Mixin";
import maybe from "./util/maybe";
import stringOrNumberScale from "./util/stringOrNumberScale";

namespace Height {
  export interface MixinProps<TLength = string> {
    h?: number | HeightProperty<TLength>;
  }

  export const mixin: ThemedInlineFunctionMixin<Height.MixinProps> = ({ h }) => (theme: any) => ({
    height: maybe(stringOrNumberScale(theme.scale))(h),
  });
}

export default Height;
