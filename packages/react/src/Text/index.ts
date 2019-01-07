/**
 * Text
 */

// tslint:disable:no-shadowed-variable

import { StyledComponent } from "@emotion/styled";
import { ThemedProps } from "@service-ui/mixins/Theme";
import augment from "@service-ui/mixins/util/augment";
import PropsType from "@service-ui/mixins/util/PropsType";

import Box from "../Box";

const Text = augment({
  component: Box,
  defaultProps: {
    as: "span",
  },
  displayName: "Text",
  mixin: {
    display: "inline-block",
  },
}) as StyledComponent<PropsType<"span"> & Box.Props, {}, any> & {
  Block: typeof TextBlock;
};

const TextBlock = augment<typeof Text, {}>({
  component: Text,
  displayName: "Text.Block",
  mixin: ({ theme }: ThemedProps<any>) => ({
    display: "block",
    marginBottom: theme.scale(1),
    marginTop: theme.scale(1),
  }),
});

Text.Block = TextBlock;

namespace Text {
  export type Props = PropsType<typeof Text>;

  export type Block = PropsType<typeof Text.Block>;
  export namespace Block {
    export type Props = PropsType<typeof Text.Block>;
  }
}

export default Text;
