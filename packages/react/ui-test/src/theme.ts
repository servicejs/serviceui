import { InterpolationWithTheme } from "@emotion/core";
import { computed, observable } from "mobx";
import { PseudoSelectors, rem } from "../../src";
import { black, blue, gray, green, red, white, yellow } from "./util/clrs.cc-colors";

export class SampleTheme {
  @computed
  public get global() {
    return { body: { lineHeight: this.baseLineHeight } };
  }
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

  // prettier-ignore
  public scale = (n: number): string =>
    n === 0 ? "0rem" : n < 0 ? `-${this.scale(-n)}` : `${n * this.baseLineHeight}rem`

  public themed = (name: string) => <P extends any>(props: P): InterpolationWithTheme<this> => {
    switch (name) {
      case "Button":
        return () => ({
          [PseudoSelectors.None]: {
            alignItems: "center",
            display: "flex",
            flexDirection: "row", //
            borderRadius: this.scale(1 / 8),
            paddingBottom: this.scale(1 / 2),
            paddingLeft: this.scale(1),
            paddingRight: this.scale(1),
            paddingTop: this.scale(1 / 2), //
            ...this.fontSizes.small, //
            background: this.colors.info,
            transition: `background-color 0.2s ease-in-out, box-shadow 0.2s ease-in-out, color 0.2s ease-in-out`,
            textAlign: `center`,
            textDecoration: `none`,
            textTransform: `uppercase`,
            overflow: `hidden`,
            whitespace: `nowrap`,
          },
          [PseudoSelectors.hover]: {},
          [PseudoSelectors.focus]: {
            outlineColor: this.colors.info,
            outlineOffset: this.scale(1 / 8),
            outlineStyle: "solid",
            outlineWidth: this.scale(1 / 16),
          },
          [PseudoSelectors.active]: { background: this.colors.info, boxShadow: `rgba(0,0,0,0.25) 0 0 10rem inset` },
          [PseudoSelectors.disabled]: { background: this.colors.disabled, cursor: "not-allowed" },
        });
      case "Heading":
        return { fontWeight: 700 };
      case "Figure.Caption":
        return { fontWeight: 700, marginTop: this.scale(0.5), marginBottom: this.scale(0.5) };
      default:
        return () => ({});
    }
  }
}
