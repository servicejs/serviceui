/**
 * Snabbdom Browser Renderer
 */

/** Imports */

import toVNode from "snabbdom/tovnode";
import { Element } from "./jsx";
import { SnabbdomRenderer } from "./renderer";

/** Declarations */

/**
 * Snabbdom Browser Renderer
 */
export class BrowserRenderer extends SnabbdomRenderer {
  public renderAtNode(element: Element, node: Node) {
    let vNode = this.render(element);
    if (vNode !== undefined) {
      vNode = this.patch(toVNode(node), vNode);
    }
    // inject the vNode into the element
    // component.injectVNode(toVNode(node));
    // component.injectPatch(this.patch);
    // component.display();
  }
}
