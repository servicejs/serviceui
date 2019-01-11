/**
 * `Omit<P, K>` removes the keys in K from type T
 */
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;

/**
 * `inList` accepts a list of `values` and returns a function that accepts
 * a `value` and returns `true` if it is in the list
 *
 * @param values The values to allow
 */
export const inList = <A extends T[], T>(...values: A) => (value: T) =>
  values.indexOf(value) > -1;

/**
 * `inList` accepts a list of `values` and returns a function that accepts
 * a `value` and returns `true` if it is not in the list
 *
 * @param values The values to disallow
 */
export const notInList = <A extends T[], T>(...values: A) => (value: T) =>
  values.indexOf(value) === -1;

/**
 * `allowKeys` accepts a list of allowed `keys` of `P` and returns a function
 * that accepts a `key` and returns `true` if it is in the list
 *
 * @param values The keys to allow
 */
export const allowKeys = <
  P extends object = { [k: string]: any },
  K extends keyof P = keyof P,
  KAll extends K[] = K[]
>(
  ...keys: KAll
) => inList<KAll, keyof P>(...keys);

/**
 * `disallowKeys` accepts a list of allowed `keys` of `P` and returns a function
 * that accepts a `key` and returns `true` if it is in the list
 *
 * @param values The keys to disallow
 */
export const disallowKeys = <
  P extends object = { [k: string]: any },
  K extends keyof P = keyof P,
  KAll extends K[] = K[]
>(
  ...keys: KAll
) => notInList<KAll, keyof P>(...keys);

/**
 * Accepts a list of keys `K` of `P` to pick and returns a function that
 * accepts a `P` object and returns an object with the picked keys
 */
export const pickKeys = <
  P extends object,
  K extends keyof P = keyof P,
  KAll extends K[] = K[]
>(
  ...keys: KAll
) => (props: P): Pick<P, K> => {
  const allowKeyFilter = allowKeys<P, K>(...keys);
  const o = {} as Pick<P, K>;
  const existingKeys = Object.keys(props) as Array<keyof P>;
  for (const key of existingKeys) {
    if (allowKeyFilter(key)) {
      o[key as K] = props[key as K];
    }
  }
  return o;
};

/**
 * Accepts a list of keys `K` of `P` to pluck/omit and returns a function that
 * accepts a `P` object and returns an object with the plucked keys removed
 */
export const pluckKeys = <
  P extends object,
  K extends keyof P = keyof P,
  KAll extends K[] = K[]
>(
  ...keys: KAll
) => (props: P): Omit<P, K> => {
  const omitKeyFilter = disallowKeys<P, K>(...keys);
  const o = {} as Omit<P, K>;
  const existingKeys = Object.keys(props) as Array<keyof P>;
  for (const key of existingKeys) {
    if (!omitKeyFilter(key)) {
      o[key as Exclude<keyof P, K>] = props[key as Exclude<keyof P, K>];
    }
  }
  return o;
};
