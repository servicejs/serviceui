import { Interpolation } from "emotion";

export const MediaQuery = (target?: string) => (...conditions: string[]) => (
  rules: Interpolation,
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
  return {
    [queryString]: rules,
  };
};

export const MediaQueryCondition = (property: string, value: string) =>
  `${property}: ${value}`;
