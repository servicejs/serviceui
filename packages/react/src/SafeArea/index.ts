/**
 * SafeArea component
 */

// tslint:disable:no-shadowed-variable

import { StyledComponent } from "@emotion/styled";

import SafeAreaMixinNS from "@service-ui/mixins/SafeArea";
import augment from "@service-ui/mixins/util/augment";
import { disallowKeys } from "@service-ui/mixins/util/filter-props";
import PropsType from "@service-ui/mixins/util/PropsType";
import Box from "../Box";

/** Declarations */

const SafeArea = augment<typeof Box, SafeAreaMixinNS.MixinProps>({
  component: Box,
  mixin: SafeAreaMixinNS.mixin,
  options: {
    shouldForwardProp: disallowKeys(...SafeAreaMixinNS.mixinKeys),
  },
}) as StyledComponent<PropsType<"div"> & Box.Props, SafeAreaMixinNS.MixinProps, any> & {
  Left: typeof SafeAreaLeft;
  Right: typeof SafeAreaRight;
  Top: typeof SafeAreaTop;
  Bottom: typeof SafeAreaBottom;
  X: typeof SafeAreaX;
  Y: typeof SafeAreaY;
  All: typeof SafeAreaAll;
};

const SafeAreaLeft = augment<typeof SafeArea, {}>({
  component: SafeArea,
  defaultProps: { l: true },
  displayName: "SafeArea.Left",
});
SafeArea.Left = SafeAreaLeft;

const SafeAreaRight = augment<typeof SafeArea, {}>({
  component: SafeArea,
  defaultProps: { r: true },
  displayName: "SafeArea.Right",
});
SafeArea.Right = SafeAreaRight;

const SafeAreaTop = augment<typeof SafeArea, {}>({
  component: SafeArea,
  defaultProps: { t: true },
  displayName: "SafeArea.Top",
});
SafeArea.Top = SafeAreaTop;

const SafeAreaBottom = augment<typeof SafeArea, {}>({
  component: SafeArea,
  defaultProps: { b: true },
  displayName: "SafeArea.Bottom",
});
SafeArea.Bottom = SafeAreaBottom;

const SafeAreaX = augment<typeof SafeArea, {}>({
  component: SafeArea,
  defaultProps: { x: true },
  displayName: "SafeArea.X",
});
SafeArea.X = SafeAreaX;

const SafeAreaY = augment<typeof SafeArea, {}>({
  component: SafeArea,
  defaultProps: { y: true },
  displayName: "SafeArea.Y",
});
SafeArea.Y = SafeAreaY;

const SafeAreaAll = augment<typeof SafeArea, {}>({
  component: SafeArea,
  defaultProps: { all: true },
  displayName: "SafeArea.All",
});
SafeArea.All = SafeAreaAll;

namespace SafeArea {
  export type Props = PropsType<typeof SafeArea>;

  export type Left = typeof SafeArea.Left;
  export namespace Left {
    export type Props = PropsType<typeof SafeArea.Left>;
  }

  export type Right = typeof SafeArea.Right;
  export namespace Right {
    export type Props = PropsType<typeof SafeArea.Right>;
  }

  export type Top = typeof SafeArea.Top;
  export namespace Top {
    export type Props = PropsType<typeof SafeArea.Top>;
  }

  export type Bottom = typeof SafeArea.Bottom;
  export namespace Bottom {
    export type Props = PropsType<typeof SafeArea.Bottom>;
  }

  export type X = typeof SafeArea.X;
  export namespace X {
    export type Props = PropsType<typeof SafeArea.X>;
  }

  export type Y = typeof SafeArea.Y;
  export namespace Y {
    export type Props = PropsType<typeof SafeArea.Y>;
  }

  export type All = typeof SafeArea.All;
  export namespace All {
    export type Props = PropsType<typeof SafeArea.All>;
  }
}

export default SafeArea;
