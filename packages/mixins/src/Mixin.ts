/**
 * Mixin types & helpers
 */

import { Interpolation, WithTheme } from "@emotion/styled";

/** A simple `Interpolation`. */
export type StaticMixin = Interpolation;

/** A function accepting `props` containing the `theme` and returning an `Interpolation` */
export type ThemedMixin<Theme> = (props: WithTheme<{}, Theme>) => Interpolation;
export namespace ThemedMixin {
  /** Converts a `ThemedMixin` into a `ThemedInlineMixin` */
  export const toThemedInlineMixin = <Theme>(themedMixin: ThemedMixin<Theme>): ThemedInlineMixin<Theme> => (theme) =>
    themedMixin({ theme });
}

/** A function accepting the `theme` as its argumetn and  returning an `Interpolation` for use in the `css` prop */
export type ThemedInlineMixin<Theme> = (theme: Theme) => Interpolation;
export namespace ThemedInlineMixin {
  /** Converts a `ThemedInlineMixin` into a `ThemedMixin` */
  export const toThemedMixin = <Theme>(themedInlineMixin: ThemedInlineMixin<Theme>): ThemedMixin<Theme> => ({
    theme,
  }) => themedInlineMixin(theme);
}

/** A function accepting some `props` and returning an `Interpolation */
export type StaticFunctionMixin<T = any> = (props: T) => StaticMixin;

/** A function accepting some `props` and returning a `ThemedMixin` */
export type ThemedFunctionMixin<T = any, Theme extends object = any> = (props: T) => ThemedMixin<Theme>;
export namespace ThemedFunctionMixin {
  /** Converts a `ThemedInlineFunctionMixin` into a `ThemedFunctionMixin` */
  export const toThemedInlineFunctionMixin = <T, Theme extends object>(
    themedFunctionMixin: ThemedFunctionMixin<T, Theme>,
  ): ThemedInlineFunctionMixin<T, Theme> => (props: T) => ThemedMixin.toThemedInlineMixin(themedFunctionMixin(props));
}

/** A function accepting some `props` and returning an `ThemedInlineMixin` */
export type ThemedInlineFunctionMixin<T = any, Theme extends object = any> = (props: T) => ThemedInlineMixin<Theme>;
export namespace ThemedInlineFunctionMixin {
  /** Converts a `ThemedFunctionMixin` into a `ThemedInlineFunctionMixin` */
  export const toThemedFunctionMixin = <T, Theme extends object>(
    themedInlineFunctionMixin: ThemedInlineFunctionMixin<T, Theme>,
  ): ThemedFunctionMixin<T, Theme> => (props: T) => ThemedInlineMixin.toThemedMixin(themedInlineFunctionMixin(props));
}

/**
 * A `StaticFunctionMixin`, `ThemedFunctionMixin` or a function accepting some `props` and returning either a
 * `StaticMixin` or a `ThemedMixin`.
 */
export type FunctionMixin<T = any, Theme extends object = any> =
  | StaticFunctionMixin<T>
  | ThemedFunctionMixin<T, Theme>
  | ((props: T) => StaticMixin | ThemedMixin<Theme>);

/**
 * A `StaticFunctionMixin`, `ThemedInlineFunctionMixin` or a function accepting some `props` and returning either a
 * `StaticMixin` or a `ThemedInlineMixin`.
 */
export type InlineFunctionMixin<T = any, Theme extends object = any> =
  | StaticFunctionMixin<T>
  | ThemedInlineFunctionMixin<T, Theme>
  | ((props: T) => StaticMixin | ThemedInlineMixin<Theme>);

/** A `StaticMixin`, `ThemedMixin` or `FunctionMixin` */
export type Mixin<T = any, Theme extends object = any> = StaticMixin | ThemedMixin<Theme> | FunctionMixin<T, Theme>;

/** A `StaticMixin`, `ThemedInlineMixin` or `InlineFunctionMixin` */
export type InlineMixin<T = any, Theme extends object = any> =
  | StaticMixin
  | ThemedInlineMixin<Theme>
  | InlineFunctionMixin<T, Theme>;
