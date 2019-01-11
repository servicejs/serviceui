/**
 * Flex
 */

// tslint:disable:no-shadowed-variable

import { StyledComponent } from "@emotion/styled";
import FlexMixinNS from "@service-ui/mixins/Flex";
import augment from "@service-ui/mixins/util/augment";
import { disallowKeys } from "@service-ui/mixins/util/filter-props";
import PropsType from "@service-ui/mixins/util/PropsType";
import Box from "../Box";

const Flex = augment<typeof Box, FlexMixinNS.Props>({
  component: Box,
  displayName: "Flex",
  mixin: FlexMixinNS.mixin,
  options: {
    shouldForwardProp: disallowKeys(...FlexMixinNS.Props.keys),
  },
}) as StyledComponent<PropsType<"div"> & Box.Props, FlexMixinNS.Props, any> & {
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
