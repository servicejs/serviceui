/* @jsx h */

import { BrowserRenderer, Component, h } from "../src";

const browserRenderer = new BrowserRenderer();

class MySnabbdomComponent extends Component {
  public render() {
    return (
      <html lang="en">
        <head>
          <title>Test</title>
        </head>
        <body>
          <div style={{ color: "#F00" }}>Hello World</div>
        </body>
      </html>
    );
  }
}

browserRenderer.renderAtNode(
  <MySnabbdomComponent />,
  document.documentElement!,
);

// const vNode = snabbdomRenderer.toVNode(document.documentElement!);

// vNode.patch();

// class VNodeObject {
//   public static fromNode(node: Node) {
//     return new this(toVNode(node));
//   }

//   // tslint:disable-next-line:variable-name
//   protected _vNode: VNode;

//   constructor(vnode: VNode) {
//     this._vNode = vnode;
//   }

//   public patch(vNode: VNode) {
//     console.log(vNode);
//     this._vNode = this.patch(this._vNode, vNode);
//   }

//   public vNode() {
//     return this._vNode;
//   }
// }

// // tslint:disable-next-line:max-classes-per-file
// class RootVNodeObject extends VNodeObject {
//   public static fromNode(node: Node) {
//     return new this(toVNode(node));
//   }

//   protected state = {};

//   public render() {}
// }

// const rootNode = VNodeObject.fromNode(document.documentElement!);
// const rootVNode = rootNode.vNode();
// // tslint:disable-next-line:no-console

// const getElementsByTagName = (tagName: string, vNode: VNode): VNode[] => {
//   const results: VNode[] = [];
//   // console.log(vNode);

//   if (vNode.sel === tagName) {
//     results.push(vNode);
//   }

//   if (Array.isArray(vNode.children)) {
//     vNode.children.forEach((child) => {
//       if (typeof child !== "object") {
//         return;
//       }
//       results.push(...getElementsByTagName(tagName, child));
//     });
//   }

//   return results;
// };

// const headNodes = getElementsByTagName("head", rootVNode);
// const bodyNodes = getElementsByTagName("body", rootVNode);
// const appNodes = getElementsByTagName("main", rootVNode);
// const scriptNodes = getElementsByTagName("script", rootVNode);
// const titleNodes = getElementsByTagName("title", rootVNode);
// const metaNodes = getElementsByTagName("meta", rootVNode);
// const linkNodes = getElementsByTagName("link", rootVNode);
// const styleNodes = getElementsByTagName("style", rootVNode);

// console.log(rootVNode);

// console.log(headNodes);
// console.log(titleNodes);
// console.log(metaNodes);
// console.log(linkNodes);
// console.log(styleNodes);

// console.log(bodyNodes);
// console.log(appNodes);
// console.log(scriptNodes);

// {
//   /* <meta charset="UTF-8"></meta>
// <meta charset="UTF-8"></meta>
// <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
// <meta http-equiv="X-UA-Compatible" content="ie=edge"></meta>
// <title>Document</title> */
// }

// const attributes = <T extends object>(props: T) => ({ attrs: props });

// // const charSet = "utf-8";
// const charSetNode = (charset: string = "utf-8") =>
//   h("meta", attributes({ charset }));
// const viewportNode = (viewportSettings: { [key: string]: string } = {}) =>
//   h("meta", attributes({ name: "viewport", content: "" }));
// const ieCompatibilityNode = (
//   ieCompatibilitySettings: {
//     [key: string]: string;
//   } = { ie: "edge" },
// ) =>
//   h(
//     "meta",
//     attributes({ "http-equiv": "X-UA-Compatible", "content": "ie=edge" }),
//   );

// const titleNode = (title: string) => h("title", {}, title);

// class TitleState {
//   public defaultTitle: string = "";

//   public vNode: VNode | undefined;
//   public title: string | undefined;

//   public updateTitle(title: string) {
//     this.title = title;
//     if (this.vNode) {
//       this.render();
//     }
//   }

//   public render() {
//     return titleNode(this.title || this.defaultTitle);
//   }

//   public display() {
//     if (this.vNode) {
//       this.vNode = patch(this.vNode, this.render());
//     }
//   }
// }

// // const Html = () => (
// //   <html {...htmlProps}>
// //     <head {...headProps}>
// //       <CharsetNode />
// //       <ViewportNode />
// //       <IECompatNode/>
// //       <TitleNode/>
// //       <OtherMetaNodes/>
// //       <LinkNodes/>
// //       <StyleNodes/>
// //     </head>
// //     <body {...bodyProps}>
// //       <AppNode/>
// //       <ScriptNodes/>
// //     </body>
// //   </html>
// // );

// const newRoot = h(
//   "html",
//   { style: { height: "100%", padding: "0", margin: "0" } },
//   [
//     h("head", {}, [
//       charSetNode(),
//       viewportNode(),
//       ieCompatibilityNode(),
//       titleNode("Title"),
//       // keywords
//       // description
//       ...linkNodes,
//       ...styleNodes,
//     ]),
//     h(
//       "body",
//       {
//         style: {
//           display: "flex",
//           padding: "0",
//           margin: "0",
//           minHeight: "100%",
//         },
//       },
//       [
//         h("div", {
//           style: {
//             background: "#111",
//             flex: "1",
//             padding: "0",
//             margin: "0",
//             minHeight: "100%",
//           },
//         }),
//         ...appNodes,
//         ...scriptNodes,
//       ],
//     ),
//   ],
// );

// // const rootVNodeData: VNodeData = rootVNode.data || {};
// // rootVNodeData.style = {
// //   ...(rootVNodeData.style || {}),
// //   height: "100%",
// //   margin: "0",
// //   padding: "0",
// // } as any;
// // // rootVNodeData.key = "root";
// // // { style: { height: "100%", padding: "0", margin: "0" } },
// // // rootVNode.data = rootVNodeData;
// // rootNode.patch(h(rootVNode.sel || "html", rootVNodeData, rootVNode.children));

// rootNode.patch(newRoot);
// // patch(rootNode, newRoot);

// class DocumentMetaState {
//   public title: string = "";
//   public titleProps: object = {};
//   public scripts: any[];
//   public links: any[];
// }

// // const component = () => h("div", { hook: { create: } }
