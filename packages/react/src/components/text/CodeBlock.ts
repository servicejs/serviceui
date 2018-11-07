/**
 * CodeBlock component
 */

/** Imports */

import defaultProps from "recompose/defaultProps";
import setDisplayName from "recompose/setDisplayName";
import { IdMonad, PropsType, RCT, withStyle } from "../../util";
import { CoreProps } from "../base";
import { Text, TextProps } from "./Text";

/** Declarations */

export interface CodeBlockProps extends CoreProps, PropsType<"code"> {}

/**
 * Code block
 */
export const CodeBlock = IdMonad.of(Text)
  .map(defaultProps<TextProps>({ as: "code" }))
  .map(withStyle({ display: "block" }))
  .map(setDisplayName("Code"))
  .flatten() as RCT<CodeBlockProps>;
