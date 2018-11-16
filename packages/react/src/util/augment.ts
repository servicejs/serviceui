/**
 * augment HOC
 */

/** Imports */

import { StyledOtherComponent } from "create-emotion-styled";
import styled from "react-emotion";
import setDisplayName from "recompose/setDisplayName";
import { CoreProps } from "../components/base/types";
import { setDefaultProps } from "./setDefaultProps";

/** Declarations */

/**
 * Accepts a name/key and returns a function interpolation that will check for
 * the existence of a theme, find the component styles for the key and inject them
 * @param name Name to search for in the theme
 */
export const themed = (name: string) => ({ theme, ...props }: CoreProps) =>
  ({} || theme ? theme!.componentStyles(name, props) : "");

/**
 * A function interpolation that will extract the css property from the props
 * and inject it for styling
 * @param param0 The props to extract the css from
 */
export const cssProp = ({ css }: CoreProps) => css || "";

/**
 * Returns a function that accepts a list of omitted values and returns a
 * function that will return false if a supplied value is in the list.
 * @param values The values to omit
 */
export const omitValues = <A extends T[], T extends any>(...values: A) => (
  value: T,
) => values.indexOf(value) === -1;

/**
 * Returns a function that accepts a list of allowed values and returns a
 * function that will return true if a supplied value is in the list.
 * @param values The values to allow
 */
export const allowValues = <A extends T[], T extends any>(...values: A) => (
  value: T,
) => values.indexOf(value) !== -1;

export const mergeDefaultProps = (
  component: React.ComponentType<any>,
  newDefaultProps: object,
) => {
  const { as: oldAs, ...oldRest } = component.defaultProps || ({} as any);
  const { as: newAs, ...newRest } = newDefaultProps as any;
  const r = {
    ...oldRest,
    ...newRest,
  };
  const asProp = newAs || oldAs;
  if (asProp) {
    r.as = asProp;
  }
  return r;
};

export interface AugmentProps<P extends object> {
  themeKey?: string;
  defaultProps?: Partial<P>;
  displayName?: string;
  omittedProps?: string[];
}

export const augment = <
  OuterProps extends object,
  InnerProps extends object = InnerProps,
  ThemeType extends object = object
>({
  themeKey,
  defaultProps = {},
  displayName,
  omittedProps = [],
}: AugmentProps<OuterProps>) => (base: React.ComponentType<InnerProps>) => {
  const theThemeKey = themeKey || displayName;
  const c = styled<OuterProps>(
    (base as any) as React.ComponentType<OuterProps>,
    {
      shouldForwardProp: omitValues("css", ...omittedProps),
    },
  )(theThemeKey && themed(theThemeKey), cssProp);
  setDefaultProps(mergeDefaultProps(base, defaultProps || {}))(c);
  setDisplayName(
    displayName ||
      (base.displayName && `Augmented(${base.displayName})`) ||
      "Component",
  )(c);
  delete c.__emotion_real;
  return c as StyledOtherComponent<OuterProps, InnerProps, ThemeType>;
};
