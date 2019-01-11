/**
 * Flexbox mixins
 */

// tslint:disable:object-literal-sort-keys

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
import { StaticFunctionMixin } from "./Mixin";
import tuple from "./util/tuple";

namespace Flex {
  export interface Props<TLength = string> {
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

  export namespace Props {
    export const keys = tuple<
      ["child", "inline", "direction", "wrap", "justify", "alignContent", "align", "alignSelf", "flex", "order"]
    >("child", "inline", "direction", "wrap", "justify", "alignContent", "align", "alignSelf", "flex", "order");
    Object.freeze(keys);
  }

  export const mixin: StaticFunctionMixin<Flex.Props> = ({
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
  }) => ({
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
}

export default Flex;
