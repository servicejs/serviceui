/**
 * Flex
 */

import { flexBoxMixin, FlexProps, flexPropsKeys } from "../mixins";
import { augment, disallowKeys } from "../util";
import { Box } from "./Box";

export const Flex = augment<typeof Box, FlexProps>({
  component: Box,
  displayName: "Flex",
  mixin: flexBoxMixin,
  options: {
    shouldForwardProp: disallowKeys(...flexPropsKeys),
  },
});

export const FlexRow = augment<typeof Flex, {}>({
  component: Flex,
  defaultProps: { align: "center", direction: "row" },
  displayName: "FlexRow",
});

export const FlexColumn = augment<typeof Flex, {}>({
  component: Flex,
  defaultProps: { direction: "column" },
  displayName: "FlexColumn",
});

export const WrappingFlexRow = augment<typeof FlexRow, {}>({
  component: FlexRow,
  defaultProps: { wrap: "wrap" },
  displayName: "WrappingFlexRow",
});
