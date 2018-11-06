/**
 * AspectRatioContainer
 */

/** Imports */

import setDisplayName from "recompose/setDisplayName";
import withProps from "recompose/withProps";
import { percentage } from "../../mixins/units";
import { RCT } from "../../util";
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

export const AspectRatioContainer: RCT<
  AspectRatioContainerProps
> = setDisplayName("AspectRatioContainer")(
  withProps(
    ({ aspectRatio, css, ...props }: AspectRatioContainerProps) =>
      ({
        css: [
          {
            height: "0",
            maxWidth: "100%",
            overflow: "hidden",
            paddingBottom: percentage(1 / aspectRatio),
          },
          css,
        ],
        ...props,
      } as PositionedContainerProps),
  )(RelativePositionedContainer as any),
);
