/**
 * Article component
 */

/** Imports */

import defaultProps from "recompose/defaultProps";
import setDisplayName from "recompose/setDisplayName";
import { themed } from "../../theme";
import { IdMonad, PropsType, RCT, withStyle } from "../../util";
import { Box, BoxProps, CoreProps } from "../base";

/** Declarations */

export interface ArticleProps extends CoreProps, PropsType<"article"> {}

/**
 * Article (`<article>`)
 */
export const Article = IdMonad.of(Box)
  .map(defaultProps<BoxProps>({ as: "article" }))
  .map(themed("Article"))
  .map(setDisplayName("Article"))
  .flatten() as RCT<ArticleProps>;
