/**
 * Component augmentation function
 */

/** Imports */

import { jsx } from "@emotion/core";
import styled, { StyledComponent, StyledOptions } from "@emotion/styled";
import { CreateStyled } from "@emotion/styled-base";
import { Omit, Overwrapped } from "@emotion/styled-base/types/helper";
import { ComponentType } from "react";
import { Mixin } from "../mixins";
import { themed } from "../theme";
import { ArrayOrElement } from "./ArrayOrElement";
import { PropsType } from "./PropsType";

/**
 * Named parameter values for `augment()`
 */
export interface AugmentProps<
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
  mixin?: ArrayOrElement<Mixin<StyleProps, ThemeType>>;
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
  A extends AugmentProps<Component, StyleProps, ThemeType> = AugmentProps<Component, StyleProps, ThemeType>
>({ component, options, themeKey, defaultProps = {}, displayName, mixin = [] }: A) {
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

  mixin = Array.isArray(mixin) ? mixin : [mixin];

  const isEmotionComponent =
    typeof component === "object" &&
    (typeof (component as any).__emotion_base !== "undefined" ||
      typeof (component as any).__emotion_forwardProp !== "undefined" ||
      typeof (component as any).__emotion_real !== "undefined" ||
      typeof (component as any).__emotion_styles !== "undefined");

  // console.log(isEmotionComponent, component, typeof component);

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

  const newComponent = (styled as CreateStyled<ThemeType>)(unstyledComponent as any, options)<StyleProps>(
    ...(mixin as any[]),
    themeKey ? themed(themeKey) : {},
  );

  newComponent.displayName = displayName;

  newComponent.defaultProps = {
    // prettier-ignore
    ...(typeof component === "string" || typeof (component as ComponentType<any>).defaultProps !== "object"
      ? {}
      : (component as ComponentType<any>).defaultProps!),
    ...(defaultProps as object),
  } as any;
  return newComponent as StyledComponent<PropsType<Component>, StyleProps, ThemeType>;
}
