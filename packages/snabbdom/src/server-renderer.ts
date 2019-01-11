/**
 * Snabbdom Server Renderer
 */

/** Imports */

import toVNode from "snabbdom/tovnode";
import { Element } from "./jsx";
import { SnabbdomRenderer } from "./renderer";

import toHTML = require("snabbdom-to-html");

/** Declarations */

/**
 * Snabbdom Server Renderer
 */
export class ServerRenderer extends SnabbdomRenderer {
  public renderToHtml(element: Element) {
    const vNode = this.render(element);
    if (vNode === undefined) {
      return undefined;
    } else {
      return "<!doctype html>" + toHTML(vNode);
    }
  }
}
