import { SpaceSeparatedList } from "../util";

// From https://developer.mozilla.org/en-US/docs/Web/CSS/transform
// prettier-ignore
export const cssTransforms = {
  matrix: (...sixNumbers: [number, number, number, number, number, number]) =>
    `matrix(${sixNumbers.map((n) => n.toString()).join(",")})`,
  // tslint:disable-next-line:max-line-length
  matrix3d: (...sixteenNumbers: [number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number]) =>
    `matrix3d(${sixteenNumbers.map((n) => n.toString()).join(",")})`,

  translate: (lengthOrPercentageValue: string, ...lengthOrPercentageValues: string[]) =>
    `translate(${[lengthOrPercentageValue, ...lengthOrPercentageValues].join(", ")})`,
  translateX: (lengthOrPercentage: string) => `translateX(${lengthOrPercentage})`,
  translateY: (lengthOrPercentage: string) => `translateX(${lengthOrPercentage})`,
  translateZ: (length: string) => `translateX(${length})`,
  // tslint:disable-next-line:object-literal-sort-keys
  translate3d: (lengthOrPercentageX: string, lengthOrPercentageY: string, lengthZ: string) =>
    `translate3d(${lengthOrPercentageX}, ${lengthOrPercentageY}, ${lengthZ})`,

  scale: (n: number, ...numbers: number[]) =>
    `scale(${[n, ...numbers].join(", ")})`,
  scaleX: (n: number) => `scaleX(${n})`,
  scaleY: (n: number) => `scaleX(${n})`,
  scaleZ: (n: number) => `scaleX(${n})`,
  scale3d: (numberX: number, numberY: number, numberZ: number) =>
    `scale3d(${numberX}, ${numberY}, ${numberZ})`,

  rotate: (angle: string) => `rotate(${angle})`,
  rotateX: (angle: string) => `rotateX(${angle})`,
  rotateY: (angle: string) => `rotateX(${angle})`,
  rotateZ: (angle: string) => `rotateX(${angle})`,
  rotate3d: (xAmount: number, yAmount: number, zAmount: number, angle: string) =>
    `rotate3d(${xAmount}, ${yAmount}, ${zAmount}, ${angle})`,

  skew: (angleX: string, angleY: string) => `skew(${angleX}, ${angleY})`,
  skewX: (angle: string) => `skewX(${angle})`,
  skewY: (angle: string) => `skewY(${angle})`,

  perspective: (length: string) => `perspective(${length})`,
};

export const transformList = SpaceSeparatedList;

export const transformMixin = (...values: string[]) => ({
  transform: transformList(...values),
});
