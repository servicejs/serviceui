/**
 * Monad
 */

/** Imports */

import { Functor, FunctorStatics, IdFunctor } from "./Functor";

/** Declarations */

/** Static methods on a Monad */
export interface MonadStatics extends FunctorStatics {
  of<T>(value: T): Monad<T, this>;
}

/** Instance methods on a Monad */
export interface Monad<T, Class extends MonadStatics>
  extends Functor<T, Class> {
  map<U>(transform: (value: T) => U): Monad<U, Class>;
  flatMap<M extends Monad<U, C>, C extends MonadStatics, U>(
    transform: (value: T) => M,
  ): M;
}

/** Identity Monad */
export class IdMonad<T> extends IdFunctor<T>
  implements Monad<T, typeof IdMonad> {
  public static of<T>(value: T) {
    return new this(value);
  }

  public readonly class = IdMonad;

  public map = <U>(transform: (value: T) => U) => {
    return this.class.of(transform(this.value));
  }

  public flatMap = <M extends Monad<U, C>, C extends MonadStatics, U>(
    transform: (value: T) => M,
  ) => transform(this.value)
}
