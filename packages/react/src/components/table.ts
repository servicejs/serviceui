/**
 * Table components
 */

import { StyledComponent } from "@emotion/styled";

import { augment, PropsType } from "../util";
import { Box } from "./Box";

export const TableCaption = augment({
  component: Box,
  defaultProps: {
    as: "caption",
  },
  displayName: "Table.Caption",
}) as StyledComponent<PropsType<"caption">, {}, any>;

export const Table = augment({
  component: Box,
  defaultProps: {
    as: "table",
  },
  displayName: "Table",
}) as StyledComponent<PropsType<"table">, {}, any> & {
  Caption: typeof TableCaption;
};

Table.Caption = TableCaption;
