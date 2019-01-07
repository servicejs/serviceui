/**
 * Width mixin
 */

import { WidthProperty } from "csstype";
import { ThemedInlineFunctionMixin } from "./Mixin";
import maybe from "./util/maybe";
import stringOrNumberScale from "./util/stringOrNumberScale";

namespace Width {
  export interface MixinProps<TLength = string> {
    w?: number | WidthProperty<TLength>;
  }

  export const mixin: ThemedInlineFunctionMixin<Width.MixinProps> = ({ w }) => (theme: any) => ({
    width: maybe(stringOrNumberScale(theme.scale))(w),
  });
}

export default Width;
