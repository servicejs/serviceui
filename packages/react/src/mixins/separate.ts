import { Mixin } from "./mixin";
import { PseudoSelectors } from "./pseudo-selectors";

export interface SeparateChildrenMixinProps {
  x?: string;
  y?: string;
}

export const separateChildrenMixin: Mixin<SeparateChildrenMixinProps> = ({ x, y }: SeparateChildrenMixinProps) => ({
  [PseudoSelectors.None]: {
    marginBottom: y && `-${y}`,
    marginLeft: x && `-${x}`,
    marginRight: x && `-${x}`,
    marginTop: y && `-${y}`,
  },
  [PseudoSelectors.children]: {
    marginBottom: y,
    marginLeft: x,
    marginRight: x,
    marginTop: y,
  },
});

export const separateChildrenXMixin: Mixin<Pick<SeparateChildrenMixinProps, "x">> = ({ x, theme }) =>
  separateChildrenMixin({ x, theme });
export const separateChildrenYMixin: Mixin<Pick<SeparateChildrenMixinProps, "y">> = ({ y, theme }) =>
  separateChildrenMixin({ y, theme });
