export const isNull = (value: any): value is null => value === null;
export const isUndefined = (value: any): value is undefined =>
  value === undefined;
export const isNullOrUndefined = (value: any): value is null | undefined =>
  isNull(value) || isUndefined(value);
export const isEmptyObject = (value: any): value is {} =>
  typeof value === "object" && Object.keys(value).length === 0;
