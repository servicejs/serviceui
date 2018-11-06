/**
 * box-shadow property helpers
 */

/** Imports */

import { CommaSeparatedList } from "./util";

/** Declarations */

export interface BoxShadowProps {
  color?: string;
  x?: string;
  y?: string;
  blur?: string;
  spread?: string;
  inset?: boolean;
}

export const boxShadow = ({
  color,
  x,
  y,
  blur,
  spread,
  inset,
}: BoxShadowProps) =>
  [
    color,
    x || "0",
    y || "0",
    blur || (spread ? "0" : undefined),
    spread,
    inset ? "inset" : undefined,
  ]
    .filter(Boolean)
    .join(" ");

export const boxShadowList = CommaSeparatedList;

export const boxShadowMixin = (...values: string[]) => ({
  boxShadow: boxShadowList(...values),
});
