/**
 * Heading component
 */

/** Imports */

import { augment } from "../../util/augment";
import { EmotionPropsType } from "../../util/PropsType";
import { CoreProps } from "../base";
import { Text, TextProps } from "./Text";

/** Declarations */

export interface HeadingProps extends CoreProps, EmotionPropsType<"h1"> {}

/**
 * Heading
 */
export const Heading = augment<HeadingProps, TextProps>({
  defaultProps: { as: "p" },
  displayName: "Heading",
})(Text);

export const H1 = augment<HeadingProps, HeadingProps>({
  defaultProps: { as: "h1" },
  displayName: "H1",
})(Heading);

export const H2 = augment<HeadingProps, HeadingProps>({
  defaultProps: { as: "h2" },
  displayName: "H2",
})(Heading);

export const H3 = augment<HeadingProps, HeadingProps>({
  defaultProps: { as: "h3" },
  displayName: "H3",
})(Heading);

export const H4 = augment<HeadingProps, HeadingProps>({
  defaultProps: { as: "h4" },
  displayName: "H4",
})(Heading);

export const H5 = augment<HeadingProps, HeadingProps>({
  defaultProps: { as: "h5" },
  displayName: "H5",
})(Heading);

export const H6 = augment<HeadingProps, HeadingProps>({
  defaultProps: { as: "h6" },
  displayName: "H6",
})(Heading);
