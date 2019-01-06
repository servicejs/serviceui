/**
 * Gradient helper functions
 */

/** Imports */

import { CommaSeparatedList, SpaceSeparatedList } from "./util/css-value-helpers";

export interface GradientStep {
  position: string;
  color: string;
}

export const gradientStep = (color: string, position: string): GradientStep => ({ position, color });

export interface LinearGradientProps {
  direction: string;
  steps: GradientStep[];
}

export interface RadialGradientProps {
  steps: GradientStep[];
}

export const linearGradient = ({ direction, steps }: LinearGradientProps) =>
  `linear-gradient(${CommaSeparatedList(
    direction,
    ...steps.map(({ position, color }) => SpaceSeparatedList(color, position)),
  )})`;

export const repeatingLinearGradient = ({ direction, steps }: LinearGradientProps) =>
  `repeating-linear-gradient(${CommaSeparatedList(
    direction,
    ...steps.map(({ position, color }) => SpaceSeparatedList(color, position)),
  )})`;

export const radialGradient = ({ steps }: RadialGradientProps) =>
  `radial-gradient(${CommaSeparatedList(...steps.map(({ position, color }) => SpaceSeparatedList(color, position)))})`;

export const repeatingRadialGradient = ({ steps }: RadialGradientProps) =>
  `repeating-radial-gradient(${CommaSeparatedList(
    ...steps.map(({ position, color }) => SpaceSeparatedList(color, position)),
  )})`;
