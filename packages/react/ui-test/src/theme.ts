import { InterpolationWithTheme } from "@emotion/core";
import {
  gradientStep,
  MediaQuery,
  MediaQueryCondition,
  px,
  rem,
  repeatingLinearGradient,
  Selectors,
  vh,
  vw,
} from "@service-ui/mixins";
import { action, computed, observable } from "mobx";
import { black, blue, gray, green, red, white, yellow } from "./util/clrs.cc-colors";

const MQ = {
  all: MediaQuery("all"),
  print: MediaQuery("print"),
  screen: MediaQuery("screen"),
  speech: MediaQuery("speech"),
};

interface AspectRatioFunction<T> {
  (aspectRatio: number): T;
  // tslint:disable-next-line:unified-signatures
  (numerator: number, denominator: number | undefined): T;
}

const aspectRatioString = ((value1: number, value2?: number) => {
  if (typeof value2 === "number") {
    if (Number.isInteger(value1) && Number.isInteger(value2)) {
      return `${value1}/${value2}`;
    }
    return aspectRatioString(value1 / value2);
  }

  return `${Math.round(value1 * 10000)}/10000`;
}) as AspectRatioFunction<string>;

const Cond = {
  width: (value: string) => MediaQueryCondition("width", value),
  minWidth: (value: string) => MediaQueryCondition("min-width", value),
  maxWidth: (value: string) => MediaQueryCondition("max-width", value),

  height: (value: string) => MediaQueryCondition("height", value),
  minHeight: (value: string) => MediaQueryCondition("min-height", value),
  maxHeight: (value: string) => MediaQueryCondition("max-height", value),

  orientation: (value: string) => MediaQueryCondition("orientation", value),

  aspectRatio: ((value1: number, value2?: number) =>
    MediaQueryCondition("aspect-ratio", aspectRatioString(value1, value2))) as AspectRatioFunction<string>,
  minAspectRatio: ((value1: number, value2?: number) =>
    MediaQueryCondition("min-aspect-ratio", aspectRatioString(value1, value2))) as AspectRatioFunction<string>,
  maxAspectRatio: ((value1: number, value2?: number) =>
    MediaQueryCondition("max-aspect-ratio", aspectRatioString(value1, value2))) as AspectRatioFunction<string>,

  resolution: (value: string) => MediaQueryCondition("resolution", value),
  minResolution: (value: string) => MediaQueryCondition("min-resolution", value),
  maxResolution: (value: string) => MediaQueryCondition("max-resolution", value),
};

export class SampleTheme {
  @computed
  public get global() {
    return {
      html: {
        [Selectors.This]: {
          fontSize: "16px",

          WebkitTextSizeAdjust: "100%",
          msTextSizeAdjust: "100%",
          textSizeAdjust: "100%",

          // WebkitTransform: "scale(1) !important",
        },

        ...MQ.screen(
          Cond.minWidth(px(this.minWidthForFontSizeScaling)),
          Cond.minHeight(px(this.minHeightForFontSizeScaling)),
          Cond.maxAspectRatio(this.aspectRatioBreakPoint3),
        )({
          fontSize: this.fontSizeBelowAspectRatioBreakPoint3,
        }),
        ...MQ.screen(
          Cond.minWidth(px(this.minWidthForFontSizeScaling)),
          Cond.minHeight(px(this.minHeightForFontSizeScaling)),
          Cond.minAspectRatio(this.aspectRatioBreakPoint3),
        )({
          fontSize: this.fontSizeBelowAspectRatioBreakPoint4,
        }),

        // ...MQ.screen(
        //   Cond.minWidth(px(this.minWidthForFontSizeScaling)),
        //   Cond.minHeight(px(this.minHeightForFontSizeScaling)),
        //   Cond.maxAspectRatio(this.aspectRatioBreakPoint1),
        // )({
        //   fontSize: this.fontSizeBelowAspectRatioBreakPoint1,
        // }),
        // ...MQ.screen(
        //   Cond.minWidth(px(this.minWidthForFontSizeScaling)),
        //   Cond.minHeight(px(this.minHeightForFontSizeScaling)),
        //   Cond.maxAspectRatio(this.aspectRatioBreakPoint2),
        // )({
        //   fontSize: this.fontSizeBelowAspectRatioBreakPoint2,
        // }),
        // ...MQ.screen(
        //   Cond.minWidth(px(this.minWidthForFontSizeScaling)),
        //   Cond.minHeight(px(this.minHeightForFontSizeScaling)),
        //   Cond.minAspectRatio(this.aspectRatioBreakPoint2),
        //   Cond.maxAspectRatio(this.aspectRatioBreakPoint3),
        // )({
        //   fontSize: this.fontSizeBelowAspectRatioBreakPoint3,
        // }),
        // ...MQ.screen(
        //   Cond.minWidth(px(this.minWidthForFontSizeScaling)),
        //   Cond.minHeight(px(this.minHeightForFontSizeScaling)),
        //   Cond.minAspectRatio(this.aspectRatioBreakPoint3),
        //   Cond.maxAspectRatio(this.aspectRatioBreakPoint4),
        // )({
        //   fontSize: this.fontSizeBelowAspectRatioBreakPoint4,
        // }),
        // ...MQ.screen(
        //   Cond.minWidth(px(this.minWidthForFontSizeScaling)),
        //   Cond.minHeight(px(this.minHeightForFontSizeScaling)),
        //   Cond.minAspectRatio(this.aspectRatioBreakPoint4),
        //   Cond.maxAspectRatio(this.aspectRatioBreakPoint5),
        // )({
        //   fontSize: this.fontSizeBelowAspectRatioBreakPoint5,
        // }),
        // ...MQ.screen(
        //   Cond.minWidth(px(this.minWidthForFontSizeScaling)),
        //   Cond.minHeight(px(this.minHeightForFontSizeScaling)),
        //   Cond.minAspectRatio(this.aspectRatioBreakPoint5),
        // )({
        //   fontSize: this.fontSizeAboveAspectRatioBreakPoint5,
        // }),
      },

      body: {
        lineHeight: this.baseLineHeight,

        background: repeatingLinearGradient({
          direction: "0deg",
          steps: [
            gradientStep("rgba(255,0,0,0.5)", this.scale(0)),
            gradientStep("rgba(255,0,0,0.5)", this.scale(1)),
            gradientStep("rgba(0,255,0,0.5)", this.scale(1)),
            gradientStep("rgba(0,255,0,0.5)", this.scale(2)),
          ],
        }),
      },
    };
  }

