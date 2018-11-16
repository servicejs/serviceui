/**
 * AspectRatioContainer
 */

/** Imports */

import { percentage } from "../../mixins/units";
import { augment } from "../../util";
import { BoxProps } from "../base";
import {
  PositionedContainerProps,
  RelativePositionedContainer,
} from "./PositionedContainer";

/** Declarations */

export interface AspectRatioContainerBaseProps {
  aspectRatio: number;
}

export interface AspectRatioContainerProps
  extends BoxProps,
    AspectRatioContainerBaseProps {}

export const AspectRatioContainer = augment<
  AspectRatioContainerProps,
  PositionedContainerProps
>({
  defaultProps: {
    css: ({ aspectRatio }) => ({
      height: "0",
      maxWidth: "100%",
      overflow: "hidden",
      paddingBottom: percentage(1 / aspectRatio),
    }),
  },
  displayName: "AspectRatioContainer",
  omittedProps: ["aspectRatio"],
})(RelativePositionedContainer);
