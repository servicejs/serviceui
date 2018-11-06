/**
 * Functor
 */

/** Declarations */

/** Static methods of a Functor */
export interface FunctorStatics {
  of<T extends any>(value: T): Functor<T, this>;
}

/** Instance methods of a Functor */
export interface Functor<T, Class extends FunctorStatics> {
  class: Class;
  flatten: () => T;
  map<U>(transform: (value: T) => U): Functor<U, Class>;
}

/** Identity functor class */
export class IdFunctor<T> implements Functor<T, typeof IdFunctor> {
  public static of<T>(value: T) {
    return new this(value);
  }

  public readonly class = IdFunctor;

  protected readonly value: T;

  protected constructor(value: T) {
    this.value = value;
  }

  public flatten = () => this.value;

  public map = <U>(transform: (value: T) => U) => {
    return this.class.of(transform(this.value));
  }
}
