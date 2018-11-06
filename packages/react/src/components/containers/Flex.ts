/**
 * Text component
 */

/** Imports */

import setDisplayName from "recompose/setDisplayName";
import { withStyle } from "../../util";
import { Box } from "../base/Box";

/** Declarations */

/**
 * Flex component
 */
export const flexStyles = {
  alignItems: "center",
  display: "flex",
  justifyContent: "center",
};
export const Flex = setDisplayName("Flex")(withStyle(flexStyles)(Box));

export const expandingFlexStyles = {
  flex: 1,
  height: "100%",
  width: "100%",
};
export const ExpandingFlex = setDisplayName("ExpandingFlex")(
  withStyle(expandingFlexStyles)(Flex),
);

export const inlineFlexStyles = {
  alignItems: "center",
  display: "inline-flex",
  justifyContent: "center",
};

export const InlineFlex = setDisplayName("InlineFlex")(
  withStyle(inlineFlexStyles)(Box),
);

export const FlexRow = setDisplayName("FlexRow")(
  withStyle({
    flexDirection: "row",
  })(ExpandingFlex),
);
export const FlexColumn = setDisplayName("FlexColumn")(
  withStyle({
    flexDirection: "column",
  })(ExpandingFlex),
);
export const InlineFlexRow = setDisplayName("InlineFlexRow")(
  withStyle({
    flexDirection: "row",
  })(Flex),
);
export const InlineFlexColumn = setDisplayName("InlineFlexColumn")(
  withStyle({
    flexDirection: "column",
  })(Flex),
);
