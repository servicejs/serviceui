/**
 * CoreProps
 */

/** Imports */

import { Interpolation } from "emotion";
import { Interpolation as ReactInterpolation } from "react-emotion";
import { ThemedProps } from "../../theme";

/** Declarations */

/**
 * AsProps
 */
export interface AsProps {
  as?: (keyof JSX.IntrinsicElements) | React.ComponentType<any>;
}

export interface CssProps {
  css?: Interpolation | ReactInterpolation<this>;
}

export interface CoreProps extends AsProps, CssProps, ThemedProps {}
