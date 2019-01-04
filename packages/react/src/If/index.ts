/**
 * If component
 */

import { jsx } from "@emotion/core";
import React from "react";

const IfThenElseContext = React.createContext<boolean>(undefined as any);

namespace If {
  export interface Props {
    condition: boolean;
    children?: React.ReactNode;
  }

  export type Context = typeof IfThenElseContext;
  export type ContextType = React.ContextType<typeof IfThenElseContext>;
}

const If = (({ condition, children }: If.Props) =>
  jsx(IfThenElseContext.Provider, { children, value: condition })) as React.FunctionComponent<If.Props> & {
  Context: typeof IfThenElseContext;
};
If.Context = IfThenElseContext;

export default If;
