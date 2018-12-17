// tslint:disable:jsdoc-format

/**
 * Constructs the tuple of type `A`
 *
 * To use specfic values for the parameters, supply the type parameter `A`, e.g.:
 *
```ts
const abc = tuple<["a", "b", "c"]>("a", "b", "c")
```
 *
 * @param values Tuple values
 */
function tuple<A extends any[]>(...values: A): A {
  return values;
}

export default tuple;
