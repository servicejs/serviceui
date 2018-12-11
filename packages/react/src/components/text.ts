/**
 * Text & Typographic components
 */

import { jsx } from "@emotion/core";
import { StyledComponent } from "@emotion/styled";
import { themed } from "../theme";
import { augment, PropsType } from "../util";
import { Box, BoxProps } from "./Box";

export const Text = augment({
  component: Box,
  defaultProps: {
    as: "span",
  },
  displayName: "Text",
  mixin: {
    display: "inline-block",
  },
}) as StyledComponent<PropsType<"span"> & BoxProps, {}, any>;

export const TextBlock = augment<typeof Text, {}>({
  component: Text,
  displayName: "TextBlock",
  mixin: ({ theme }) => ({
    display: "block",
    marginBottom: theme.scale(1),
    marginTop: theme.scale(1),
  }),
}) as StyledComponent<PropsType<"span">, {}, any>;

export const Paragraph = augment({
  component: TextBlock,
  defaultProps: { as: "p" },
  displayName: "Paragraph",
}) as StyledComponent<PropsType<"p"> & BoxProps, {}, any>;

export interface HeadingProps {
  level?: number;
}

export const P = Paragraph;

const UnstyledHeading = ({ level, ...props }: HeadingProps & BoxProps & PropsType<"h1">) =>
  jsx(TextBlock, {
    as:
      typeof level === "number" && Number.isInteger(level) && level >= 1 && level <= 6
        ? (`h${level}` as "h1" | "h2" | "h3" | "h4" | "h5" | "h6")
        : undefined,
    ...props,
  } as any);

UnstyledHeading.defaultProps = TextBlock.defaultProps;
UnstyledHeading.displayName = "Unstyled(Heading)";

export const Heading = augment({
  component: UnstyledHeading,
  defaultProps: {
    level: 1,
  },
  displayName: "Heading",
}) as StyledComponent<HeadingProps & BoxProps & PropsType<"h1">, {}, any>;

export const H1 = augment<typeof Heading, {}>({ component: Heading, defaultProps: { level: 1 }, displayName: "H1" });
export const H2 = augment<typeof Heading, {}>({ component: Heading, defaultProps: { level: 2 }, displayName: "H2" });
export const H3 = augment<typeof Heading, {}>({ component: Heading, defaultProps: { level: 3 }, displayName: "H3" });
export const H4 = augment<typeof Heading, {}>({ component: Heading, defaultProps: { level: 4 }, displayName: "H4" });
export const H5 = augment<typeof Heading, {}>({ component: Heading, defaultProps: { level: 5 }, displayName: "H5" });
export const H6 = augment<typeof Heading, {}>({ component: Heading, defaultProps: { level: 6 }, displayName: "H6" });

export const Quote = augment({
  component: Text,
  defaultProps: { as: "q" },
  displayName: "Quote",
}) as StyledComponent<PropsType<"q"> & BoxProps, {}, any>;
export const Q = Quote;

export const QuoteBlock = augment({
  component: TextBlock,
  defaultProps: { as: "blockquote" },
  displayName: "QuoteBlock",
  mixin: themed("Quote"),
}) as StyledComponent<PropsType<"blockquote"> & BoxProps, {}, any>;
export const BlockQuote = QuoteBlock;

export const Code = augment({
  component: Text,
  defaultProps: { as: "code" },
  displayName: "Code",
  mixin: {
    fontFamily: "monospace",
  },
}) as StyledComponent<PropsType<"code"> & BoxProps, {}, any>;

export const CodeBlock = augment({
  component: TextBlock,
  defaultProps: { as: "code" },
  displayName: "CodeBlock",
  mixin: themed("Code"),
}) as StyledComponent<PropsType<"code"> & BoxProps, {}, any>;

export const Preformatted = augment({
  component: TextBlock,
  defaultProps: { as: "pre" },
  displayName: "Preformatted",
}) as StyledComponent<PropsType<"pre"> & BoxProps, {}, any>;
export const Pre = Preformatted;

export const Emphasis = augment({
  component: Text,
  defaultProps: { as: "em" },
  displayName: "Emphasis",
}) as StyledComponent<PropsType<"em"> & BoxProps, {}, any>;
export const Em = Emphasis;

export const StrongEmphasis = augment({
  component: Text,
  defaultProps: { as: "strong" },
  displayName: "StrongEmphasis",
}) as StyledComponent<PropsType<"strong"> & BoxProps, {}, any>;
export const Strong = StrongEmphasis;

export const Highlight = augment({
  component: Text,
  defaultProps: { as: "mark" },
  displayName: "Highlight",
}) as StyledComponent<PropsType<"mark"> & BoxProps, {}, any>;
export const Mark = Highlight;

