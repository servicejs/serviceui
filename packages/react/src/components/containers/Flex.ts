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

/**
 * FlexProps
 */
export interface FlexProps extends BoxProps {
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
 * Flex component
 */
export const Flex = augment<FlexProps, BoxProps>({
  defaultProps: {
    child: false,
    inline: false,

    css: ({
      child,
      inline,
      direction: flexDirection,
      wrap: flexWrap,
      justifyContent,
      alignContent,
      alignItems,
      alignSelf,
      flex,
      order,
    }) => ({
      alignContent,
      alignItems,
      alignSelf,
      display: child ? undefined : inline ? "inline-flex" : "flex",
      flex,
      flexDirection,
      flexWrap,
      justifyContent,
      order,
    }),
  },
  displayName: "Flex",
  omittedProps: flexBoxPropsKeys,
})(Box);

export const ExpandingFlex = augment<FlexProps, FlexProps>({
  defaultProps: {
    flex: 1,
  },
})(Flex);

export const FlexRow = augment<FlexProps, FlexProps>({
  defaultProps: {
    direction: "row",
  },
})(Flex);

export const WrappingFlexRow = augment<FlexProps, FlexProps>({
  defaultProps: {
    wrap: "wrap",
  },
})(FlexRow);

export const FlexColumn = augment<FlexProps, FlexProps>({
  defaultProps: {
    direction: "column",
  },
})(Flex);
