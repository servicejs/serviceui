/**
 * HorizontalOverflowScrollContainer
 */

/** Imports */

import setDisplayName from "recompose/setDisplayName";
import { IdMonad, RCT, withStyle } from "../../util";
import { Box, BoxProps } from "../base";

/** Declarations */

export const HorizontalOverflowScrollContainer = IdMonad.of(Box)
  .map(
    withStyle({
      maxWidth: "100%",
      overflowX: "auto",
    }),
  )
  .map(setDisplayName("HorizontalOverflowScrollContainer"))
  .flatten() as RCT<BoxProps>;
