/**
 * Table components
 */

// tslint:disable:no-shadowed-variable

import { StyledComponent } from "@emotion/styled";

import augment from "../../../util/augment";
import PropsType from "../../../util/PropsType";
import Box from "../Box";

const Table = augment({
  component: Box,
  defaultProps: {
    as: "table",
  },
  displayName: "Table",
}) as StyledComponent<PropsType<"table"> & Box.Props, {}, any> & {
  Caption: typeof TableCaption;
  Row: typeof TableRow;
  DataCell: typeof TableDataCell;
  Cell: typeof TableDataCell;
  HeaderCell: typeof TableHeaderCell;
  Head: typeof TableHead;
  Foot: typeof TableFoot;
  Body: typeof TableBody;
};

const TableCaption = augment({
  component: Box,
  defaultProps: {
    as: "caption",
  },
  displayName: "Table.Caption",
}) as StyledComponent<PropsType<"caption"> & Box.Props, {}, any>;

Table.Caption = TableCaption;

const TableRow = augment({
  component: Box,
  defaultProps: {
    as: "tr",
  },
  displayName: "Table.Row",
}) as StyledComponent<PropsType<"tr"> & Box.Props, {}, any>;

Table.Row = TableRow;

const TableDataCell = augment({
  component: Box,
  defaultProps: {
    as: "td",
  },
  displayName: "Table.DataCell",
}) as StyledComponent<PropsType<"td"> & Box.Props, {}, any>;

Table.Cell = TableDataCell;
Table.DataCell = TableDataCell;

const TableHeaderCell = augment({
  component: Box,
  defaultProps: {
    as: "th",
  },
  displayName: "Table.HeaderCell",
}) as StyledComponent<PropsType<"th"> & Box.Props, {}, any>;

Table.HeaderCell = TableHeaderCell;

const TableHead = augment({
  component: Box,
  defaultProps: {
    as: "thead",
  },
  displayName: "Table.Head",
}) as StyledComponent<PropsType<"thead"> & Box.Props, {}, any>;

Table.Head = TableHead;

const TableFoot = augment({
  component: Box,
  defaultProps: {
    as: "tfoot",
  },
  displayName: "Table.Foot",
}) as StyledComponent<PropsType<"tfoot"> & Box.Props, {}, any>;

Table.Foot = TableFoot;

const TableBody = augment({
  component: Box,
  defaultProps: {
    as: "tbody",
  },
  displayName: "Table.Body",
}) as StyledComponent<PropsType<"tbody"> & Box.Props, {}, any>;

Table.Body = TableBody;

namespace Table {
  export type Props = PropsType<typeof Table>;

  export type Caption = typeof Table.Caption;
  export namespace Caption {
    export type Props = PropsType<typeof Table.Caption>;
  }

  export type Row = typeof TableRow;
  export namespace Row {
    export type Props = PropsType<typeof Table.Row>;
  }

  export type DataCell = typeof TableDataCell;
  export namespace DataCell {
    export type Props = PropsType<typeof Table.DataCell>;
  }

  export type Cell = typeof TableDataCell;
  export namespace Cell {
    export type Props = PropsType<typeof Table.Cell>;
  }

  export type HeaderCell = typeof TableHeaderCell;
  export namespace HeaderCell {
    export type Props = PropsType<typeof Table.HeaderCell>;
  }

  export type Head = typeof TableHead;
  export namespace Head {
    export type Props = PropsType<typeof Table.Head>;
  }

  export type Foot = typeof TableFoot;
  export namespace Foot {
    export type Props = PropsType<typeof Table.Foot>;
  }

  export type Body = typeof TableBody;
  export namespace Body {
    export type Props = PropsType<typeof Table.Body>;
  }
}

export default Table;
