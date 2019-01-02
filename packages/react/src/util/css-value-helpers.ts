/**
 * CSS helper functions for lists of values
 */

/** Imports */

import arrayWrapper from "./arrayWrapper";

/** Declarations */

/** Creates a comma-separated list */
export const CommaSeparatedList = arrayWrapper((...values: string[]) => values.join(", "));
/** Creates a space-separated list */
export const SpaceSeparatedList = arrayWrapper((...values: string[]) => values.join(" "));
/** Wraps a string in quotes if it contains a space */
export const wrapWithQuotesIfStringContainsSpace = (s: string) => (s.includes(" ") ? `"${s}"` : s);

/** Creates a CSS font list */
export const FontList = arrayWrapper((...fonts: string[]) =>
  CommaSeparatedList(fonts.map(wrapWithQuotesIfStringContainsSpace)),
);

export const url = (urlString: string) => `url(${urlString})`;
