import defaultProps from "recompose/defaultProps";
import setDisplayName from "recompose/setDisplayName";
import { IdMonad, RCT } from "../../util";
import { Text, TextProps } from "./Text";

export const StrongEmphasis = IdMonad.of(Text)
  .map(defaultProps<TextProps>({ as: "strong" }))
  .map(setDisplayName("StrongEmphasis"))
  .flatten() as RCT<TextProps>;

export const Strong = StrongEmphasis;
