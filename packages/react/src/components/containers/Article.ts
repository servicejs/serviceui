/**
 * Article component
 */

/** Imports */

import { augment, EmotionPropsType } from "../../util";
import { Box, BoxProps, CoreProps } from "../base";

/** Declarations */

export interface ArticleProps extends CoreProps, EmotionPropsType<"article"> {}

/**
 * Article (`<article>`)
 */
export const Article = augment<ArticleProps, BoxProps>({
  defaultProps: {
    as: "article",
  },
  displayName: "Article",
})(Box);
