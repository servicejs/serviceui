/**
 * Gradient helper functions
 */

/** Imports */

import { CommaSeparatedList, SpaceSeparatedList } from "../util";

export interface GradientStep {
  position: string;
  color: string;
}

export const gradientStep = (
  position: string,
  color: string,
): GradientStep => ({ position, color });

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
    ...steps.map(({ position, color }) => SpaceSeparatedList(position, color)),
  )})`;

export const repeatingLinearGradient = ({
  direction,
  steps,
}: LinearGradientProps) =>
  `repeating-linear-gradient(${CommaSeparatedList(
    direction,
    ...steps.map(({ position, color }) => SpaceSeparatedList(position, color)),
  )})`;

export const radialGradient = ({ steps }: RadialGradientProps) =>
  `radial-gradient(${CommaSeparatedList(
    ...steps.map(({ position, color }) => SpaceSeparatedList(position, color)),
  )})`;

export const repeatingRadialGradient = ({ steps }: RadialGradientProps) =>
  `repeating-radial-gradient(${CommaSeparatedList(
    ...steps.map(({ position, color }) => SpaceSeparatedList(position, color)),
  )})`;
