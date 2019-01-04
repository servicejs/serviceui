/**
 * ForEach component
 */

import { jsx } from "@emotion/core";
import React from "react";

namespace ForEach {
  export interface Props<T> {
    items: T[];
    key?: string | number | undefined;
    component: // 4
      | React.ComponentType<{ item: T; index: number; total: number; items: T[] }>
      // 3
      | React.ComponentType<{ item: T; index: number; total: number }>
      | React.ComponentType<{ item: T; index: number; items: T[] }>
      | React.ComponentType<{ item: T; total: number; items: T[] }>
      | React.ComponentType<{ index: number; total: number; items: T[] }>
      // 2
      | React.ComponentType<{ item: T; index: number }>
      | React.ComponentType<{ item: T; total: number }>
      | React.ComponentType<{ item: T; items: T[] }>
      | React.ComponentType<{ index: number; total: number }>
      | React.ComponentType<{ index: number; items: T[] }>
      | React.ComponentType<{ total: number; items: T[] }>
      // 1
      | React.ComponentType<{ item: T }>
      | React.ComponentType<{ index: number }>
      | React.ComponentType<{ total: number }>
      | React.ComponentType<{ items: T[] }>
      // 0
      | React.ComponentType<{}>;
    ifEmpty?: React.ComponentType;
  }

  export interface ComponentProps<T> {
    item: T;
    index: number;
    total: number;
    items: T[];
  }
}

const ForEach: React.FunctionComponent<ForEach.Props<any>> = <T>({
  items,
  key,
  component,
  ifEmpty,
}: ForEach.Props<T>) =>
  jsx(
    React.Fragment,
    { key },
    ...(items.length === 0
      ? [ifEmpty ? jsx(ifEmpty) : null]
      : items.map((item, index) =>
          jsx(component as React.ComponentType<ForEach.ComponentProps<T>>, { item, index, total: items.length, items }),
        )),
  );

export default ForEach;
