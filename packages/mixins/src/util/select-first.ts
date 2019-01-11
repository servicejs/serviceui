/**
 * Returns the first element of `values` that matches the `predicate` or
 * if none is found `defaultValue`
 *
 * @param predicate The predicate to select values
 * @param values The values to filter from
 * @param defaultValue The default value to return when no match was found
 */
export const selectFirst = <T, D = undefined>(
  predicate: (value: T) => boolean,
  values: T[],
  defaultValue?: D,
): T | D => {
  for (const value of values) {
    if (predicate(value)) {
      return value;
    }
  }
  return defaultValue as D;
};

/**
 * Selects the first defined value of `values`, if any.
 *
 * Used to select the first of a hierarchy of configuration values.
 *
 * @param values The set of optional / possibly undefined values
 */
export const selectFirstDefined = <T>(
  ...values: Array<T | undefined>
): T | undefined => selectFirst((value) => value !== undefined, values);
