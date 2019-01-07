/**
 * Animation property helpers & mixin
 */

import { StaticFunctionMixin } from "./Mixin";
import { OneOrMore } from "./util";
import arrayWrapper from "./util/arrayWrapper";
import { CommaSeparatedList } from "./util/css-value-helpers";

namespace Animation {
  /**
   * Animatiomn property helper function props
   */
  export interface Props {
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
   * Property helper for a single animation
   */
  export const one = ({
    timingFunction,
    iterationCount,
    direction,
    fillMode,
    playState,
    name,
    duration,
    delay,
  }: Props) =>
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

  export const list = CommaSeparatedList;

  export const property: {
    (animations: Array<string | Props | undefined>): string | undefined;
    (...animations: Array<string | Props | undefined>): string | undefined;
  } = arrayWrapper(
    (...animations: Array<string | Props | undefined>): string | undefined => {
      // Filter out undefined values
      const filteredAnimations = animations.filter((value) => typeof value !== "undefined") as Array<string | Props>;

      // If no non-undefined values are present, return undefined / do not set the property
      if (animations.length === 0) {
        return undefined;
      }

      return list(
        filteredAnimations.map((value) => {
          if (typeof value === "string" || typeof value === "number") {
            return value.toString();
          }
          return one(value);
        }),
      );
    },
  );

  export interface MixinProps {
    animation?: OneOrMore<string | Animation.Props | undefined>;
  }

  export const mixin: StaticFunctionMixin<Animation.MixinProps> = ({ animation }) => {
    let animationPropertyValue: string | undefined;
    if (typeof animation === "undefined") {
      animationPropertyValue = undefined;
    } else if (typeof animation === "string") {
      animationPropertyValue = animation;
    } else {
      animationPropertyValue = property(Array.isArray(animation) ? animation : [animation]);
    }

    return {
      animation: animationPropertyValue,
    };
  };
}

export default Animation;
