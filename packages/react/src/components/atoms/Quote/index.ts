/**
 * Quote
 */

// tslint:disable:no-shadowed-variable

import { StyledComponent } from "@emotion/styled";

import { themed } from "../../../theme";
import augment from "../../../util/augment";
import PropsType from "../../../util/PropsType";
import Box from "../Box";
import Text from "../Text";

const Quote = augment({
  component: Text,
  defaultProps: { as: "q" },
  displayName: "Quote",
}) as StyledComponent<PropsType<"q"> & Box.Props, {}, any> & {
  Block: typeof QuoteBlock;
};

const QuoteBlock = augment({
  component: Text.Block,
  defaultProps: { as: "blockquote" },
  displayName: "Quote.Block",
  mixin: themed("Quote"),
}) as StyledComponent<PropsType<"blockquote"> & Box.Props, {}, any>;

export namespace Quote {
  export type Props = PropsType<typeof Quote>;

  export type Block = typeof QuoteBlock;
  export namespace Block {
    export type Props = PropsType<typeof Quote.Block>;
  }
}

export default Quote;
