import { PseudoSelectors } from "./pseudo-selectors";

export interface SeparateChildrenMixinProps {
  x?: string;
  y?: string;
}

export const separateChildrenMixin = ({ x, y }: SeparateChildrenMixinProps) => ({
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

export const separateChildrenXMixin = (x: string) => separateChildrenMixin({ x });
export const separateChildrenYMixin = (y: string) => separateChildrenMixin({ y });
