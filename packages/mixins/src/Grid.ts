/**
 * Grid property helpers & mixins
 */

// tslint:disable:object-literal-sort-keys

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
import { StaticFunctionMixin } from "./Mixin";
import arrayWrapper from "./util/arrayWrapper";
import tuple from "./util/tuple";

namespace Grid {
  // tslint:disable-next-line:no-empty-interface
  export interface Props<TLength = string> {
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

  export namespace Props {
    // prettier-ignore
    export const keys = tuple<[
    "inline", "child", "rows", "cols", "areas", "autoCols", "autoFlow", "autoRows", "gap", "colGap", "rowGap",
    "justifyItems", "justifyContent", "justifySelf", "alignItems", "alignContent", "alignSelf", "cs", "ce", "rs", "re",
    "area"
  ]>(
    "inline", "child", "rows", "cols", "areas", "autoCols", "autoFlow", "autoRows", "gap", "colGap", "rowGap",
    "justifyItems", "justifyContent", "justifySelf", "alignItems", "alignContent", "alignSelf", "cs", "ce", "rs", "re",
    "area",
  );

    Object.freeze(keys);
  }

  // prettier-ignore
  export const mixin: StaticFunctionMixin<Grid.Props> = ({
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

    area: theGridArea,
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
  }) => ({
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

    gridArea: theGridArea,
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

  export const area = arrayWrapper((...areas: string[][]) => areas.map((rows) => `"${rows.join(" ")}"`).join("\n"));
}

export default Grid;
