/**
 * Box component
 */

/** Imports */

import { Interpolation } from "create-emotion";
import { css, cx } from "emotion";
import { ThemeProvider } from "emotion-theming";
import * as React from "react";
import setDisplayName from "recompose/setDisplayName";
import { PropsType } from "../../util";
import { AsProps, asPropsToPolymorphicProps } from "./As";
import { Polymorphic } from "./Polymorphic";

/** Declarations */

export interface CssProps {
  css?: Interpolation;
}

export interface CoreProps extends AsProps, CssProps {}

export interface BoxProps extends CoreProps, PropsType<"div"> {}

export const Box: React.SFC<BoxProps> = setDisplayName("Box")(
  ({ as: asProp, css: cssProp, className, children, ...props }: BoxProps) => {
    const combinedClassName = cx(
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

    return React.createElement(
      ThemeProvider,
      { theme: (theme: any) => ({ ...theme }) },
      React.createElement(Polymorphic, polymorphicProps),
    );
  },
);
