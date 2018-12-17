import { CommaSeparatedList } from "../util";
import { FunctionMixin } from "./mixin";

export interface TransitionValueProps {
  property: string;
  duration: string;
  timingFunction?: string;
  delay?: string;
}

export const transitionValue = ({ property, duration, timingFunction, delay }: TransitionValueProps) =>
  [property, duration, timingFunction, delay].filter(Boolean).join(" ");

export const transitionList = CommaSeparatedList;

export interface TransitionMixinProps {
  transition?: string | undefined;
}

export const transitionMixin: FunctionMixin<TransitionMixinProps> = ({ transition }: TransitionMixinProps) => ({
  transition,
});
