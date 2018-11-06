import { Interpolation } from "emotion";
import withProps from "recompose/withProps";
import { CssProps } from "../components";

export const withStyle = <T extends CssProps>(
  style: Interpolation | ((css: Interpolation) => Interpolation),
) =>
  withProps<T, T>((props) => {
    const { css, ...rest } = props as any;
    const cssProp =
      typeof style === "function"
        ? (style as (css: Interpolation) => Interpolation)(css)
        : [style, css];
    return {
      css: cssProp,
      ...rest,
    };
  });
