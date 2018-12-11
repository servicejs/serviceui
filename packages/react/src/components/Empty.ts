/**
 * Empty component
 */

import { FunctionComponent } from "react";

export type AsProp = keyof JSX.IntrinsicElements | React.ComponentType<any>;

export interface BaseProps {
  className?: string;
  as?: AsProp;
  // css?: any;
}

export const Empty: FunctionComponent<BaseProps> = () => null;
Empty.displayName = "Empty";
