/**
 * Color mixin
 */

import { BorderColorProperty, FillProperty, OutlineColorProperty, StrokeProperty } from "csstype";
import { selectFirstDefined } from "../util";
import { Mixin } from "./mixin";

export interface ColorShorthandProps {
  c?: string;
}

export const colorMixin: Mixin<ColorShorthandProps> = ({ c: color }) => ({ color });

export interface BorderColorShorthandProps {
  bc?: BorderColorProperty;
  bcl?: BorderColorProperty;
  bcr?: BorderColorProperty;
  bct?: BorderColorProperty;
  bcb?: BorderColorProperty;
  bcx?: BorderColorProperty;
  bcy?: BorderColorProperty;
}

export const borderColorMixin: Mixin<BorderColorShorthandProps> = ({ bc, bcl, bcr, bct, bcb, bcx, bcy }) => ({
  borderColor: bc,

  borderBottomColor: selectFirstDefined(bcb, bcy),
  borderLeftColor: selectFirstDefined(bcl, bcx),
  borderRightColor: selectFirstDefined(bcr, bcx),
  borderTopColor: selectFirstDefined(bct, bcy),
});

export interface FillShorthandProps {
  fill?: FillProperty;
}

export const fillMixin: Mixin<FillShorthandProps> = ({ fill }) => ({ fill });

export interface StrokeShorthandProps {
  stroke?: StrokeProperty;
}

export const strokeMixin: Mixin<StrokeShorthandProps> = ({ stroke }) => ({ stroke });

export interface OutlineColorShorthandProps {
  oc?: OutlineColorProperty;
}

export const outlineColorMixin: Mixin<OutlineColorShorthandProps> = ({ oc: outlineColor }) => ({ outlineColor });
