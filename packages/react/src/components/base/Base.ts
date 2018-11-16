/**
 * Base component
 */

/** Imports */

import { SFC } from "react";
import componentFromProp from "recompose/componentFromProp";
import { AsProps } from "./types";

/** Declarations */

/**
 * Polymorphic Base component props
 */
export interface BaseProps extends AsProps {
  [key: string]: any;
}

/**
 * The Base component that will render the tag supplied in the `as` property
 */
export const Base: SFC<BaseProps> = componentFromProp("as");
Base.displayName = "Base";
Base.defaultProps = {
  as: () => null,
};
