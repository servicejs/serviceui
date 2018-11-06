/**
 * PositionedContainer components
 */

/** Imports */

import { PositionProperty } from "csstype";
import defaultProps from "recompose/defaultProps";
import withProps from "recompose/withProps";
import { RCT } from "../../util";
import { Box, BoxProps } from "../base/Box";

/** Declarations */

export interface PositionedContainerBaseProps {
  position?: PositionProperty;
}

export interface PositionedContainerProps
  extends BoxProps,
    PositionedContainerBaseProps {}

export const PositionedContainer: RCT<PositionedContainerProps> = withProps<
  BoxProps,
  PositionedContainerProps
>(({ position, css, ...props }) => ({
  css: [css, { position }],
}))(Box);

// prettier-ignore
export const StaticPositionedContainer: RCT<PositionedContainerProps> =
  defaultProps<PositionedContainerProps>({ position: "static" })(PositionedContainer);
// prettier-ignore
export const RelativePositionedContainer: RCT<PositionedContainerProps> =
  defaultProps<PositionedContainerProps>({ position: "relative" })(PositionedContainer);
// prettier-ignore
export const AbsolutePositionedContainer: RCT<PositionedContainerProps> =
  defaultProps<PositionedContainerProps>({ position: "absolute" })(PositionedContainer);
// prettier-ignore
export const FixedPositionedContainer: RCT<PositionedContainerProps> =
  defaultProps<PositionedContainerProps>({ position: "fixed" })(PositionedContainer);
// prettier-ignore
export const StickyPositionedContainer: RCT<PositionedContainerProps> =
  defaultProps<PositionedContainerProps>({ position: "sticky" })(PositionedContainer);
