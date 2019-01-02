/**
 * Color mixin
 */

import { BorderColorProperty, FillProperty, OutlineColorProperty, StrokeProperty } from "csstype";
import { selectFirstDefined } from "../util/select-first";
import { FunctionMixin } from "./mixin";

export interface ColorShorthandProps {
  c?: string;
}

export const colorMixin: FunctionMixin<ColorShorthandProps> = ({ c: color }) => ({ color });

export interface BorderColorShorthandProps {
  bc?: BorderColorProperty;
  bcl?: BorderColorProperty;
  bcr?: BorderColorProperty;
  bct?: BorderColorProperty;
  bcb?: BorderColorProperty;
  bcx?: BorderColorProperty;
  bcy?: BorderColorProperty;
}

export const borderColorMixin: FunctionMixin<BorderColorShorthandProps> = ({ bc, bcl, bcr, bct, bcb, bcx, bcy }) => ({
  borderColor: bc,

  borderBottomColor: selectFirstDefined(bcb, bcy),
  borderLeftColor: selectFirstDefined(bcl, bcx),
  borderRightColor: selectFirstDefined(bcr, bcx),
  borderTopColor: selectFirstDefined(bct, bcy),
});

export interface FillShorthandProps {
  fill?: FillProperty;
}

export const fillMixin: FunctionMixin<FillShorthandProps> = ({ fill }) => ({ fill });

export interface StrokeShorthandProps {
  stroke?: StrokeProperty;
}

export const strokeMixin: FunctionMixin<StrokeShorthandProps> = ({ stroke }) => ({ stroke });

export interface OutlineColorShorthandProps {
  oc?: OutlineColorProperty;
}

export const outlineColorMixin: FunctionMixin<OutlineColorShorthandProps> = ({ oc: outlineColor }) => ({
  outlineColor,
});