  @computed
  private get aspectRatioBreakPoint(): number {
    return (
      (this.optimalCharsPerLine + 2 * this.baseLineHeight * this.charsPerEm) /
      this.charsPerEm /
      (this.minLinesPerScreen * this.baseLineHeight)
    );
  }

  @computed
  public get fontSizes() {
    return {
      tiny: { fontSize: rem(0.6), lineHeight: this.scale(0.75) },
      small: { fontSize: rem(0.8), lineHeight: this.scale(1) },
      regular: { fontSize: rem(1), lineHeight: this.scale(1) },
      default: { fontSize: rem(1), lineHeight: this.scale(1) },
      lead: { fontSize: rem(1.2), lineHeight: this.scale(1.25) },
      large: { fontSize: rem(1.3), lineHeight: this.scale(1.5) },
      xlarge: { fontSize: rem(1.6), lineHeight: this.scale(1.75) },
      xxlarge: { fontSize: rem(2.0), lineHeight: this.scale(2) },
      display: { fontSize: rem(2.5), lineHeight: this.scale(2.5) },
      xdisplay: { fontSize: rem(3), lineHeight: this.scale(3) },
      xxdisplay: { fontSize: rem(4), lineHeight: this.scale(4) },
      xxxdisplay: { fontSize: rem(5), lineHeight: this.scale(5) },
    };
  }

  @computed
  private get minCharactersPerLine(): number {
    return this.minCharsPerLine + 2 * this.baseLineHeight * this.charsPerEm;
  }

  @computed
  private get optimalCharactersPerLine(): number {
    return this.optimalCharsPerLine + 2 * this.baseLineHeight * this.charsPerEm;
  }

  @computed
  private get maxCharactersPerLine(): number {
    return this.maxCharsPerLine + 2 * this.baseLineHeight * this.charsPerEm;
  }

  @computed
  private get minWidthForFontSizeScaling(): number {
    return (this.baseFontSize * this.optimalCharactersPerLine) / this.charsPerEm;
  }

  @computed
  private get minHeightForFontSizeScaling(): number {
    return this.baseFontSize * this.baseLineHeight * this.optimalLinesPerScreen;
  }

  @computed private get minFontSizeForWidth() {
    return vw(100 / (this.maxCharactersPerLine / this.charsPerEm));
  }
  @computed private get minFontSizeForHeight() {
    return vh(100 / (this.baseLineHeight * this.maxLinesPerScreen));
  }
  @computed private get maxFontSizeForWidth() {
    return vw(100 / (this.minCharactersPerLine / this.charsPerEm));
  }
  @computed private get maxFontSizeForHeight() {
    return vh(100 / (this.baseLineHeight * this.minLinesPerScreen));
  }
  @computed private get optimalFontSizeForWidth() {
    return vw(100 / (this.optimalCharactersPerLine / this.charsPerEm));
  }
  @computed private get optimalFontSizeForHeight() {
    return vh(100 / (this.baseLineHeight * this.optimalLinesPerScreen));
  }

  @computed private get aspectRatioBreakPoint1() {
    return this.minCharactersPerLine / this.charsPerEm / (this.maxLinesPerScreen * this.baseLineHeight);
  }
  @computed private get aspectRatioBreakPoint2() {
    return this.optimalCharactersPerLine / this.charsPerEm / (this.maxLinesPerScreen * this.baseLineHeight);
  }
  @computed private get aspectRatioBreakPoint3() {
    return this.optimalCharactersPerLine / this.charsPerEm / (this.optimalLinesPerScreen * this.baseLineHeight);
  }
  @computed private get aspectRatioBreakPoint4() {
    return this.maxCharactersPerLine / this.charsPerEm / (this.optimalLinesPerScreen * this.baseLineHeight);
  }
  @computed private get aspectRatioBreakPoint5() {
    return this.maxCharactersPerLine / this.charsPerEm / (this.minLinesPerScreen * this.baseLineHeight);
  }

