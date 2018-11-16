/**
 * AbsoluteFillContainer component
 */

/** Imports */

import { augment } from "../../util/augment";
import {
  AbsolutePositionedContainer,
  PositionedContainerProps,
} from "./PositionedContainer";

/** Declarations */

// prettier-ignore
export const AbsoluteFillContainer = augment<PositionedContainerProps, PositionedContainerProps>({
  defaultProps: {
    css: {
      height: "100%",
      left: "0",
      top: "0",
      width: "100%",
    }
  },
  displayName: "AbsoluteFillContainer"
})(AbsolutePositionedContainer);
