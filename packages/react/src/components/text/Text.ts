/**
 * Text component
 */

/** Imports */

import withProps from "recompose/withProps";
import { PropsType } from "../../util";
import { AsProps } from "../base/As";
import { Box, BoxProps, CssProps } from "../base/Box";

/** Declarations */

export interface TextProps extends AsProps, CssProps, PropsType<"span"> {}

/**
 * Text component
 */
export const Text = withProps<BoxProps, TextProps>(
  ({ css: cssProp, as: asProp, ...props }) =>
    ({
      as: asProp || "span",
      css: [
        {
          display: "inline",
        },
        cssProp,
      ],
      ...props,
    } as BoxProps),
)(Box);
