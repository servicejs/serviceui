/**
 * Flexbox mixins
 */

/** Imports */

import {
  AlignContentProperty,
  AlignItemsProperty,
  AlignSelfProperty,
  FlexDirectionProperty,
  FlexProperty,
  FlexWrapProperty,
  JustifyContentProperty,
} from "csstype";
import { Mixin } from "./mixin";

/** Declarations */

export const flexPropsKeys = Object.freeze([
  "child",
  "inline",
  "direction",
  "wrap",
  "justify",
  "alignContent",
  "align",
  "alignSelf",
  "flex",
  "order",
]);

export interface FlexProps {
  child?: boolean;
  inline?: boolean;
  direction?: FlexDirectionProperty;
  wrap?: FlexWrapProperty;
  justify?: JustifyContentProperty;
  align?: AlignItemsProperty;
  alignContent?: AlignContentProperty;

  alignSelf?: AlignSelfProperty;
  flex?: FlexProperty<string>;
  order?: number;
}

export const flexBoxMixin: Mixin<FlexProps> = ({
  child,
  inline,
  direction: flexDirection,
  alignContent,
  align: alignItems,
  alignSelf,
  flex,
  justify: justifyContent,
  order,
  wrap: flexWrap,
}: FlexProps) => ({
  display: child ? undefined : inline ? "inline-flex" : "flex",

  alignContent,
  alignItems,
  alignSelf,
  flex,
  flexDirection,
  flexWrap,
  justifyContent,
  order,
});
