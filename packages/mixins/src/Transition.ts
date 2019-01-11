/**
 * Transition property helpers & mixin
 */

import { StaticFunctionMixin } from "./Mixin";
import { CommaSeparatedList } from "./util/css-value-helpers";

namespace Transition {
  export interface Props {
    property: string;
    duration: string;
    timingFunction?: string;
    delay?: string;
  }

  export const value = ({ property, duration, timingFunction, delay }: Transition.Props) =>
    [property, duration, timingFunction, delay].filter(Boolean).join(" ");

  export const list = CommaSeparatedList;

  export interface MixinProps {
    transition?: string | undefined;
  }

  export const mixin: StaticFunctionMixin<Transition.MixinProps> = ({ transition }) => ({ transition });
}

export default Transition;
