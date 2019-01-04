/**
 * Box
 */

import isPropValid from "@emotion/is-prop-valid";
import { StyledComponent } from "@emotion/styled";

import {
  animationMixin,
  AnimationMixinProps,
  backgroundMixin,
  BackgroundShorthandProps,
  borderColorMixin,
  BorderColorShorthandProps,
  borderRadiusMixin,
  BorderRadiusShorthandProps,
  borderStyleMixin,
  BorderStyleShorthandProps,
  borderWidthMixin,
  BorderWidthShorthandProps,
  boxShadowMixin,
  BoxShadowShorthandProps,
  colorMixin,
  ColorShorthandProps,
  heightMixin,
  HeightMixinProps,
  marginMixin,
  MarginShorthandProps,
  maxHeightMixin,
  MaxHeightMixinProps,
  maxWidthMixin,
  MaxWidthMixinProps,
  minHeightMixin,
  MinHeightMixinProps,
  minWidthMixin,
  MinWidthMixinProps,
  outlineColorMixin,
  OutlineColorShorthandProps,
  outlineOffsetMixin,
  OutlineOffsetShorthandProps,
  outlineStyleMixin,
  OutlineStyleShorthandProps,
  outlineWidthMixin,
  OutlineWidthShorthandProps,
  paddingMixin,
  PaddingShorthandProps,
  positionMixin,
  PositionMixinProps,
  positionPropertyMixin,
  PositionPropertyMixinProps,
  transformMixin,
  TransformMixinProps,
  transitionMixin,
  TransitionMixinProps,
  widthMixin,
  WidthMixinProps,
} from "../../../mixins";

import augment from "@service-ui/mixins/util/augment";
import PropsType from "@service-ui/mixins/util/PropsType";
import Empty from "../Empty";

namespace Box {
  export interface Props
    extends Empty.Props, // Background & color
      BackgroundShorthandProps,
      ColorShorthandProps, // Border
      BorderColorShorthandProps,
      BorderStyleShorthandProps,
      BorderWidthShorthandProps, // Border Radius
      BorderRadiusShorthandProps, // Outline
      OutlineColorShorthandProps,
      OutlineOffsetShorthandProps,
      OutlineStyleShorthandProps,
      OutlineWidthShorthandProps, // Box shadow
      BoxShadowShorthandProps, // Positioning
      PaddingShorthandProps,
      MarginShorthandProps,
      PositionMixinProps,
      PositionPropertyMixinProps, // Size
      MinWidthMixinProps,
      MinHeightMixinProps,
      MaxWidthMixinProps,
      MaxHeightMixinProps,
      HeightMixinProps,
      WidthMixinProps, // Transform, Transition, Animation
      TransformMixinProps,
      TransitionMixinProps,
      AnimationMixinProps {}
}

const Box = augment<typeof Empty, Box.Props>({
  component: Empty,
  defaultProps: {
    as: "div",
  },
  displayName: "Box",
  mixin: [
    // Background & color
    backgroundMixin,
    colorMixin,
    // Border
    borderColorMixin,
    borderStyleMixin,
    borderWidthMixin,
    // Border radius
    borderRadiusMixin,
    // Outline
    outlineColorMixin,
    outlineOffsetMixin,
    outlineStyleMixin,
    outlineWidthMixin,
    // Box shadow
    boxShadowMixin,
    // Positioning
    paddingMixin,
    marginMixin,
    positionMixin,
    positionPropertyMixin,
    // Size
    maxWidthMixin,
    minWidthMixin,
    maxHeightMixin,
    minHeightMixin,
    widthMixin,
    heightMixin,
    // Transform, Transition, Animation
    transformMixin,
    transitionMixin,
    animationMixin,
  ],
  options: {
    shouldForwardProp: (name) => name !== "as" && isPropValid(name),
  },
}) as StyledComponent<PropsType<"div">, Box.Props, any>;

export default Box;
