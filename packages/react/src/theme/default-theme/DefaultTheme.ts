import { injectGlobal } from "emotion";
import { Interpolation } from "react-emotion";
import { FlexBaseProps } from "../../components";
import {
  cssReset,
  fillScreenFlexReset,
  fillScreenReset,
  FontList,
  MediaQuery,
  MediaQueryCondition,
  rem,
} from "../../mixins";
import { Theme, ThemeProps } from "../Theme";
import colors from "./colors.macro";

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

  private defaultComponentStyles: { [key: string]: Interpolation<any> } = {
    Box: {
      display: "block",
    },
    Text: {
      display: "inline",
    },
    // tslint:disable-next-line:object-literal-sort-keys
    Paragraph: {
      display: "block",
    },
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
      lineHeight: this.blh(1.5),
    },
    InlineQuote: {
      "&": {
        display: "inline",
        fontStyle: "italic",
        quotes: '"“" "”" "‘" "’"',
      },

      ":before": {
        content: "open-quote",
        fontStyle: "normal",
      },

      ":after": {
        content: "close-quote",
        fontStyle: "normal",
      },
    },
    BlockQuote: {
      "&": {
        borderLeftColor: "inherit",
        borderLeftStyle: "solid",
        borderLeftWidth: this.blh(1 / 8),

        display: "block",
        fontStyle: "italic",
        paddingBottom: this.blh(1),
        paddingLeft: this.blh(1 - 1 / 8),
        paddingTop: this.blh(1),
        quotes: '"“" "”" "‘" "’"',
      },

      ":before": {
        content: "open-quote",
        // display: "block",
        fontStyle: "normal",
        // textAlign: "left",
      },

      ":after": {
        content: "close-quote",
        // display: "block",
        fontStyle: "normal",
        // textAlign: "right",
      },
    },
    Code: {
      display: "inline",
      fontFamily: "monospace",
    },
    CodeBlock: {
      display: "block",
    },
    PreFormattedText: {
      display: "block",
    },
    Emphasis: {
      display: "inline",
      fontStyle: "italic",
    },
    StrongEmphasis: {
      display: "inline",
      fontWeight: 700,
    },
    Article: {},

    Flex: ({
      child,
      inline,
      direction: flexDirection,
      wrap: flexWrap,
      justifyContent,
      alignContent,
      alignItems,
      alignSelf,
      flex,
      order,
    }: FlexBaseProps) => ({
      alignContent,
      alignItems,
      alignSelf,
      display: child ? undefined : inline ? "inline-flex" : "flex",
      flex,
      flexDirection,
      flexWrap,
      justifyContent,
      order,
    }),
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
