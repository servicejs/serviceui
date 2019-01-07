/**
 * Gradient helper functions
 */

import { CommaSeparatedList, SpaceSeparatedList } from "./util/css-value-helpers";

namespace Gradient {
  export interface Step {
    position: string;
    color: string;
  }
  export const step = (color: string, position: string): Step => ({ position, color });

  export interface LinearProps {
    direction: string;
    steps: Gradient.Step[];
  }

  const linearHelper = (gradientName: string) =>
    ((...args: any[]) => {
      let direction: Gradient.LinearProps["direction"];
      let steps: Gradient.LinearProps["steps"];

      if (args.length === 1) {
        if (typeof args[0] === "string") {
          direction = args[0];
          steps = [];
        } else {
          direction = args[0].direction;
          steps = args[0].steps;
        }
      } else {
        direction = args[0];
        steps = args.slice(1);
      }

      return `${gradientName}(${CommaSeparatedList(
        direction,
        ...steps.map(({ position, color }) => SpaceSeparatedList(color, position)),
      )})`;
    }) as {
      (props: Gradient.LinearProps): string;
      (direction: Gradient.LinearProps["direction"], ...steps: Gradient.LinearProps["steps"]): string;
    };

  export const linear = linearHelper("linear-gradient");
  export const linearRepeating = linearHelper("repeating-linear-gradient");

  export interface RadialProps {
    steps: Gradient.Step[];
  }

  const radialHelper = (gradientName: string) =>
    ((...args: any[]) => {
      const steps: Gradient.Step[] = args.length === 1 && typeof args[0].steps !== "undefined" ? args[0].steps : args;

      return `${gradientName}(${CommaSeparatedList(
        ...steps.map(({ position, color }) => SpaceSeparatedList(color, position)),
      )})`;
    }) as {
      (props: Gradient.RadialProps): string;
      (...steps: Gradient.RadialProps["steps"]): string;
    };

  export const radial = radialHelper("radial-gradient");
  export const repeatingRadial = radialHelper("repeating-radial-gradient");
}

export default Gradient;
