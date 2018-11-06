/**
 * Base components
 */

export * from "./As";
export * from "./Box";
export * from "./Polymorphic";

// TODO

// import chroma from "chroma-js";
// import { Interpolation } from "emotion";
// import styled, { css } from "react-emotion";
// import { rem } from "../../theme";
// import { objectMap } from "../../util/record";

// /**
//  * Test
//  */

// const mixin = <A extends any[]>(
//   styleGenerator: (...args: A) => Interpolation,
// ) => (...args: A) => css(styleGenerator(...args));

// const theme = {
//   baseFontSize: 16,
//   lineHeight: 1.5,

//   blh: (n: number) => rem(n),

//   colors: {
//     white: "#FFF",
//     black: "#111",
//   },

//   radii: {
//     none: this.blh(0),
//   },
// };

// const buttonStyles = {
//   paddingTop: theme.blh(0.5),
//   paddingBottom: theme.blh(0.5),
//   paddingLeft: theme.blh(1),
//   paddingRight: theme.blh(1),
//   fontSize: rem(0.8),
//   lineHeight: theme.blh(1),
//   cursor: "pointer",
// };
// const buttonStyleClassName = css(buttonStyles);

// export const Button = styled("button")(buttonStyles);

// const white = "#FFF";
// const black = "#111";

// export const textColor = (color: string) =>
//   chroma.contrast(color, white) >= chroma.contrast(color, black)
//     ? white
//     : black;

// const filledButtonStyles = (backgroundColor: string) => ({
//   "&": {
//     backgroundColor,
//     color: textColor(backgroundColor),
//   },
//   "&:hover": {},
//   "&:focus": {},
//   "&:active": {},
// });
// const filledButtonStylesClassName = (color: string) =>
//   css(filledButtonStyles(color));

// const outlinedButtonStyles = (mainColor: string) => ({
//   "&": {
//     background: "transparent",
//     color: mainColor,
//     borderColor: mainColor,
//     borderWidth: theme.blh(1 / 16),
//     borderStyle: "solid",
//   },
//   "&:hover": {},
//   "&:focus": {},
//   "&:active": {},
// });

// const transparentButtonStyles = () => ({
//   "&": {
//     background: "transparent",
//     color: mainColor,
//     borderColor: mainColor,
//     borderWidth: theme.blh(1 / 16),
//     borderStyle: "solid",
//   },
//   "&:hover": {},
//   "&:focus": {},
//   "&:active": {},
// });

// export const borderRadiusStyles = (borderRadius: string) => ({
//   borderRadius,
// });
// export const borderRadiusStylesClassName = (borderRadius: string) =>
//   css(borderRadiusStyles(borderRadius));

// export const borderRadii = {
//   none: theme.blh(0),
//   tiny: theme.blh(1 / 16),
//   small: theme.blh(1 / 8),
//   medium: theme.blh(1 / 4),
//   large: theme.blh(1 / 2),
//   huge: theme.blh(1),
//   pill: "10000em",
//   round: "50%",
// };

// const borderRadiusStyleMap = objectMap<
//   typeof borderRadii,
//   keyof typeof borderRadii,
//   ReturnType<typeof borderRadiusStyles>
// >((key, value) => borderRadiusStyles(value))(borderRadii);

// const shapeStyleMap = {
//   square: {
//     height: "1em",
//     width: "1em",
//   },
//   minContent: {
//     width: "min-content",
//   },
//   maxContent: {
//     width: "max-content",
//   },
//   fullWidth: {
//     width: "100%",
//   },
//   n: 0,
// };

// const o1 = ObjectMap.new({ key: "value" });
// const x = o1.keyValuePairs();
// type T1 = typeof o1;
// type T2 = typeof x;
