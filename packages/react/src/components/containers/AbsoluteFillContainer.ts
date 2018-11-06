/**
 * AbsoluteFillContainer
 */

/** Imports */

import setDisplayName from "recompose/setDisplayName";
import withProps from "recompose/withProps";
import { RCT } from "../../util";
import { BoxProps } from "../base";
import {
  AbsolutePositionedContainer,
  PositionedContainerProps,
} from "./PositionedContainer";

/** Declarations */

export const AbsoluteFillContainer: RCT<BoxProps> = setDisplayName(
  "AbsoluteFillContainer",
)(
  withProps<PositionedContainerProps, BoxProps>(
    ({ css, ...props }: BoxProps) => ({
      css: [
        {
          height: "100%",
          left: "0",
          top: "0",
          width: "100%",
        },
        css,
      ],
      ...props,
    }),
  )(AbsolutePositionedContainer),
);
