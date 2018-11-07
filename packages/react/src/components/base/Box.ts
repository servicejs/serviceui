/**
 * Box component
 */

/** Imports */

import { Interpolation } from "create-emotion";
import { css, cx } from "emotion";
import { ThemeProvider, withTheme } from "emotion-theming";
import * as React from "react";
import setDisplayName from "recompose/setDisplayName";
import { Theme, ThemedProps } from "../../theme";
import { IdMonad, PropsType, RCT } from "../../util";
import { AsProps, asPropsToPolymorphicProps } from "./As";
import { Polymorphic } from "./Polymorphic";

/** Declarations */

export interface CssProps {
  css?: Interpolation;
}

export interface CoreProps extends AsProps, CssProps, ThemedProps {}

export interface BoxProps extends CoreProps, PropsType<"div"> {}

export const Box: RCT<BoxProps> = IdMonad.of(
  ({
    as: asProp,
    css: cssProp,
    className,
    theme,
    children,
    ...props
  }: BoxProps) => {
    const combinedClassName = cx(
      css(theme!.componentStyles("Box", props)),
      className,
      Array.isArray(cssProp) ? css(...cssProp) : css(cssProp),
    );
    const polymorphicProps = asPropsToPolymorphicProps({
      as: asProp,
      children,
    });

    if (!polymorphicProps.component) {
      polymorphicProps.component = "div";
    }
    polymorphicProps.props = {
      className: combinedClassName,
      ...props,
      ...(polymorphicProps.props || {}),
    };

    // return React.createElement(
    //   ThemeProvider,
    //   { theme: (theme: any) => ({ ...theme }) },
    //   React.createElement(Polymorphic, polymorphicProps),
    // );
    return React.createElement(Polymorphic, polymorphicProps);
  },
)
  .map((c) => withTheme<BoxProps, Theme>(c))
  .map(setDisplayName("Box"))
  .flatten() as RCT<BoxProps>;
