/**
 * Media query helpers
 */

import { AspectRatioFunction, default as aspectRatioToString } from "./util/aspectRatio";

namespace MediaQuery {
  export const Selector = (target?: string) => (...conditions: string[]) => {
    let queryString = "@media";

    if (conditions.length === 0) {
      queryString = " " + target || "all";
    } else {
      if (target) {
        queryString += " " + target + " and ";
      }
      queryString += conditions.map((c) => `(${c})`).join(" and ");
    }

    return queryString;
  };

  export const all = MediaQuery.Selector("all");
  export const print = MediaQuery.Selector("print");
  export const screen = MediaQuery.Selector("screen");
  export const speech = MediaQuery.Selector("speech");

  export const condition = (property: string, value: string) => `${property}: ${value}`;

  export namespace Condition {
    export const width = (value: string) => MediaQuery.condition("width", value);
    export const minWidth = (value: string) => MediaQuery.condition("min-width", value);
    export const maxWidth = (value: string) => MediaQuery.condition("max-width", value);

    export const height = (value: string) => MediaQuery.condition("height", value);
    export const minHeight = (value: string) => MediaQuery.condition("min-height", value);
    export const maxHeight = (value: string) => MediaQuery.condition("max-height", value);

    export const orientation = (value: string) => MediaQuery.condition("orientation", value);

    export const aspectRatio = ((value1: number, value2?: number) =>
      MediaQuery.condition("aspect-ratio", aspectRatioToString(value1, value2))) as AspectRatioFunction<string>;
    export const minAspectRatio = ((value1: number, value2?: number) =>
      MediaQuery.condition("min-aspect-ratio", aspectRatioToString(value1, value2))) as AspectRatioFunction<string>;
    export const maxAspectRatio = ((value1: number, value2?: number) =>
      MediaQuery.condition("max-aspect-ratio", aspectRatioToString(value1, value2))) as AspectRatioFunction<string>;

    export const resolution = (value: string) => MediaQuery.condition("resolution", value);
    export const minResolution = (value: string) => MediaQuery.condition("min-resolution", value);
    export const maxResolution = (value: string) => MediaQuery.condition("max-resolution", value);
  }
}

export default MediaQuery;
