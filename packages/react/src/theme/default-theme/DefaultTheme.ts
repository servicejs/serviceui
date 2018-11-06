import { css, injectGlobal, Interpolation } from "emotion";
import {
  cssReset,
  em,
  fillScreenFlexReset,
  fillScreenReset,
  FontList,
  percentage,
  Unit,
} from "../../mixins";
import { Theme, ThemeProps } from "../Theme";
import colors from "./colors.macro";

// const objectWithKeyAndValue = <K extends string, T>(key: K, value: T) => ({
//     [key]: value,
// }) as { [k in K]: T; };

// const namedStyleFactory = <T>(name: string) => (value: T) => objectWithKeyAndValue(name, value);
// const namedStyleMixinFactory =  <T>(name: string) => (value: T) => css(namedStyleFactory(name)(value) as Interpolation);

// const mixin = <A extends any[]>(styleFactory: (...args: A) => Interpolation) =>
//   (...args: A) => css(styleFactory(...args));

// const withDefaultProps = <P extends object, DP extends Partial<P>, R>(defaultProps: DP, fn: (props: P) => R) =>
//   (props: Pick<P, Exclude<keyof P, keyof DP>> & Pick<Partial<P>, Extract<keyof P, keyof DP>>) =>
//     fn({ ...(defaultProps as object), ...(props as object) } as P);

// interface BorderRadiusStyleProps {
//   n: number;
//   unit: Unit;
// }

// const borderRadiusStyles = ({n, unit}: BorderRadiusStyleProps) => ({ borderRadius: unit(n) });
// const borderRadiusMixin = mixin(borderRadiusStyles);

// // const colorStyle = ;

// const pillShapeStyles = withDefaultProps({ n: 10000, unit: em }, borderRadiusStyles);
// pillShapeStyles({});
// const pillShapeMixin = mixin(pillShapeStyles);

// const aspectRatioStyles = (aspectRatio: number) => ({ paddingBottom: percentage(1 / aspectRatio) });

export interface DefaultThemeProps<
  NamedColors extends string = keyof typeof colors
> extends ThemeProps<NamedColors> {
  fonts: any;
}

export class DefaultTheme<
  NamedColors extends string = keyof typeof colors
> extends Theme<DefaultThemeProps<NamedColors>> {
  public static defaultProps: DefaultThemeProps = {
    baseFontSize: 16,
    baseLineHeight: 1.5,
    colors,
    fonts: {
      sans: {
        family: FontList(
          "-apple-system",
          "system-ui",
          "BlinkMacSystemFont",
          "Segoe UI",
          "Roboto",
          "Helvetica Neue",
          "Oxygen-Sans",
          "Ubuntu",
          "Cantarell",
          "Helvetica",
          "Arial",
          "sans-serif",
          "Apple Color Emoji",
          "Segoe UI Emoji",
          "Segoe UI Symbol",
        ),
      },
    },
  };

  constructor(props: DefaultThemeProps = DefaultTheme.defaultProps) {
    super(props as DefaultThemeProps<NamedColors>);
  }

  public injectGlobal = () => {
    cssReset();
    fillScreenReset();
    fillScreenFlexReset();
    injectGlobal({
      body: {
        fontFamily: this.props.fonts.sans.family,
      },
    });
  }
}

export const defaultTheme = new DefaultTheme();