export const Deleted = augment({
  component: Text,
  defaultProps: { as: "del" },
  displayName: "Deleted",
}) as StyledComponent<PropsType<"del"> & BoxProps, {}, any>;
export const Del = Deleted;

export const NoLongerAccurate = augment({
  component: Text,
  defaultProps: { as: "s" },
  displayName: "NoLongerAccurate",
}) as StyledComponent<PropsType<"s"> & BoxProps, {}, any>;
export const S = NoLongerAccurate;

export const Inserted = augment({
  component: Text,
  defaultProps: { as: "ins" },
  displayName: "Inserted",
}) as StyledComponent<PropsType<"ins"> & BoxProps, {}, any>;
export const Ins = Inserted;

export const FinePrint = augment({
  component: Text,
  defaultProps: { as: "small" },
  displayName: "FinePrint",
}) as StyledComponent<PropsType<"small"> & BoxProps, {}, any>;
export const Small = FinePrint;

export const Bold = augment({
  component: Text,
  defaultProps: { as: "b" },
  displayName: "Bold",
}) as StyledComponent<PropsType<"b"> & BoxProps, {}, any>;
export const B = Bold;

export const Italics = augment({
  component: Text,
  defaultProps: { as: "i" },
  displayName: "Italics",
}) as StyledComponent<PropsType<"i"> & BoxProps, {}, any>;
export const I = Italics;

export const Underlined = augment({
  component: Text,
  defaultProps: { as: "u" },
  displayName: "Underlined",
}) as StyledComponent<PropsType<"u"> & BoxProps, {}, any>;
export const U = Underlined;

export const Abbreviation = augment({
  component: Text,
  defaultProps: { as: "abbr" },
  displayName: "Abbreviation",
}) as StyledComponent<PropsType<"abbr"> & BoxProps, {}, any>;
export const Abbr = Abbreviation;

// Code-related

export const Variable = augment({
  component: Text,
  defaultProps: { as: "var" },
  displayName: "Variable",
}) as StyledComponent<PropsType<"var"> & BoxProps, {}, any>;
export const Var = Variable;

export const Kbd = augment({
  component: Text,
  defaultProps: { as: "kbd" },
  displayName: "Kbd",
}) as StyledComponent<PropsType<"kbd"> & BoxProps, {}, any>;

export const SampleOutput = augment({
  component: Text,
  defaultProps: { as: "samp" },
  displayName: "SampleOutput",
}) as StyledComponent<PropsType<"samp"> & BoxProps, {}, any>;
export const Samp = SampleOutput;

export const SampleOutputBlock = augment({
  component: TextBlock,
  defaultProps: { as: "samp" },
  displayName: "SampleOutputBlock",
  mixin: themed("SampleOutput"),
}) as StyledComponent<PropsType<"samp"> & BoxProps, {}, any>;

// Lists

export const UnorderedList = augment({
  component: Box,
  defaultProps: { as: "ul" },
  displayName: "UnorderedList",
}) as StyledComponent<PropsType<"ul"> & BoxProps, {}, any>;
export const List = UnorderedList;

export const UnorderedBulletedList = augment<typeof UnorderedList, {}>({
  component: UnorderedList,
  displayName: "UnorderedBulletedList",
});
export const Ul = UnorderedBulletedList;

export const OrderedList = augment({
  component: UnorderedList,
  defaultProps: { as: "ol" },
  displayName: "OrderedList",
}) as StyledComponent<PropsType<"ol"> & BoxProps, {}, any>;
export const Ol = OrderedList;

export const ListItem = augment({
  component: Box,
  defaultProps: { as: "li" },
  displayName: "ListItem",
}) as StyledComponent<PropsType<"li"> & BoxProps, {}, any>;
export const Li = ListItem;

export const DescriptionListTerm = augment({
  component: Box,
  defaultProps: { as: "dt" },
  displayName: "DescriptionList.Term",
}) as StyledComponent<PropsType<"dt"> & BoxProps, {}, any>;
export const Dt = DescriptionListTerm;

export const DescriptionListDescription = augment({
  component: Box,
  defaultProps: { as: "dd" },
  displayName: "DescriptionList.Description",
}) as StyledComponent<PropsType<"dd"> & BoxProps, {}, any>;
export const Dd = DescriptionListDescription;

export const DescriptionList = augment({
  component: Box,
  defaultProps: { as: "dl" },
  displayName: "DescriptionList",
}) as StyledComponent<PropsType<"dl"> & BoxProps, {}, any> & {
  Term: typeof DescriptionListTerm;
  Description: typeof DescriptionListDescription;
};
export const Dl = DescriptionList;

DescriptionList.Term = DescriptionListTerm;
DescriptionList.Description = DescriptionListDescription;
