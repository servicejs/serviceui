import { FunctionMixin } from "./mixin";
import Selectors from "./Selectors";

export interface SeparateChildrenMixinProps {
  x?: string;
  y?: string;
}

export const separateChildrenMixin: FunctionMixin<SeparateChildrenMixinProps> = ({ x, y }) => ({
  [Selectors.This]: {
    marginBottom: y && `-${y}`,
    marginLeft: x && `-${x}`,
    marginRight: x && `-${x}`,
    marginTop: y && `-${y}`,
  },
  [Selectors.DirectChildren()]: { marginBottom: y, marginLeft: x, marginRight: x, marginTop: y },
});

export const separateChildrenXMixin: FunctionMixin<Pick<SeparateChildrenMixinProps, "x">> = ({ x, theme }) =>
  separateChildrenMixin({ x, theme });
export const separateChildrenYMixin: FunctionMixin<Pick<SeparateChildrenMixinProps, "y">> = ({ y, theme }) =>
  separateChildrenMixin({ y, theme });
