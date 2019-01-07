/**
 * Theme
 */

import { InterpolationWithTheme } from "@emotion/core";

export interface Theme<Named extends string = string> {
  themed(name: Named): <P>(props: P) => InterpolationWithTheme<this>;
  themed(name: string): {};
}

export interface ThemedProps<ThemeType> {
  theme?: ThemeType;
}

/**
 * Accepts a component identifier and returns a function interpolation that uses the theme (if present)
 * @param name The identifier for injecting component styles
 */
// prettier-ignore
export const themed = (name: string) =>
  <P extends ThemedProps<ThemeType>, ThemeType extends Theme<string>>(props: P) => {
    if (!props.theme || !props.theme.themed) {
      return {};
    }
    return props.theme.themed(name)(props);
};
