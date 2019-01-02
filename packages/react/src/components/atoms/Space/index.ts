/**
 * Space
 */

import { jsx } from "@emotion/core";
import * as React from "react";

namespace Space {
  export interface Props {
    c?: string | number;
  }
}

const Space: React.FunctionComponent<Space.Props> = ({ c = " " }) => jsx(React.Fragment, {}, c);

export default Space;
