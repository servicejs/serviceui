/**
 * Image component
 */

/** Imports */

import * as React from "react";
import setDisplayName from "recompose/setDisplayName";
import withProps from "recompose/withProps";
import { IdMonad, PropsType, RCT } from "../../util";
import { Box, CssProps } from "../base/Box";

/** Declarations */

export interface ImageProps extends CssProps, PropsType<"img"> {}

export const Image = IdMonad.of((props: ImageProps) =>
  React.createElement(Box, { as: "img", ...props }),
)
  .map(
    withProps<ImageProps, ImageProps>(({ css, ...props }) => ({
      css: [
        {
          display: "block",
          maxWidth: "100%",
          maxHeight: "100%",
          width: "auto",
          height: "auto",
        },
        css,
      ],
    })),
  )
  .map(setDisplayName("Image"))
  .flatten() as RCT<ImageProps>;
