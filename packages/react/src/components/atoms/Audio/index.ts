/**
 * Audio
 */

import { StyledComponent } from "@emotion/styled";

import { augment } from "../../../util/augment";
import PropsType from "../../../util/PropsType";
import Box from "../Box";

const Audio = augment({
  component: Box,
  defaultProps: {
    as: "audio",
  },
  displayName: "Audio",
}) as StyledComponent<PropsType<"audio"> & Box.Props, {}, any>;

namespace Audio {
  export type Props = PropsType<typeof Audio>;
}

export default Audio;
