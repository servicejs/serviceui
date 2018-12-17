/**
 * Animation property helpers
 */

import { arrayWrapper, CommaSeparatedList } from "../util";
import { FunctionMixin } from "./mixin";

/**
 * Animatiomn property helper function props
 */
export interface AnimationProps {
  timingFunction?: string;
  iterationCount?: "infinite" | number;
  direction?: "normal" | "reverse" | "alternate" | "alternate-reverse";
  fillMode?: "none" | "forwards" | "backwards" | "both";
  playState?: "running" | "paused";
  name?: string;
  duration?: string;
  delay?: string;
}

/**
 * Animation property helper function
 */
export const singleAnimation = ({
  timingFunction,
  iterationCount,
  direction,
  fillMode,
  playState,
  name,
  duration,
  delay,
}: AnimationProps) =>
  [
    timingFunction,
    iterationCount ? iterationCount.toString() : undefined,
    direction,
    fillMode,
    playState,
    name || "none",
    duration || delay ? "0s" : undefined,
    delay,
  ]
    .filter(Boolean)
    .join(" ");

export const animationList = CommaSeparatedList;

export const animationProperty: {
  (animations: Array<string | AnimationProps | undefined>): string | undefined;
  (...animations: Array<string | AnimationProps | undefined>): string | undefined;
} = arrayWrapper(
  (...animations: Array<string | AnimationProps | undefined>): string | undefined => {
    // Filter out undefined values
    const filteredAnimations = animations.filter((value) => typeof value !== "undefined") as Array<
      string | AnimationProps
    >;

    // If no non-undefined values are present, return undefined / do not set the property
    if (animations.length === 0) {
      return undefined;
    }

    return animationList(
      filteredAnimations.map((value) => {
        if (typeof value === "string" || typeof value === "number") {
          return value.toString();
        }
        return singleAnimation(value);
      }),
    );
  },
);

export type ArrayOrElement<T> = T | T[];

export interface AnimationMixinProps {
  animation?: ArrayOrElement<string | AnimationProps | undefined>;
}

export const animationMixin: FunctionMixin<AnimationMixinProps> = ({ animation }) => {
  let animationPropertyValue: string | undefined;
  if (typeof animation === "undefined") {
    animationPropertyValue = undefined;
  } else if (typeof animation === "string") {
    animationPropertyValue = animation;
  } else {
    animationPropertyValue = animationProperty(Array.isArray(animation) ? animation : [animation]);
  }

  return {
    animation: animationPropertyValue,
  };
};
