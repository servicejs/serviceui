/**
 * Grid mixins
 */

// tslint:disable:object-literal-sort-keys

/** Imports */

import {
  AlignContentProperty,
  AlignItemsProperty,
  AlignSelfProperty,
  GridAreaProperty,
  GridAutoColumnsProperty,
  GridAutoFlowProperty,
  GridAutoRowsProperty,
  GridColumnEndProperty,
  GridColumnGapProperty,
  GridColumnStartProperty,
  GridGapProperty,
  GridRowEndProperty,
  GridRowGapProperty,
  GridRowStartProperty,
  GridTemplateAreasProperty,
  GridTemplateColumnsProperty,
  GridTemplateRowsProperty,
  JustifyContentProperty,
  JustifyItemsProperty,
  JustifySelfProperty,
} from "csstype";
import { Mixin } from "./mixin";

// tslint:disable-next-line:no-empty-interface
export interface GridProps<TLength = string> {
  inline?: boolean;
  child?: boolean;

  rows?: number | GridTemplateRowsProperty<TLength>;
  cols?: number | GridTemplateColumnsProperty<TLength>;
  areas?: GridTemplateAreasProperty;

  autoCols?: GridAutoColumnsProperty<TLength>;
  autoFlow?: GridAutoFlowProperty;
  autoRows?: GridAutoRowsProperty<TLength>;

  gap?: GridGapProperty<TLength>;
  colGap?: GridColumnGapProperty<TLength>;
  rowGap?: GridRowGapProperty<TLength>;

  justifyItems?: JustifyItemsProperty;
  justifyContent?: JustifyContentProperty;
  justifySelf?: JustifySelfProperty;
  alignItems?: AlignItemsProperty;
  alignContent?: AlignContentProperty;
  alignSelf?: AlignSelfProperty;

  cs?: GridColumnStartProperty;
  ce?: GridColumnEndProperty;
  rs?: GridRowStartProperty;
  re?: GridRowEndProperty;
  area?: GridAreaProperty;
}

export const gridPropsKeys = Object.freeze([
  "inline",
  "child",
  "rows",
  "cols",
  "areas",
  "autoCols",
  "autoFlow",
  "autoRows",
  "gap",
  "colGap",
  "rowGap",
  "justifyItems",
  "justifyContent",
  "justifySelf",
  "alignItems",
  "alignContent",
  "alignSelf",
  "cs",
  "ce",
  "rs",
  "re",
  "area",
]);

// prettier-ignore
export const gridMixin: Mixin<GridProps> = ({
  inline,
  child,
  rows,
  cols,
  areas: gridTemplateAreas,
  autoCols: gridAutoColumns,
  autoFlow: gridAutoFlow,
  autoRows: gridAutoRows,
  gap: gridGap,
  colGap: gridColumnGap,
  rowGap: gridRowGap,

  area: gridArea,
  ce: gridColumnEnd,
  cs: gridColumnStart,
  re: gridRowEnd,
  rs: gridRowStart,

  justifyItems,
  justifyContent,
  justifySelf,
  alignItems,
  alignContent,
  alignSelf,
}: GridProps) => ({
  display: child ? undefined : inline ? "inline-grid" : "grid",

  gridTemplateAreas,
  gridTemplateColumns: typeof cols === "number" ? `repeat(${cols}, auto)` : cols,
  gridTemplateRows: typeof rows === "number" ? `repeat(${rows}, auto)` : rows,

  gridAutoColumns,
  gridAutoFlow,
  gridAutoRows,

  gridGap,
  gridColumnGap,
  gridRowGap,

  gridArea,
  gridColumnStart,
  gridColumnEnd,
  gridRowStart,
  gridRowEnd,

  justifyItems,
  justifyContent,
  justifySelf,
  alignItems,
  alignContent,
  alignSelf,
});
