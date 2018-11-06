/**
 * Animation property helpers
 */

import { CommaSeparatedList } from "./util";

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

export const animation = ({
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
