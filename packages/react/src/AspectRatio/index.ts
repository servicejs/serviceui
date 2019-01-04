/**
 * AspectRatio container
 */

import augment from "@service-ui/mixins/util/augment";
import PropsType from "@service-ui/mixins/util/PropsType";
import Relative from "../Relative";

namespace AspectRatio {
  export interface AspectRatioProps {
    aspectRatio?: number;
  }

  export type Props = PropsType<typeof AspectRatio>;
}

const AspectRatio = augment<typeof Relative, AspectRatio.AspectRatioProps>({
  component: Relative,
  defaultProps: {
    aspectRatio: 16 / 9,
  },
  displayName: "AspectRatioContainer",
  mixin: ({ aspectRatio }: AspectRatio.AspectRatioProps) => ({
    height: 0,
    maxWidth: "100%",
    overflow: "hidden",
    paddingBottom: `${100 / aspectRatio!}%`,
  }),
});

export default AspectRatio;
