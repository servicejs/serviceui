/**
 * Form
 */

import { StyledComponent } from "@emotion/styled";
import augment from "../../../util/augment";
import PropsType from "../../../util/PropsType";
import Box from "../Box";

const Form = augment({
  component: Box,
  defaultProps: {
    as: "form",
  },
  displayName: "Form",
}) as StyledComponent<PropsType<"form"> & Box.Props, {}, any>;

namespace Form {
  export type Props = PropsType<typeof Form>;
}

export default Form;
