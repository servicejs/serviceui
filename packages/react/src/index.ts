/**
 * @service.ui/react library entrypoint
 */

export * from "./components";
export * from "./mixins";
export * from "./theme";
export * from "./util";

// Global declarations to allow the `as` prop on all JSX elements

// declare module "react" {
//   interface DOMAttributes<T> {
//     as?: keyof JSX.IntrinsicElements | React.ComponentType;
//   }
// }

// declare global {
//   namespace JSX {
//     interface IntrinsicAttributes {
//       as?: keyof IntrinsicElements | React.ComponentType;
//     }
//   }
// }
