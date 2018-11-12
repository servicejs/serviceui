/**
 * SnabbdomRenderer class
 */

/** Imports */

import { h, init } from "snabbdom";
import { VNode } from "snabbdom/vnode";

import attributesModule from "snabbdom/modules/attributes";
import classModule from "snabbdom/modules/class";
import datasetModule from "snabbdom/modules/dataset";
import eventlistenersModule from "snabbdom/modules/eventlisteners";
import heroModule from "snabbdom/modules/hero";
import propsModule from "snabbdom/modules/props";
import styleModule from "snabbdom/modules/style";

import { Element, isClassComponent, Node as XNode } from "./jsx";
import { DefaultProps } from "./util";

/** Declarations */

/**
 * SnabbdomRenderer props
 */
export interface SnabbdomRendererProps {
  attributes: boolean;
  class: boolean;
  dataset: boolean;
  eventlisteners: boolean;
  hero: boolean;
  props: boolean;
  style: boolean;
}

/**
 * Snabbdom Renderer
 */
export class SnabbdomRenderer {
  public static defaultProps: Required<SnabbdomRendererProps> = {
    attributes: true,
    class: true,
    dataset: true,
    eventlisteners: true,
    hero: true,
    props: true,
    style: true,
  };

  protected readonly props: SnabbdomRendererProps;
  protected patch: ReturnType<typeof init>;

  constructor(
    props: DefaultProps<
      SnabbdomRendererProps,
      typeof SnabbdomRenderer.defaultProps
    > = {},
  ) {
    this.props = {
      ...SnabbdomRenderer.defaultProps,
      ...props,
    };

    const modules: any[] = [
      this.props.attributes ? attributesModule : undefined,
      this.props.class ? classModule : undefined,
      this.props.dataset ? datasetModule : undefined,
      this.props.eventlisteners ? eventlistenersModule : undefined,
      this.props.hero ? heroModule : undefined,
      this.props.props ? propsModule : undefined,
      this.props.style ? styleModule : undefined,
    ].filter(Boolean);
    this.patch = init(modules);
  }

  protected render(node: Element): VNode | undefined;
  protected render(node: string): string;
  protected render(node: number): number;
  protected render(node: null | undefined): undefined;
  protected render(node: XNode): VNode | string | number | undefined {
    if (node === null) {
      return undefined;
    } else if (node === undefined) {
      return undefined;
    } else if (typeof node === "object") {
      return this.renderElement(node);
    } else if (typeof node === "string") {
      return node;
    } else if (typeof node === "number") {
      return node;
    } else {
      return undefined;
    }
  }

  protected renderElement(element: Element): VNode | undefined {
    const { component, key, props } = element;
    if (typeof component === "number") {
      return undefined;
    }

    if (typeof component === "string") {
      const { children = [], style, ...rest } = props;
      const renderedChildren = (children as XNode[]).map((c) =>
        this.render(c as any),
      );

      const vNode = h(component, { key, attrs: rest, style }, renderedChildren);
      // element.vNode = vNode;
      return vNode;
    }

    if (isClassComponent(component)) {
      const c = new component(props);
      const elm = c.render();
      return this.render(elm);
    } else {
      const elm = component(props);
      return this.render(elm);
    }
  }
}
