/**
 * Polymorphic as component
 */

/** Imports */

import * as React from "react";
import setDisplayName from "recompose/setDisplayName";
import { AnyComponent, PropsType } from "../../util";

/** Declarations */

/**
 * Polymorphic Props containing the component and props to be rendered
 */
export interface PolymorphicProps<
  T extends AnyComponent = AnyComponent,
  P extends PropsType<T> = PropsType<T>
> {
  component?: T | null | undefined;
  props?: P | null | undefined;
  children?: React.ReactNode;
}

/**
 * A polymorphic component that will render the component with the props passed in its own props.
 * If no component or props are passed, only the children will be returned as-is.
 */
export const Polymorphic: React.SFC<PolymorphicProps> = setDisplayName(
  "Polymorphic",
)(({ component, props, children }: PolymorphicProps) => {
  const p = props || {};

  if (component && props) {
    return React.createElement(component, { children, ...props });
  }

  const key = p.key || undefined;
  const c = p.children || children || undefined;

  if (c) {
    return React.createElement(
      React.Fragment,
      { key },
      ...(Array.isArray(c) ? c : [c]),
    );
  }

  return null;
});
