import { Interpolation } from "emotion";
import * as React from "react";
import withProps from "recompose/withProps";
import { CssProps } from "../components";
import { RCT } from "./react-shorthands";

export const withStyle = <T extends CssProps>(
  style: Interpolation | ((props: T) => Interpolation),
) =>
  withProps<T, T>((props) => {
    const { css, ...rest } = props as any;
    const cssProp =
      typeof style === "function"
        ? [(style as (props: T) => Interpolation)(props), css]
        : [style, css];
    return {
      css: cssProp,
      ...rest,
    };
  });
