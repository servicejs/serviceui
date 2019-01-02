/**
 * If component
 */

import { jsx } from "@emotion/core";
import { ContextType as ReactContextType, createContext, FunctionComponent } from "react";

const IfThenElseContext = createContext<boolean>(undefined as any);

namespace If {
  export interface Props {
    condition: boolean;
  }

  export type Context = typeof IfThenElseContext;
  export type ContextType = ReactContextType<typeof IfThenElseContext>;
}

const If = (({ condition }: If.Props) => jsx(IfThenElseContext.Provider, { value: condition })) as FunctionComponent<
  If.Props
> & {
  Context: typeof IfThenElseContext;
};
If.Context = IfThenElseContext;

export default If;
