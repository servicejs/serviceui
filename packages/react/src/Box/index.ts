/**
 * Box
 */

import isPropValid from "@emotion/is-prop-valid";
import { StyledComponent } from "@emotion/styled";

import Animation from "@service-ui/mixins/Animation";
import Background from "@service-ui/mixins/Background";
import Border from "@service-ui/mixins/Border";
import BoxShadow from "@service-ui/mixins/BoxShadow";
import Color from "@service-ui/mixins/Color";
import Height from "@service-ui/mixins/Height";
import Margin from "@service-ui/mixins/Margin";
import MaxHeight from "@service-ui/mixins/MaxHeight";
import MaxWidth from "@service-ui/mixins/MaxWidth";
import MinHeight from "@service-ui/mixins/MinHeight";
import MinWidth from "@service-ui/mixins/MinWidth";
import { ThemedInlineFunctionMixin } from "@service-ui/mixins/Mixin";
import Outline from "@service-ui/mixins/Outline";
import Padding from "@service-ui/mixins/Padding";
import Position from "@service-ui/mixins/Position";
import TBLR from "@service-ui/mixins/TBLR";
import Transform from "@service-ui/mixins/Transform";
import Transition from "@service-ui/mixins/Transition";
import Width from "@service-ui/mixins/Width";

import augment from "@service-ui/mixins/util/augment";
import PropsType from "@service-ui/mixins/util/PropsType";

import Empty from "../Empty";

namespace Box {
  export interface Props
    extends Empty.Props,
      // Background & color
      Background.MixinProps,
      Color.MixinProps,
      // Border
      Border.Color.MixinProps,
      Border.Style.MixinProps,
      Border.Width.MixinProps,
      Border.Radius.MixinProps,
      // Outline
      Outline.Color.MixinProps,
      Outline.Offset.MixinProps,
      Outline.Style.MixinProps,
      Outline.Width.MixinProps,
      // Box shadow
      BoxShadow.MixinProps,
      // Positioning
      Padding.MixinProps,
      Margin.MixinProps,
      Position.MixinProps,
      TBLR.MixinProps,
      // Size
      MinWidth.MixinProps,
      MinHeight.MixinProps,
      MaxWidth.MixinProps,
      MaxHeight.MixinProps,
      Height.MixinProps,
      Width.MixinProps,
      // Transform, Transition, Animation
      Transform.MixinProps,
      Transition.MixinProps,
      Animation.MixinProps {}
}

const Box = augment<typeof Empty, Box.Props>({
  component: Empty,
  defaultProps: {
    as: "div",
  },
  displayName: "Box",
  mixin: [
    // Background & color
    Background.mixin,
    Color.mixin,
    // Border
    Border.Color.mixin,
    Border.Style.mixin,
    ThemedInlineFunctionMixin.toThemedFunctionMixin(Border.Width.mixin),
    // Border radius
    ThemedInlineFunctionMixin.toThemedFunctionMixin(Border.Radius.mixin),
    // Outline
    Outline.Color.mixin,
    ThemedInlineFunctionMixin.toThemedFunctionMixin(Outline.Offset.mixin),
    Outline.Style.mixin,
    ThemedInlineFunctionMixin.toThemedFunctionMixin(Outline.Width.mixin),
    // Box shadow
    BoxShadow.mixin,
    // Positioning
    ThemedInlineFunctionMixin.toThemedFunctionMixin(Padding.mixin),
    ThemedInlineFunctionMixin.toThemedFunctionMixin(Margin.mixin),
    Position.mixin,
    ThemedInlineFunctionMixin.toThemedFunctionMixin(TBLR.mixin),
    // Size
    ThemedInlineFunctionMixin.toThemedFunctionMixin(MaxWidth.mixin),
    ThemedInlineFunctionMixin.toThemedFunctionMixin(MinWidth.mixin),
    ThemedInlineFunctionMixin.toThemedFunctionMixin(MaxHeight.mixin),
    ThemedInlineFunctionMixin.toThemedFunctionMixin(MinHeight.mixin),
    ThemedInlineFunctionMixin.toThemedFunctionMixin(Width.mixin),
    ThemedInlineFunctionMixin.toThemedFunctionMixin(Height.mixin),
    // Transform, Transition, Animation
    Transform.mixin,
    Transition.mixin,
    Animation.mixin,
  ],
  options: {
    shouldForwardProp: (name) => name !== "as" && isPropValid(name),
  },
}) as StyledComponent<PropsType<"div">, Box.Props, any>;

export default Box;
