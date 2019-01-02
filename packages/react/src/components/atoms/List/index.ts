/**
 * List
 */

// tslint:disable:no-shadowed-variable

import { StyledComponent } from "@emotion/styled";

import augment from "../../../util/augment";
import PropsType from "../../../util/PropsType";
import Box from "../Box";

const List = augment({
  component: Box,
  defaultProps: { as: "ul" },
  displayName: "List",
}) as StyledComponent<PropsType<"ul"> & Box.Props, {}, any> & {
  Item: typeof ListItem;
  Bulleted: typeof BulletedList;
  Ordered: typeof OrderedList;
};

const BulletedList = augment<typeof List, {}>({
  component: List,
  displayName: "List.Bulleted",
});

List.Bulleted = BulletedList;

const OrderedList = augment({
  component: List,
  defaultProps: { as: "ol" },
  displayName: "List.Ordered",
}) as StyledComponent<PropsType<"ol"> & Box.Props, {}, any>;

List.Ordered = OrderedList;

const ListItem = augment({
  component: Box,
  defaultProps: { as: "li" },
  displayName: "List.Item",
}) as StyledComponent<PropsType<"li"> & Box.Props, {}, any>;

List.Item = ListItem;

namespace List {
  export type Props = PropsType<typeof List>;

  export type Bulleted = typeof List.Bulleted;
  export namespace Bulleted {
    export type Props = PropsType<typeof List.Bulleted>;
  }

  export type Ordered = typeof List.Ordered;
  export namespace Ordered {
    export type Props = PropsType<typeof List.Ordered>;
  }

  export type Item = typeof List.Item;
  export namespace Item {
    export type Props = PropsType<typeof List.Item>;
  }
}

export default List;
