/**
 * ForEach component
 */

import { jsx } from "@emotion/core";
import { ComponentType, Fragment, FunctionComponent } from "react";

namespace ForEach {
  export interface Props<T> {
    items: T[];
    key?: string | number | undefined;
    component: // 4
      | ComponentType<{ item: T; index: number; total: number; items: T[] }>
      // 3
      | ComponentType<{ item: T; index: number; total: number }>
      | ComponentType<{ item: T; index: number; items: T[] }>
      | ComponentType<{ item: T; total: number; items: T[] }>
      | ComponentType<{ index: number; total: number; items: T[] }>
      // 2
      | ComponentType<{ item: T; index: number }>
      | ComponentType<{ item: T; total: number }>
      | ComponentType<{ item: T; items: T[] }>
      | ComponentType<{ index: number; total: number }>
      | ComponentType<{ index: number; items: T[] }>
      | ComponentType<{ total: number; items: T[] }>
      // 1
      | ComponentType<{ item: T }>
      | ComponentType<{ index: number }>
      | ComponentType<{ total: number }>
      | ComponentType<{ items: T[] }>
      // 0
      | ComponentType<{}>;
    ifEmpty?: ComponentType;
  }

  export interface ComponentProps<T> {
    item: T;
    index: number;
    total: number;
    items: T[];
  }
}

const ForEach: FunctionComponent<ForEach.Props<any>> = <T>({ items, key, component, ifEmpty }: ForEach.Props<T>) =>
  jsx(
    Fragment,
    { key },
    ...(items.length === 0
      ? [ifEmpty ? jsx(ifEmpty) : null]
      : items.map((item, index) =>
          jsx(component as ComponentType<ForEach.ComponentProps<T>>, { item, index, total: items.length, items }),
        )),
  );

export default ForEach;
