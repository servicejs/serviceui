// tslint:disable:unified-signatures

import { Interpolation } from "@emotion/styled";
import { StaticFunctionMixin } from "./Mixin";
import Selectors from "./Selectors";

namespace SeparateChildren {
  export interface Props {
    x?: string;
    y?: string;
  }

  export const mixin: StaticFunctionMixin<SeparateChildren.Props> = ({ x, y }) => ({
    [Selectors.This]: {
      marginBottom: y && `-${y}`,
      marginLeft: x && `-${x}`,
      marginRight: x && `-${x}`,
      marginTop: y && `-${y}`,
    },
    [Selectors.DirectChildren()]: { marginBottom: y, marginLeft: x, marginRight: x, marginTop: y },
  });

  export const X: {
    (x: string): Interpolation<undefined>;
    (props: Pick<SeparateChildren.Props, "x">): Interpolation<undefined>;
  } = (props: string | Pick<SeparateChildren.Props, "x">) =>
    SeparateChildren.mixin(typeof props === "string" ? { x: props } : props);

  export const Y: {
    (y: string): Interpolation<undefined>;
    (props: Pick<SeparateChildren.Props, "y">): Interpolation<undefined>;
  } = (props: string | Pick<SeparateChildren.Props, "y">) =>
    SeparateChildren.mixin(typeof props === "string" ? { y: props } : props);
}

export default SeparateChildren;
