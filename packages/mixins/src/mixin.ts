/**
 * Mixin types
 */

import { FunctionInterpolation, Interpolation, WithTheme } from "@emotion/styled";

export type FunctionMixin<T, Theme extends object = any> = FunctionInterpolation<WithTheme<T, Theme>>;
export type StaticMixin = Interpolation;
export type Mixin<T, Theme extends object = any> = StaticMixin | FunctionMixin<T, Theme>;
