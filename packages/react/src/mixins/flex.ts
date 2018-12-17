/**
 * Flexbox mixins
 */

// tslint:disable:object-literal-sort-keys

/** Imports */

import {
  AlignContentProperty,
  AlignItemsProperty,
  AlignSelfProperty,
  FlexBasisProperty,
  FlexDirectionProperty,
  FlexFlowProperty,
  FlexProperty,
  FlexWrapProperty,
  GlobalsNumber,
  JustifyContentProperty,
} from "csstype";
import tuple from "../util/tuple";
import { FunctionMixin } from "./mixin";

/** Declarations */

export const flexPropsKeys = tuple<
  ["child", "inline", "direction", "wrap", "justify", "alignContent", "align", "alignSelf", "flex", "order"]
>("child", "inline", "direction", "wrap", "justify", "alignContent", "align", "alignSelf", "flex", "order");
Object.freeze(flexPropsKeys);

export interface FlexProps<TLength = string> {
  child?: boolean;
  inline?: boolean;

  direction?: FlexDirectionProperty;
  wrap?: FlexWrapProperty;
  flow?: FlexFlowProperty;
  justifyContent?: JustifyContentProperty;
  alignItems?: AlignItemsProperty;
  alignContent?: AlignContentProperty;

  alignSelf?: AlignSelfProperty;
  basis?: FlexBasisProperty<TLength>;
  flex?: FlexProperty<TLength>;
  grow?: GlobalsNumber;
  order?: number;
  shrink?: GlobalsNumber;
}

export const flexBoxMixin: FunctionMixin<FlexProps> = ({
  child,
  inline,

  direction: flexDirection,
  wrap: flexWrap,
  flow: flexFlow,
  justifyContent,
  alignItems,
  alignContent,

  alignSelf,
  basis: flexBasis,
  flex,
  grow: flexGrow,
  order,
  shrink: flexShrink,
}: FlexProps) => ({
  display: child ? undefined : inline ? "inline-flex" : "flex",

  flexFlow,
  flexDirection,
  flexWrap,

  justifyContent,
  alignItems,
  alignContent,

  alignSelf,
  order,

  flex,
  flexBasis,
  flexGrow,
  flexShrink,
});
