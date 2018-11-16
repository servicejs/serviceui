/**
 * Code component
 */

/** Imports */

import { augment } from "../../util/augment";
import { Code, CodeProps } from "./Code";

/** Declarations */

// tslint:disable-next-line:no-empty-interface
export interface CodeBlockProps extends CodeProps {}

/**
 * CodeBlock
 */
export const CodeBlock = augment<CodeBlockProps, CodeProps>({
  defaultProps: { css: { display: "block" } },
  displayName: "CodeBlock",
})(Code);
