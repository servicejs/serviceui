import { InterpolationWithTheme } from "@emotion/core";

export const MediaQuery = (target?: string) => (...conditions: string[]) => <
  ThemeType extends object = any
>(
  rules: InterpolationWithTheme<ThemeType>,
) => {
  let queryString = "@media";

  if (conditions.length === 0) {
    queryString = " " + target || "all";
  } else {
    if (target) {
      queryString += " " + target + " and ";
    }
    queryString += conditions
      .map((condition) => `(${condition})`)
      .join(" and ");
  }
  return { [queryString]: rules };
};

export const MediaQueryCondition = (property: string, value: string) =>
  `${property}: ${value}`;
