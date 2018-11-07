/**
 * wrap higher-order component
 */

/** Imports */

import * as React from "react";
import { RCT } from "./react-shorthands";

/** Declarations */

// prettier-ignore
export const wrap = <WP>(wrapper: RCT<WP>, wrapperProps: WP = {} as WP) =>
  <P>(component: RCT<P>) =>
    (
      (props: P) =>
        React.createElement(wrapper, wrapperProps, React.createElement(component, props))
    ) as RCT<P>;
