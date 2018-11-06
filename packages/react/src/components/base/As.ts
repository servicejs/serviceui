/**
 * Polymorphic as component
 */

/** Imports */

import * as React from "react";
import setDisplayName from "recompose/setDisplayName";
import { AnyComponent, isNullOrUndefined, PropsType } from "../../util";
import { Polymorphic, PolymorphicProps } from "./Polymorphic";

/** Declarations */

/**
 * As property type
 */
export type AsProperty<
  T extends AnyComponent = AnyComponent,
  P extends PropsType<T> = PropsType<T>
> =
  | PolymorphicProps<T, P>
  | (T extends React.ComponentType<{}> ? T : never)
  | (T extends keyof JSX.IntrinsicElements ? T : never)
  | null
  | undefined;

/**
 * As component props
 */
export interface AsProps<
  T extends AnyComponent = AnyComponent,
  P extends PropsType<T> = PropsType<T>
> {
  as?: AsProperty<T, P>;
  children?: React.ReactNode;
}

/**
 * Converts the
 */
export function asPropsToPolymorphicProps<
  T extends AnyComponent,
  P extends PropsType<T>
>({ as: asProp, children }: AsProps<T, P>): PolymorphicProps<T, P> {
  // If there is no `as` in the props, return immediately
  if (isNullOrUndefined(asProp)) {
    return { children };
  }

  // If the `as` is a string or a function, it means the props are just {}
  if (typeof asProp === "string" || typeof asProp === "function") {
    return { component: asProp as T, props: { children } as P };
  }

  // Otherwise, the props can be extracted
  return {
    component: (asProp as PolymorphicProps<T>).component,
    props: {
      children,
      ...((asProp as PolymorphicProps<T>).props as object),
    } as P,
  };
}

/**
 * A polymorphic component that accepts its rendering attributes in the `as` property
 */
export const As: React.SFC<AsProps> = setDisplayName("As")(
  <T extends AnyComponent>(props: AsProps<T>) => {
    return React.createElement(Polymorphic, asPropsToPolymorphicProps(props));
  },
);
