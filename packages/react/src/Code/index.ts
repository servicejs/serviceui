/**
 * Code
 */

// tslint:disable:no-shadowed-variable

import { StyledComponent } from "@emotion/styled";

import { themed } from "@service-ui/mixins/Theme";
import augment from "@service-ui/mixins/util/augment";
import PropsType from "@service-ui/mixins/util/PropsType";
import Box from "../Box";
import Text from "../Text";

const Code = augment({
  component: Text,
  defaultProps: { as: "code" },
  displayName: "Code",
  mixin: {
    fontFamily: "monospace",
  },
}) as StyledComponent<PropsType<"code"> & Box.Props, {}, any> & {
  Block: typeof CodeBlock;
};

const CodeBlock = augment({
  component: Text.Block,
  defaultProps: { as: "code" },
  displayName: "Code.Block",
  mixin: themed("Code"),
}) as StyledComponent<PropsType<"code"> & Box.Props, {}, any>;

Code.Block = CodeBlock;

namespace Code {
  export type Props = PropsType<typeof Code>;

  export type Block = typeof Code.Block;
  export namespace Block {
    export type Props = PropsType<typeof Code.Block>;
  }
}

export default Code;
