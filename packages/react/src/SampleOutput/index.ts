/**
 * SampleOutput
 */

// tslint:disable:no-shadowed-variable

import { StyledComponent } from "@emotion/styled";

import { themed } from "@service-ui/mixins/Theme";
import augment from "@service-ui/mixins/util/augment";
import PropsType from "@service-ui/mixins/util/PropsType";
import Box from "../Box";
import Text from "../Text";

const SampleOutput = augment({
  component: Text,
  defaultProps: { as: "samp" },
  displayName: "SampleOutput",
}) as StyledComponent<PropsType<"samp"> & Box.Props, {}, any> & {
  Block: typeof SampleOutputBlock;
};

const SampleOutputBlock = augment({
  component: Text.Block,
  defaultProps: { as: "samp" },
  displayName: "SampleOutput",
  mixin: themed("SampleOutput"),
}) as StyledComponent<PropsType<"samp"> & Box.Props, {}, any>;

SampleOutput.Block = SampleOutputBlock;

export namespace SampleOutput {
  export type Props = PropsType<typeof SampleOutput>;

  export type Block = typeof SampleOutput.Block;
  export namespace Block {
    export type Props = PropsType<typeof SampleOutput.Block>;
  }
}

export default SampleOutput;
