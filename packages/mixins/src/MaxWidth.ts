/**
 * MaxWidth mixin
 */

import { MaxWidthProperty } from "csstype";
import { ThemedInlineFunctionMixin } from "./Mixin";
import maybe from "./util/maybe";
import stringOrNumberScale from "./util/stringOrNumberScale";

namespace MaxWidth {
  export interface MixinProps<TLength = string> {
    maxWidth?: number | MaxWidthProperty<TLength>;
  }

  export const mixin: ThemedInlineFunctionMixin<MaxWidth.MixinProps> = ({ maxWidth }) => (theme: any) => ({
    maxWidth: maybe(stringOrNumberScale(theme.scale))(maxWidth),
  });
}

export default MaxWidth;
