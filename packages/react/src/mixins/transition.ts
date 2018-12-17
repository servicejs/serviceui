import { CommaSeparatedList } from "../util";
import { FunctionMixin } from "./mixin";

export interface TransitionProps {
  property: string;
  duration: string;
  timingFunction?: string;
  delay?: string;
}

export const transition = ({ property, duration, timingFunction, delay }: TransitionProps) =>
  [property, duration, timingFunction, delay].filter(Boolean).join(" ");

export const transitionList = CommaSeparatedList;

export interface TransitionMixinProps {
  transition?: string | undefined;
}

export const transitionMixin: FunctionMixin<TransitionMixinProps> = ({ transition: t }: TransitionMixinProps) => ({
  transition: t,
});
