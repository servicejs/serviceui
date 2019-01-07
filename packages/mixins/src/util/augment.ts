/**
 * Component augmentation function
 */

import { jsx } from "@emotion/core";
import styled, { StyledComponent, StyledOptions } from "@emotion/styled";
import { CreateStyled } from "@emotion/styled-base";
import { Omit, Overwrapped } from "@emotion/styled-base/types/helper";
import { ComponentType } from "react";
import { Mixin } from "../Mixin";
import { themed } from "../Theme";
import { PropsType } from "./PropsType";
import { zeroOrManyToArray } from "./zero-one-many";

export namespace augment {
  /**
   * Named property argument map for `augment()`
   */
  export interface Props<
    Component extends keyof JSX.IntrinsicElements | ComponentType<any>,
    StyleProps extends Omit<Overwrapped<PropsType<Component>, StyleProps>, ReactClassPropKeys> = Omit<
      PropsType<Component>,
      ReactClassPropKeys
    >,
    ThemeType extends object = any
  > {
    component: Component;
    options?: StyledOptions | undefined;
    themeKey?: string | null | undefined;
    displayName?: string | undefined;
    defaultProps?: StyledComponent<PropsType<Component>, StyleProps, ThemeType>["defaultProps"];
    mixin?: Mixin<StyleProps, ThemeType> | Array<Mixin<StyleProps, ThemeType>>;
  }
}
type ReactClassPropKeys = keyof React.ClassAttributes<any>;

/**
 * Augments a component
 *
 * @param param0 The configuration for the augment function
 */
export function augment<
  Component extends keyof JSX.IntrinsicElements | ComponentType<any>,
  StyleProps extends Omit<Overwrapped<PropsType<Component>, StyleProps>, ReactClassPropKeys> = Omit<
    PropsType<Component>,
    ReactClassPropKeys
  >,
  ThemeType extends object = any,
  A extends augment.Props<Component, StyleProps, ThemeType> = augment.Props<Component, StyleProps, ThemeType>
>({ component, options, themeKey, defaultProps = {}, displayName, mixin = [] }: A) {
  // Determine displayName & theme key

  if (displayName) {
    if (typeof themeKey === "undefined") {
      themeKey = displayName;
    }
  } else {
    if (typeof component === "string") {
      displayName = `Augmented(${component})`;
    } else {
      const baseDisplayName = (component as ComponentType<any>).displayName;
      displayName = baseDisplayName ? `Augmented(baseDisplayName)` : "Component";
    }
  }

  // Convert mixins to a regular array
  const mixins = zeroOrManyToArray<any>(mixin);

  // Determine if the base component is an emotion styled component
  const isEmotionComponent =
    typeof component === "object" &&
    (typeof (component as any).__emotion_base !== "undefined" ||
      typeof (component as any).__emotion_forwardProp !== "undefined" ||
      typeof (component as any).__emotion_real !== "undefined" ||
      typeof (component as any).__emotion_styles !== "undefined");

  // If it is an emotion component, wrap it in an identity function
  // that just forwards the props to prevent the component hierarchy
  // from collapsing
  //
  // Additionally, set the displayName of the parent, if it is not set
  let unstyledComponent: any;
  if (isEmotionComponent) {
    unstyledComponent = (props: any) => jsx(component, props);
    unstyledComponent.displayName = `Unstyled(${displayName})`;
    unstyledComponent.defaultProps = (component as any).defaultProps;
  } else {
    unstyledComponent = component;
    if (typeof unstyledComponent.displayName === "undefined") {
      unstyledComponent.displayName = `Unstyled(${displayName})`;
    }
  }

  // Create the new component
  const newComponent = (styled as CreateStyled<ThemeType>)(unstyledComponent as any, options)<StyleProps>(
    ...(mixins as any[]),
    themeKey ? themed(themeKey) : {},
  );

  // Set the new component's displayName
  newComponent.displayName = displayName;

  // Set the default props of the new component
  newComponent.defaultProps = {
    // prettier-ignore
    ...(typeof component === "string" || typeof (component as ComponentType<any>).defaultProps !== "object"
      ? {}
      : (component as ComponentType<any>).defaultProps!),
    ...(defaultProps as object),
  } as any;

  return newComponent as StyledComponent<PropsType<Component>, StyleProps, ThemeType>;
}

export default augment;
