/**
 * Component
 */

/** Imports */

import { Element } from "./jsx";

/** Exports */

// tslint:disable-next-line:max-classes-per-file
export abstract class Component<P extends object = {}, S extends object = {}> {
  /**
   * @internal
   */
  public static readonly classComponent = true;

  public static defaultProps?: any;

  protected props: P;
  protected state: S;

  private element?: Element;

  constructor(props: P) {
    this.props = {
      ...(props as any),
      ...((this as any).defaultProps || {}),
    } as P;
    this.state = this.computeInitialStateFromProps(this.props);
  }

  public abstract render(): Element;

  /**
   * @internal
   */
  public injectElement(element: Element) {
    this.element = element;
  }

  /**
   * @internal
   */
  public display() {
    // this.element!.patch(this.render());
    // this.patch(this.render());
  }

  protected computeInitialStateFromProps(props: P): S {
    return {} as S;
  }
}
