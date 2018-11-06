import { Functor } from "./Functor";

/**
 * ObjectFunctor
 */

/** Imports */

/** Declarations */

export type KeyValueTransformFunction2<K, V, R> = (key: K, value: V) => R;
export type KeyValueTransformFunction3<K, V, R> = (
  key: K,
  value: V,
  index: number,
) => R;
export type KeyValueTransformFunction4<K, V, R> = (
  key: K,
  value: V,
  index: number,
  totalCount: number,
) => R;

export type KeyValueTransformFunction<K, V, R> =
  | KeyValueTransformFunction2<K, V, R>
  | KeyValueTransformFunction3<K, V, R>
  | KeyValueTransformFunction4<K, V, R>;

export type ObjectKeyValueTransformFunction2<
  T extends object,
  R extends { [key in keyof T]: U },
  U
> = <K extends keyof T>(key: K, value: T[K]) => R[K];
export type ObjectKeyValueTransformFunction3<
  T extends object,
  R extends { [key in keyof T]: U },
  U
> = <K extends keyof T>(key: K, value: T[K], index: number) => R[K];
export type ObjectKeyValueTransformFunction4<
  T extends object,
  R extends { [key in keyof T]: U },
  U
> = <K extends keyof T>(
  key: K,
  value: T[K],
  index: number,
  totalCount: number,
) => R[K];

export type ObjectKeyValueTransformFunction<
  T extends object,
  R extends { [key in keyof T]: U },
  U
> =
  | ObjectKeyValueTransformFunction2<T, R, U>
  | ObjectKeyValueTransformFunction3<T, R, U>
  | ObjectKeyValueTransformFunction4<T, R, U>;

export function transformMap<T extends object, R, K extends keyof T = keyof T>(
  obj: T,
  transform: KeyValueTransformFunction<K, T[K], R>,
): Record<keyof T, R>;
export function transformMap<T, R, K extends string>(
  record: Record<K, T>,
  transform: KeyValueTransformFunction<K, T, R>,
): Record<K, R>;
export function transformMap<T, R, K extends string>(
  obj: Record<K, T>,
  transform: KeyValueTransformFunction<K, T, R>,
): Record<K, R> {
  const r: { [key in K]: R } = {} as any;
  const keys = Object.keys(obj) as K[];
  const keyCount = keys.length;
  keys.forEach((key, index) => {
    const value = obj[key];
    r[key] = (transform as KeyValueTransformFunction4<K, T, R>)(
      key,
      value,
      index,
      keyCount,
    );
  });
  return r;
}

export interface KeyValueObject<K, T> {
  key: K;
  value: T;
}
export type KeyValuePair<K, T> = [K, T];

export type Keys<T extends object> = keyof T;
export type Values<T extends object> = T[keyof T];
export type CommonValues<T extends object> = T extends {
  [k in keyof T]: infer U
}
  ? U
  : never;

export class ObjectFunctor<T extends object> implements Functor<T, any> {
  public static of<T extends object>(value: T) {
    return new this(value);
  }

  public readonly class = ObjectFunctor;

  protected readonly value: T;

  protected constructor(value: T) {
    this.value = value;
  }

  public flatten = () => this.value;

  public map = <U>(transform: (value: T) => U) => {
    return this.class.of(transform(this.value) as any);
  }

  public keys = (): Array<Keys<T>> => Object.keys(this.value) as Array<Keys<T>>;

  public values = (): Array<Values<T>> => Object.values(this.value);

  public keyValuePairs = () =>
    this.keys().map((key) => ({
      key,
      value: this.value[key],
    }))

  public mapKeyValueTransform = <R extends Record<Keys<T>, U>, U>(
    transform: ObjectKeyValueTransformFunction<T, R, U>,
  ) => {
    const o: R = {} as R;
    const keys = this.keys();
    const count = keys.length;
    keys.forEach((key, index) => {
      o[key] = (transform as ObjectKeyValueTransformFunction4<T, R, U>)(
        key,
        this.value[key],
        index,
        count,
      );
    });
    return ObjectFunctor.of(o);
  }
}
