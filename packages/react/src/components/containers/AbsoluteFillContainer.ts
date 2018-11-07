/**
 * AbsoluteFillContainer
 */

/** Imports */

import setDisplayName from "recompose/setDisplayName";
import withProps from "recompose/withProps";
import { IdMonad, RCT, withStyle } from "../../util";
import { BoxProps } from "../base";
import {
  AbsolutePositionedContainer,
  PositionedContainerProps,
} from "./PositionedContainer";

/** Declarations */

export const AbsoluteFillContainer = IdMonad.of(AbsolutePositionedContainer)
  .map(
    withStyle({
      height: "100%",
      left: "0",
      top: "0",
      width: "100%",
    }),
  )
  .map(setDisplayName("AbsoluteFillContainer"))
  .flatten() as RCT<BoxProps>;