  @computed private get fontSizeBelowAspectRatioBreakPoint1() {
    return this.maxFontSizeForWidth;
  }
  @computed private get fontSizeBelowAspectRatioBreakPoint2() {
    return this.minFontSizeForHeight;
  }
  @computed private get fontSizeBelowAspectRatioBreakPoint3() {
    return this.optimalFontSizeForWidth;
  }
  @computed private get fontSizeBelowAspectRatioBreakPoint4() {
    return this.optimalFontSizeForHeight;
  }
  @computed private get fontSizeBelowAspectRatioBreakPoint5() {
    return this.minFontSizeForWidth;
  }
  @computed private get fontSizeAboveAspectRatioBreakPoint5() {
    return this.maxFontSizeForHeight;
  }

  @observable
  public baseFontSize: number = 16;
  @observable
  public baseLineHeight: number = 1.5;

  @observable
  public colors = {
    black,
    white,

    danger: red,
    disabled: gray,
    info: blue,
    success: green,
    warning: yellow,
  };

  @observable
  private minCharsPerLine = 40;
  @observable
  private optimalCharsPerLine = 66;
  @observable
  private maxCharsPerLine = 80;

  @observable
  private minLinesPerScreen = 20;
  @observable
  private optimalLinesPerScreen = 30;
  @observable
  private maxLinesPerScreen = 40;

  @observable
  private charsPerEm = 2;

  @observable
  private actualBaseFontSize: number = parseFloat(window.getComputedStyle(document.body, null).fontSize!);
  @observable
  private actualBaseLineHeight: number = parseFloat(window.getComputedStyle(document.body, null).lineHeight!);
  @observable
  private actualWidth: number = window.innerWidth;
  @observable
  private actualHeight: number = window.innerHeight;

  @computed
  private get emWidth(): number {
    return this.actualWidth / this.actualBaseFontSize;
  }

  @computed
  private get emHeight(): number {
    return this.actualHeight / this.actualBaseLineHeight;
  }

  constructor() {
    window.addEventListener(
      "resize",
      action(() => {
        this.actualBaseFontSize = parseFloat(window.getComputedStyle(document.body, null).fontSize!);
        this.actualBaseLineHeight = parseFloat(window.getComputedStyle(document.body, null).lineHeight!);
        this.actualWidth = window.innerWidth;
        this.actualHeight = window.innerHeight;
      }),
    );
  }

  // prettier-ignore
  public scale = (n: number): string =>
    n === 0 ? "0rem" : n < 0 ? `-${this.scale(-n)}` : `${n * this.baseLineHeight}rem`

  public themed = (name: string) => <P extends any>(props: P): InterpolationWithTheme<this> => {
    switch (name) {
      case "Button":
        return () => ({
          [Selectors.This]: {
            alignItems: "center",
            display: "flex",
            flexDirection: "row",
            borderRadius: this.scale(1 / 8),
            paddingBottom: this.scale(1 / 2),
            paddingLeft: this.scale(1),
            paddingRight: this.scale(1),
            paddingTop: this.scale(1 / 2),
            ...this.fontSizes.small,
            background: this.colors.info,
            transition: `background-color 0.2s ease-in-out, box-shadow 0.2s ease-in-out, color 0.2s ease-in-out`,
            textAlign: `center`,
            textDecoration: `none`,
            textTransform: `uppercase`,
            overflow: `hidden`,
            whitespace: `nowrap`,
            appearance: "none",
          },
          [Selectors.Pseudo.Hover]: {},
          [Selectors.Pseudo.Focus]: {
            outlineColor: this.colors.info,
            outlineOffset: this.scale(1 / 8),
            outlineStyle: "solid",
            outlineWidth: this.scale(1 / 16),
          },
          [Selectors.Pseudo.Active]: { background: this.colors.info, boxShadow: `rgba(0,0,0,0.25) 0 0 10rem inset` },
          [Selectors.Pseudo.Disabled]: { background: this.colors.disabled, cursor: "not-allowed" },
        }); // // //
      case "Heading":
        return { fontWeight: 700 };
      case "H1":
        return this.fontSizes.xxlarge;
      case "H2":
        return this.fontSizes.xlarge;
      case "H3":
        return this.fontSizes.large;
      case "H4":
        return this.fontSizes.default;
      case "H5":
        return this.fontSizes.small;
      case "H6":
        return this.fontSizes.tiny;
      case "Figure.Caption":
        return { fontWeight: 700, marginTop: this.scale(0.5), marginBottom: this.scale(0.5) };
      default:
        return () => ({});
    }
  }
}
