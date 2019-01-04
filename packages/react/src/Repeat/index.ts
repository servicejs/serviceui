/**
 * Repeat
 */

import { jsx } from "@emotion/core";
import React from "react";

namespace Repeat {
  export interface Props {
    n: number;
    component: React.ComponentType;
  }
}

const Repeat: React.FunctionComponent<Repeat.Props> = ({ n, component }) => {
  const children = [];
  for (let i = 0; i < n; i++) {
    children.push(jsx(component, { key: i }));
  }
  return jsx(React.Fragment, {}, ...children);
};

export default Repeat;
