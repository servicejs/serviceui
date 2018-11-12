/**
 * Snabbdom JSX types
 */

export interface ClassComponent<P extends object> {
  render(): Element;
}

export interface ClassComponentType<P extends object> {
  classComponent: true;
  new (props: P): ClassComponent<P>;
}

export type CC<P extends object> = ClassComponentType<P>;

export type StatelessFunctionalComponent<P extends object> = (
  props: P,
) => Element;
export type SFC<P extends object> = StatelessFunctionalComponent<P>;

export type ComponentType<P extends object> = ClassComponentType<P> | SFC<P>;

export function isClassComponent<P extends object>(
  component: ComponentType<P>,
): component is ClassComponentType<P> {
  return (component as ClassComponentType<P>).classComponent;
}

export interface IntrinsicElements {
  [k: string]: any;
  // div: {};
}

export interface InternalProps {
  key?: number | string | undefined;
}

export interface ComponentElement<P extends object> extends InternalProps {
  component: ComponentType<P>;
  props: P;
}

export interface IntrinsicElement<K extends keyof IntrinsicElements>
  extends InternalProps {
  component: K;
  props: IntrinsicElements[K];
}

export type Element =
  | ComponentElement<any>
  | IntrinsicElement<keyof IntrinsicElements>;

export type Node = Element | string | number | null | undefined;
export type NodeArray = Node | Node[];

export function createElement<K extends keyof IntrinsicElements>(
  component: K,
  props?: IntrinsicElements[K],
  ...children: Node[]
): Element;
export function createElement<P extends object>(
  component: ComponentType<P>,
  props?: P,
  ...children: Node[]
): Element;
export function createElement(
  component: ComponentType<any> | keyof IntrinsicElements,
  props: any = {},
  ...children: Node[]
): Element {
  props = props || {};
  if (children.length > 0 && !(props as any).children) {
    (props as any).children = children;
  }

  const { key, ...rest } = props;

  return {
    component,
    key,
    props: rest,
  } as any;
}

export const h = createElement;
// tslint:disable-next-line:no-namespace
export namespace h {
  type _IntrinsicElements = IntrinsicElements;
  type _Element = Element;
  export namespace JSX {
    export type Element = _Element;
    export type IntrinsicElements = _IntrinsicElements;

    export interface ElementClass {
      render: any;
    }
    export interface ElementChildrenAttribute {
      children: {}; // specify children name to use
    }
  }
}
