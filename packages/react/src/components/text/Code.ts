/**
 * Code component
 */

/** Imports */

import defaultProps from "recompose/defaultProps";
import setDisplayName from "recompose/setDisplayName";
import { IdMonad, PropsType, RCT } from "../../util";
import { CoreProps } from "../base";
import { Text, TextProps } from "./Text";

/** Declarations */

export interface CodeProps extends CoreProps, PropsType<"code"> {}

/**
 * Inline code (`<code>`)
 */
export const Code = IdMonad.of(Text)
  .map(defaultProps<TextProps>({ as: "code" }))
  .map(setDisplayName("Code"))
  .flatten() as RCT<CodeProps>;
