/**
 * Flex components
 */

/** Imports */

import {
  AlignContentProperty,
  AlignItemsProperty,
  AlignSelfProperty,
  FlexDirectionProperty,
  FlexProperty,
  FlexWrapProperty,
  JustifyContentProperty,
} from "csstype";
import { augment } from "../../util/augment";
import { Box, BoxProps } from "../base";

/** Declarations */

const flexBoxPropsKeys = [
  "child",
  "inline",
  "direction",
  "wrap",
  "justifyContent",
  "alignContent",
  "alignItems",
  "alignSelf",
  "flex",
  "order",
];

export interface FlexBaseProps {
  child?: boolean;
  inline?: boolean;
  direction?: FlexDirectionProperty;
  wrap?: FlexWrapProperty;
  justifyContent?: JustifyContentProperty;
  alignContent?: AlignContentProperty;
  alignItems?: AlignItemsProperty;
  alignSelf?: AlignSelfProperty;
  flex?: FlexProperty<string>;
  order?: number;
}

/**
 * FlexProps
 */
export interface FlexProps extends BoxProps, FlexBaseProps {}

/**
 * Flex component
 */
export const Flex = augment<FlexProps, BoxProps>({
  defaultProps: {
    child: false,
    inline: false,
  },
  displayName: "Flex",
  omittedProps: flexBoxPropsKeys,
})(Box);

export const ExpandingFlex = augment<FlexProps, FlexProps>({
  defaultProps: {
    flex: 1,
  },
  displayName: "ExpandingFlex",
})(Flex);

export const FlexRow = augment<FlexProps, FlexProps>({
  defaultProps: {
    direction: "row",
  },
  displayName: "FlexRow",
})(Flex);

export const WrappingFlexRow = augment<FlexProps, FlexProps>({
  defaultProps: {
    wrap: "wrap",
  },
  displayName: "WrappingFlexRow",
})(FlexRow);

export const FlexColumn = augment<FlexProps, FlexProps>({
  defaultProps: {
    direction: "column",
  },
  displayName: "FlexColumn",
})(Flex);
