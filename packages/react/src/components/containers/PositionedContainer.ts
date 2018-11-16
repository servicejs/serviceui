/**
 * PositionedContainer components
 */

/** Imports */

import { PositionProperty } from "csstype";
import { augment } from "../../util/augment";
import { Box, BoxProps } from "../base";

/** Declarations */

export interface PositionedContainerBaseProps {
  position?: PositionProperty;
}

export interface PositionedContainerProps
  extends BoxProps,
    PositionedContainerBaseProps {}

/**
 * PositionedContainer component
 */
export const PositionedContainer = augment<PositionedContainerProps, BoxProps>({
  defaultProps: {
    css: ({ position }) => ({
      position,
    }),
  },
  displayName: "PositionedContainer",
  omittedProps: ["position"],
})(Box);

// prettier-ignore
export const StaticPositionedContainer = augment<PositionedContainerProps, PositionedContainerProps>({
  defaultProps: {
    position: "static",
  },
  displayName: "StaticPositionedContainer"
})(PositionedContainer);

// prettier-ignore
export const RelativePositionedContainer = augment<PositionedContainerProps, PositionedContainerProps>({
  defaultProps: {
    position: "relative",
  },
  displayName: "RelativePositionedContainer"
})(PositionedContainer);

// prettier-ignore
export const AbsolutePositionedContainer = augment<PositionedContainerProps, PositionedContainerProps>({
  defaultProps: {
    position: "absolute",
  },
  displayName: "AbsolutePositionedContainer"
})(PositionedContainer);

// prettier-ignore
export const FixedPositionedContainer = augment<PositionedContainerProps, PositionedContainerProps>({
  defaultProps: {
    position: "fixed",
  },
  displayName: "FixedPositionedContainer"
})(PositionedContainer);

// prettier-ignore
export const StickyPositionedContainer = augment<PositionedContainerProps, PositionedContainerProps>({
  defaultProps: {
    position: "sticky",
  },
  displayName: "StickyPositionedContainer"
})(PositionedContainer);
