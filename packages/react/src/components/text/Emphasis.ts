import defaultProps from "recompose/defaultProps";
import setDisplayName from "recompose/setDisplayName";
import { IdMonad, RCT } from "../../util";
import { Text, TextProps } from "./Text";

export const Emphasis = IdMonad.of(Text)
  .map(defaultProps<TextProps>({ as: "em" }))
  .map(setDisplayName("Emphasis"))
  .flatten() as RCT<TextProps>;

export const Em = Emphasis;
