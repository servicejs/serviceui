/**
 * SafeArea component
 */

/** Imports */

import { safeAreaMixin, SafeAreaProps } from "../mixins";
import { augment } from "../util";
import { Box } from "./Box";

/** Declarations */

export const SafeArea = augment<typeof Box, SafeAreaProps>({
  component: Box,
  mixin: safeAreaMixin,
});

export const SafeAreaLeft = augment<typeof SafeArea, {}>({
  component: SafeArea,
  defaultProps: { l: true },
  displayName: "SafeAreaLeft",
});

export const SafeAreaRight = augment<typeof SafeArea, {}>({
  component: SafeArea,
  defaultProps: { l: true },
  displayName: "SafeAreaRight",
});

export const SafeAreaTop = augment<typeof SafeArea, {}>({
  component: SafeArea,
  defaultProps: { l: true },
  displayName: "SafeAreaTop",
});

export const SafeAreaBottom = augment<typeof SafeArea, {}>({
  component: SafeArea,
  defaultProps: { l: true },
  displayName: "SafeAreaBottom",
});

export const SafeAreaX = augment<typeof SafeArea, {}>({
  component: SafeArea,
  defaultProps: { l: true },
  displayName: "SafeAreaX",
});

export const SafeAreaY = augment<typeof SafeArea, {}>({
  component: SafeArea,
  defaultProps: { l: true },
  displayName: "SafeAreaY",
});

export const SafeAreaAll = augment<typeof SafeArea, {}>({
  component: SafeArea,
  defaultProps: { all: true },
  displayName: "SafeAreaAll",
});
