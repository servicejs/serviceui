/**
 * BlockQuote component
 */

/** Imports */

import defaultProps from "recompose/defaultProps";
import mapProps from "recompose/mapProps";
import setDisplayName from "recompose/setDisplayName";
import { themed } from "../../theme";
import { IdMonad, PropsType, RCT, withStyle } from "../../util";
import { CoreProps } from "../base";
import { Text, TextProps } from "./Text";

/** Declarations */

interface HeadingProps extends CoreProps, PropsType<"h1"> {
  level?: number;
}

/**
 * Heading (`<h1>` to `<h6>`)
 */
export const Heading = IdMonad.of(Text)
  .map(themed("Heading"))
  .map(
    mapProps<TextProps, HeadingProps>(
      ({ level, ...props }: HeadingProps) =>
        ({
          as:
            level && Number.isInteger(level) && level >= 1 && level <= 6
              ? `h${level}`
              : "p",
          ...props,
        } as TextProps),
    ),
  )
  .map(setDisplayName("Heading"))
  .flatten() as RCT<HeadingProps>;

export const H1 = IdMonad.of(Heading)
  .map(defaultProps<HeadingProps>({ level: 1 }))
  .map(themed("H1"))
  .map(setDisplayName("H1"))
  .flatten() as RCT<HeadingProps>;
export const H2 = IdMonad.of(Heading)
  .map(defaultProps<HeadingProps>({ level: 2 }))
  .map(themed("H2"))
  .map(setDisplayName("H2"))
  .flatten() as RCT<HeadingProps>;
export const H3 = IdMonad.of(Heading)
  .map(defaultProps<HeadingProps>({ level: 3 }))
  .map(themed("H3"))
  .map(setDisplayName("H3"))
  .flatten() as RCT<HeadingProps>;
export const H4 = IdMonad.of(Heading)
  .map(defaultProps<HeadingProps>({ level: 4 }))
  .map(themed("H4"))
  .map(setDisplayName("H4"))
  .flatten() as RCT<HeadingProps>;
export const H5 = IdMonad.of(Heading)
  .map(defaultProps<HeadingProps>({ level: 5 }))
  .map(themed("H5"))
  .map(setDisplayName("H5"))
  .flatten() as RCT<HeadingProps>;
export const H6 = IdMonad.of(Heading)
  .map(defaultProps<HeadingProps>({ level: 6 }))
  .map(themed("H6"))
  .map(setDisplayName("H6"))
  .flatten() as RCT<HeadingProps>;
