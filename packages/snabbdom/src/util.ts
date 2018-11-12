/**
 * Utilities
 */

export type DefaultProps<P, DP> = Pick<P, Exclude<keyof P, keyof DP>> &
  Pick<Partial<P>, Extract<keyof P, keyof DP>>;

export type ArgumentTupleType<F> = F extends (...args: infer A) => infer R
  ? A
  : never;
export type ConstructorArgumentTupleType<C> = C extends {
  new (...args: infer A): infer R;
}
  ? A
  : never;
export type ConstructorReturnType<C> = C extends {
  new (...args: infer A): infer R;
}
  ? R
  : never;
export type ConstructorFunctionType<C> = C extends {
  new (...args: infer A): infer R;
}
  ? (...args: A) => R
  : never;

// export type MustBeAssignableTo<T, U extends any = any> = U extends T
//   ? U
//   : never;

// tslint:disable-next-line:max-classes-per-file
// export class SampleSnabbdomVNode extends SnabbdomComponent {
//   public render() {
//     return h("sel");
//   }
// }

// type T1 = keyof typeof SnabbdomRenderer;

// // tslint:disable-next-line:interface-over-type-literal
// type IClass<A extends any[], R> = {
//   new (...args: A): R;
// };

// type T2 = typeof SnabbdomRenderer extends { new (...args: infer A): infer R }
//   ? A
//   : never;
// type T3 = typeof SnabbdomRenderer extends IClass<infer A, infer R> ? A : never;
// type T4 = typeof SnabbdomRenderer extends IClass<infer A, infer R> ? R : never;
// type T5 = ConstructorArgumentTupleType<typeof SnabbdomRenderer>;
// type T6 = ConstructorFunctionType<typeof SnabbdomRenderer>;

// const constructorFunction = <C extends IClass<A, R>, A extends any[], R>(
//   cls: C,
// ): ConstructorFunctionType<C> => ((...args: A): R => new cls(...args)) as any;

// const SRConstructor = constructorFunction(SnabbdomRenderer);
