import { OverflowProperty, OverflowXProperty, OverflowYProperty } from "csstype";
import { overflowMixin, OverflowMixinProps } from "../mixins";
import { augment } from "../util";
import { Box } from "./Box";

//
// Positioned containers
//

export const AbsolutePositionedContainer = augment<typeof Box, {}>({
  component: Box,
  defaultProps: {
    position: "absolute",
  },
  displayName: "AbsolutePositionedContainer",
});

export const RelativePositionedContainer = augment<typeof Box, {}>({
  component: Box,
  defaultProps: {
    position: "relative",
  },
  displayName: "RelativePositionedContainer",
});

export const FixedPositionedContainer = augment<typeof Box, {}>({
  component: Box,
  defaultProps: {
    position: "fixed",
  },
  displayName: "FixedPositionedContainer",
});

export const StickyPositionedContainer = augment<typeof Box, {}>({
  component: Box,
  defaultProps: {
    position: "sticky",
  },
  displayName: "StickyPositionedContainer",
});

export const AbsoluteFillContainer = augment<typeof AbsolutePositionedContainer, {}>({
  component: AbsolutePositionedContainer,
  displayName: "AbsoluteFillContainer",
  mixin: {
    height: "100%",
    left: 0,
    top: 0,
    width: "100%",
  },
});

//
// AspectRatio container
//

export interface AspectRatioProps {
  aspectRatio?: number;
}

export const AspectRatioContainer = augment<typeof RelativePositionedContainer, AspectRatioProps>({
  component: RelativePositionedContainer,
  defaultProps: {
    aspectRatio: 16 / 9,
  },
  displayName: "AspectRatioContainer",
  mixin: ({ aspectRatio }: AspectRatioProps) => ({
    height: 0,
    maxWidth: "100%",
    overflow: "hidden",
    paddingBottom: `${100 / aspectRatio!}%`,
  }),
});

//
// Overflow containers
//

export const OverflowContainer = augment<typeof Box, OverflowMixinProps>({
  component: Box,
  defaultProps: {
    overflow: "auto",
    overflowX: "auto",
    overflowY: "auto",
  },
  displayName: "HorizontalOverflowContainer",
  mixin: overflowMixin,
});

export const HorizontalOverflowContainer = augment<typeof OverflowContainer, {}>({
  component: OverflowContainer,
  defaultProps: {
    overflow: "auto",
    overflowX: "auto",
    overflowY: "hidden",
  },
  displayName: "HorizontalOverflowContainer",
});

export const VerticalOverflowContainer = augment<typeof OverflowContainer, {}>({
  component: OverflowContainer,
  defaultProps: {
    overflow: "auto",
    overflowX: "hidden",
    overflowY: "auto",
  },
  displayName: "VerticalOverflowContainer",
});

//
// Centered Container
//

export const CenteredContainer = augment<typeof Box, {}>({
  component: Box,
  defaultProps: {
    mx: "auto",
    my: 0,
  },
  displayName: "CenteredContainer",
});
