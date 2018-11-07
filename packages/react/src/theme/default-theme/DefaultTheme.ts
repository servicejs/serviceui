import { css, injectGlobal, Interpolation } from "emotion";
import {
  cssReset,
  em,
  fillScreenFlexReset,
  fillScreenReset,
  FontList,
  MediaQuery,
  MediaQueryCondition,
  percentage,
  rem,
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

  private defaultComponentStyles = {
    Box: {},
    Text: {},
    Article: {},
    Heading: {
      display: "block",
      fontWeight: 700,
    },
    H1: {
      fontSize: rem(2),
      lineHeight: this.blh(2),
    },
    H2: {
      fontSize: rem(1.5),
      lineHeight: this.blh(1.5),
    },
    H3: {
      fontSize: rem(1.25),
      lineHeight: this.blh(1.25),
    },
    H4: {
      fontSize: rem(1.1),
      lineHeight: this.blh(1.25),
    },
    H5: {
      fontSize: rem(1.0),
      lineHeight: this.blh(1.5),
    },
    H6: {
      fontSize: rem(1.0),
      fontWeight: 400,
      lineHeight: this.blh(1.5),
      textTransform: "small-caps",
    },
  };

  constructor(props: DefaultThemeProps = DefaultTheme.defaultProps) {
    super(props as DefaultThemeProps<NamedColors>);
  }

  public componentStyles = (componentName: string, props: any) => {
    const value = (this.defaultComponentStyles as any)[componentName];
    if (value) {
      if (typeof value === "function") {
        return value(props);
      }
      return value;
    } else {
      return {};
    }
  }

  public injectGlobal = () => {
    cssReset();
    fillScreenReset();
    fillScreenFlexReset();
    injectGlobal({
      "*": {
        overflowWrap: "inherit",
        wordBreak: "inherit",
        wordWrap: "inherit",
      },

      "html": {
        // Base
        "&": {
          fontSize: this.props.baseFontSize,
        },
        // Desktop
        ...MediaQuery("only screen")(
          MediaQueryCondition("min-width", "1280px"),
        )({
          fontSize: `18px`,
        }),
        ...MediaQuery("only screen")(
          MediaQueryCondition("min-width", "1920px"),
        )({
          fontSize: `21px`,
        }),
        ...MediaQuery("only screen")(
          MediaQueryCondition("min-width", "2560px"),
        )({
          fontSize: `24px`,
        }),
        ...MediaQuery("only screen")(
          MediaQueryCondition("min-width", "3840px"),
        )({
          fontSize: `${100 / (1920 / 21)}vw`,
        }),

        // Mobile
        ...MediaQuery("only screen")(
          MediaQueryCondition("-webkit-min-device-pixel-ratio", "2"),
          MediaQueryCondition("orientation", "portrait"),
          MediaQueryCondition("min-width", "640px"),
        )({
          fontSize: `18px`,
        }),
        ...MediaQuery("only screen")(
          MediaQueryCondition("-webkit-min-device-pixel-ratio", "2"),
          MediaQueryCondition("orientation", "landscape"),
          MediaQueryCondition("min-height", "640px"),
        )({
          fontSize: `18px`,
        }),
        ...MediaQuery("only screen")(
          MediaQueryCondition("-webkit-min-device-pixel-ratio", "2"),
          MediaQueryCondition("orientation", "portrait"),
          MediaQueryCondition("min-width", "768px"),
        )({
          fontSize: `21px`,
        }),
        ...MediaQuery("only screen")(
          MediaQueryCondition("-webkit-min-device-pixel-ratio", "2"),
          MediaQueryCondition("orientation", "landscape"),
          MediaQueryCondition("min-height", "768px"),
        )({
          fontSize: `21px`,
        }),
        ...MediaQuery("only screen")(
          MediaQueryCondition("-webkit-min-device-pixel-ratio", "2"),
          MediaQueryCondition("orientation", "portrait"),
          MediaQueryCondition("min-width", "1024px"),
        )({
          fontSize: `24px`,
        }),
        ...MediaQuery("only screen")(
          MediaQueryCondition("-webkit-min-device-pixel-ratio", "2"),
          MediaQueryCondition("orientation", "landscape"),
          MediaQueryCondition("min-height", "1024px"),
        )({
          fontSize: `24px`,
        }),
        ...MediaQuery("only screen")(
          MediaQueryCondition("-webkit-min-device-pixel-ratio", "2"),
          MediaQueryCondition("orientation", "portrait"),
          MediaQueryCondition("min-width", "1280px"),
        )({
          fontSize: `${100 / (1280 / 24)}vmin`,
        }),
        ...MediaQuery("only screen")(
          MediaQueryCondition("-webkit-min-device-pixel-ratio", "2"),
          MediaQueryCondition("orientation", "landscape"),
          MediaQueryCondition("min-height", "1280px"),
        )({
          fontSize: `${100 / (1280 / 24)}vmin`,
        }),
      },

      "body": {
        fontFamily: this.props.fonts.sans.family,
        lineHeight: this.props.baseLineHeight,

        overflowWrap: "break-word",
        wordBreak: "break-word",
        wordWrap: "break-word",

        ...MediaQuery("only screen")(
          MediaQueryCondition("-webkit-min-device-pixel-ratio", "1"),
        )({
          // background: "#F00",
        }),
        ...MediaQuery("only screen")(
          MediaQueryCondition("-webkit-min-device-pixel-ratio", "2"),
        )({
          // background: "#0F0",
        }),
        ...MediaQuery("only screen")(
          MediaQueryCondition("-webkit-min-device-pixel-ratio", "3"),
        )({
          // background: "#00F",
        }),
      },
    });
  }
}

export const defaultTheme = new DefaultTheme();
