/**
 * Mixin type
 */

import { Interpolation, WithTheme } from "@emotion/styled";

export type Mixin<T, Theme extends object = any> = Interpolation<
  WithTheme<T, Theme>
>;
