/**
 * Transform property helpers & mixin
 */

import { StaticFunctionMixin } from "./Mixin";
import { SpaceSeparatedList } from "./util/css-value-helpers";

// prettier-ignore
namespace Transform {
  // From https://developer.mozilla.org/en-US/docs/Web/CSS/transform

  export const Matrix = (...sixNumbers: [number, number, number, number, number, number]) =>
    `matrix(${sixNumbers.map((n) => n.toString()).join(",")})`;
  // tslint:disable-next-line:max-line-length
  export const  matrix3d = (...sixteenNumbers: [number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number]) =>
    `matrix3d(${sixteenNumbers.map((n) => n.toString()).join(",")})`;

  export const Translate = (lengthOrPercentageValue: string, ...lengthOrPercentageValues: string[]) =>
    `translate(${[lengthOrPercentageValue, ...lengthOrPercentageValues].join(", ")})`;
  export const TranslateX = (lengthOrPercentage: string) => `translateX(${lengthOrPercentage})`;
  export const TranslateY = (lengthOrPercentage: string) => `translateX(${lengthOrPercentage})`;
  export const TranslateZ = (length: string) => `translateX(${length})`;
  // tslint:disable-next-line:object-literal-sort-keys
  export const Translate3d = (lengthOrPercentageX: string, lengthOrPercentageY: string, lengthZ: string) =>
    `translate3d(${lengthOrPercentageX}, ${lengthOrPercentageY}, ${lengthZ})`;

  export const Scale = (n: number, ...numbers: number[]) =>
    `scale(${[n, ...numbers].join(", ")})`;
  export const ScaleX = (n: number) => `scaleX(${n})`;
  export const ScaleY = (n: number) => `scaleX(${n})`;
  export const ScaleZ = (n: number) => `scaleX(${n})`;
  export const Scale3d = (numberX: number, numberY: number, numberZ: number) =>
    `scale3d(${numberX}, ${numberY}, ${numberZ})`;

  export const Rotate = (angle: string) => `rotate(${angle})`;
  export const RotateX = (angle: string) => `rotateX(${angle})`;
  export const RotateY = (angle: string) => `rotateX(${angle})`;
  export const RotateZ = (angle: string) => `rotateX(${angle})`;
  export const Rotate3d = (xAmount: number, yAmount: number, zAmount: number, angle: string) =>
    `rotate3d(${xAmount}, ${yAmount}, ${zAmount}, ${angle})`;

  export const Skew = (angleX: string, angleY: string) => `skew(${angleX}, ${angleY})`;
  export const SkewX = (angle: string) => `skewX(${angle})`;
  export const SkewY = (angle: string) => `skewY(${angle})`;

  export const Perspective = (length: string) => `perspective(${length})`;

  export const list = SpaceSeparatedList;

  export interface MixinProps {
    transform?: string;
  }

  export const mixin: StaticFunctionMixin<Transform.MixinProps> = ({ transform }) => ({ transform });
}

export default Transform;
