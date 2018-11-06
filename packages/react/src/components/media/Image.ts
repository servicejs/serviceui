/**
 * Image component
 */

/** Imports */

import * as React from "react";
import setDisplayName from "recompose/setDisplayName";
import { IdMonad, PropsType, RCT } from "../../util";
import { Box, CssProps } from "../base/Box";

/** Declarations */

export interface ImageProps extends CssProps, PropsType<"img"> {}

export const ImageProps = IdMonad.of((props: ImageProps) =>
  React.createElement(Box, { as: "img", ...props }),
)
  .map(setDisplayName("Image"))
  .flatten() as RCT<ImageProps>;
