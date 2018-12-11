import { BorderStyleProperty, OutlineOffsetProperty, OutlineStyleProperty, OutlineWidthProperty } from "csstype";
import { selectFirstDefined } from "../util/select-first";
import { Mixin } from "./mixin";

export const stringOrNumberScale = (scale: (value: number) => string = (x) => `${x}px`) => (value: string | number) =>
  typeof value === "number" ? scale(value) : value;

export const maybe = <T, U>(f: (value: T) => U) => (value: T | undefined) =>
  typeof value === "undefined" ? undefined : f(value);

//
// Padding
//

export interface PaddingShorthandProps {
  pl?: string | number;
  pr?: string | number;
  pt?: string | number;
  pb?: string | number;
  px?: string | number;
  py?: string | number;
  p?: string | number;
}

export const paddingMixin: Mixin<PaddingShorthandProps> = ({
  pl,
  pr,
  pt,
  pb,
  px,
  py,
  p,

  theme,
}) => {
  const scale = maybe(stringOrNumberScale(theme.scale));
  return {
    padding: scale(p),
    paddingBottom: scale(selectFirstDefined(pb, py, p)),
    paddingLeft: scale(selectFirstDefined(pl, px, p)),
    paddingRight: scale(selectFirstDefined(pr, px, p)),
    paddingTop: scale(selectFirstDefined(pt, py, p)),
  };
};

//
// Margin
//

export interface MarginShorthandProps {
  ml?: string | number;
  mr?: string | number;
  mt?: string | number;
  mb?: string | number;
  mx?: string | number;
  my?: string | number;
  m?: string | number;
}

export const marginMixin: Mixin<MarginShorthandProps> = ({
  ml,
  mr,
  mt,
  mb,
  mx,
  my,
  m,

  theme,
}) => {
  const scale = maybe(stringOrNumberScale(theme.scale));
  return {
    margin: scale(m),
    marginBottom: scale(selectFirstDefined(mb, my)),
    marginLeft: scale(selectFirstDefined(ml, mx)),
    marginRight: scale(selectFirstDefined(mr, mx)),
    marginTop: scale(selectFirstDefined(mt, my)),
  };
};

//
// Border width
//

export interface BorderWidthShorthandProps {
  bwl?: string | number;
  bwr?: string | number;
  bwt?: string | number;
  bwb?: string | number;
  bwx?: string | number;
  bwy?: string | number;
  bw?: string | number;
}

export const borderWidthMixin: Mixin<BorderWidthShorthandProps> = ({
  bwl,
  bwr,
  bwt,
  bwb,
  bwx,
  bwy,
  bw,

  theme,
}) => {
  const scale = maybe(stringOrNumberScale(theme.scale));
  return {
    borderWidth: scale(bw),

    borderBottomWidth: scale(selectFirstDefined(bwb, bwy)),
    borderLeftWidth: scale(selectFirstDefined(bwl, bwx)),
    borderRightWidth: scale(selectFirstDefined(bwr, bwx)),
    borderTopWidth: scale(selectFirstDefined(bwt, bwy)),
  };
};

//
// Border style
//

export interface BorderStyleShorthandProps {
  bsl?: BorderStyleProperty;
  bsr?: BorderStyleProperty;
  bst?: BorderStyleProperty;
  bsb?: BorderStyleProperty;
  bsx?: BorderStyleProperty;
  bsy?: BorderStyleProperty;
  bs?: BorderStyleProperty;
}

export const borderStyleMixin: Mixin<BorderStyleShorthandProps> = ({ bsl, bsr, bst, bsb, bsx, bsy, bs }) =>
  ({
    borderStyle: bs,

    borderBottomStyle: selectFirstDefined(bsb, bsy),
    borderLeftStyle: selectFirstDefined(bsl, bsx),
    borderRightStyle: selectFirstDefined(bsr, bsx),
    borderTopStyle: selectFirstDefined(bst, bsy),
  } as any);

//
// Border radius
//

export interface BorderRadiusShorthandProps {
  br?: string | number;
  brtl?: string | number;
  brtr?: string | number;
  brbl?: string | number;
  brbr?: string | number;
}

export const borderRadiusMixin: Mixin<BorderRadiusShorthandProps> = ({ br, brtl, brtr, brbl, brbr, theme }) => {
  const scale = maybe(stringOrNumberScale(theme.scale));
  return {
    borderRadius: scale(br),

    borderBottomLeftRadius: scale(brbl),
    borderBottomRightRadius: scale(brbr),
    borderTopLeftRadius: scale(brtl),
    borderTopRightRadius: scale(brtr),
  };
};

//
// Outline width
//

export interface OutlineWidthShorthandProps<TLength = string> {
  ow?: OutlineWidthProperty<TLength>;
}

export const outlineWidthMixin: Mixin<OutlineWidthShorthandProps> = ({ ow, theme }) => ({
  outlineWidth: ow,
});

//
// Outline offset
//

export interface OutlineOffsetShorthandProps<TLength = string> {
  oo?: OutlineOffsetProperty<TLength>;
}

export const outlineOffsetMixin: Mixin<OutlineOffsetShorthandProps> = ({ oo, theme }) => ({ outlineOffset: oo });

//
// Outline style
//

export interface OutlineStyleShorthandProps {
  os?: OutlineStyleProperty;
}

export const outlineStyleMixin: Mixin<OutlineStyleShorthandProps> = ({ os, theme }) => ({
  outlineStyle: os,
});

//
// Width
//

//
// Height
//
