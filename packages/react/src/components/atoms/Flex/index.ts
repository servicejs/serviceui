/**
 * Flex
 */

// tslint:disable:no-shadowed-variable

import { StyledComponent } from "@emotion/styled";
import { flexBoxMixin, FlexProps, flexPropsKeys } from "../../../mixins/flex";
import augment from "../../../util/augment";
import { disallowKeys } from "../../../util/filter-props";
import PropsType from "../../../util/PropsType";
import Box from "../Box";

const Flex = augment<typeof Box, FlexProps>({
  component: Box,
  displayName: "Flex",
  mixin: flexBoxMixin,
  options: {
    shouldForwardProp: disallowKeys(...flexPropsKeys),
  },
}) as StyledComponent<PropsType<"div"> & Box.Props, FlexProps, any> & {
  Row: typeof Row;
  Column: typeof Column;
  WrappingRow: typeof WrappingRow;
};

const Column = augment<typeof Flex, {}>({
  component: Flex,
  defaultProps: { direction: "column" },
  displayName: "Flex.Column",
});
Flex.Column = Column;

const Row = augment<typeof Flex, {}>({
  component: Flex,
  defaultProps: { alignItems: "center", direction: "row" },
  displayName: "Flex.Row",
});
Flex.Row = Row;

const WrappingRow = augment<typeof Flex.Row, {}>({
  component: Flex.Row,
  defaultProps: { wrap: "wrap" },
  displayName: "Flex.WrappingRow",
});
Flex.WrappingRow = WrappingRow;

namespace Flex {
  export type Props = PropsType<typeof Flex>;

  export type Column = typeof Flex.Column;
  export namespace Column {
    export type Props = PropsType<typeof Flex.Column>;
  }

  export type Row = typeof Flex.Row;
  export namespace Row {
    export type Props = PropsType<typeof Flex.Row>;
  }

  export type WrappingRow = typeof Flex.WrappingRow;
  export namespace WrappingRow {
    export type Props = PropsType<typeof Flex.WrappingRow>;
  }
}

export default Flex;
