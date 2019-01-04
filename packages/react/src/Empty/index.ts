/**
 * Empty component
 */

import { FunctionComponent } from "react";

type AsProp = keyof JSX.IntrinsicElements | React.ComponentType<any>;

namespace Empty {
  export interface Props {
    className?: string;
    as?: AsProp;
    // css?: any;
  }
}

const Empty: FunctionComponent<Empty.Props> = () => null;
Empty.displayName = "Empty";

export default Empty;
