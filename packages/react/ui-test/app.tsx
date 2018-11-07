/**
 * UI test app component
 */

/** Imports */

import { hot } from "react-hot-loader";

import { withTheme } from "emotion-theming";
import * as React from "react";
import styled, { css } from "react-emotion";

import { inject, observer } from "mobx-react";
import { setDisplayName } from "recompose";
import {
  Article,
  BlockQuote,
  Box,
  BoxProps,
  Code,
  CodeBlock,
  Color,
  em,
  Em,
  Emphasis,
  ExpandingFlex,
  Flex,
  FlexColumn,
  FlexRow,
  H1,
  H2,
  H3,
  H4,
  H5,
  H6,
  Heading,
  Paragraph,
  PreFormattedText,
  Quote,
  rem,
  SafeArea,
  SafeAreaX,
  Strong,
  StrongEmphasis,
  Text,
  ThemedProps,
} from "../src";
import { IdMonad, RCT, withStyle, wrap } from "../src/util";

// import { objectFlatMap, objectMap } from "../src/util/ObjectFunctor";

/** Declarations */

const Space = ({ c = " " }: { c?: string }) => (
  <React.Fragment>{c}</React.Fragment>
);

// prettier-ignore
const Container = IdMonad.of(Box)
  .map(withStyle(({theme}) => ({
  "&": {
    margin: `0 auto`,
    maxWidth: rem(33 + 2 * parseFloat(theme!.blh!(1))),
    padding: theme!.blh!(1),
    width: "100%",
  },
  "& > *": { marginTop: theme!.blh!(1) },
  "& > *:first-child": { marginTop: "0" },
  "@media (max-width: 768px)": {
    maxWidth: "100%",
  }
  })))
  .map(withTheme)
  .map(wrap(SafeAreaX))
  .map(setDisplayName("Container"))
  .flatten() as RCT<BoxProps>;

/**
 * Main Application component
 */
class App extends React.Component<ThemedProps> {
  public render() {
    return (
      <Article
        css={{ margin: "0 auto", width: "max-content", maxWidth: "100%" }}
      >
        <Container>
          <H1 css={{}}>Components</H1>
          <H2 css={{}}>Base</H2>

          {/* Box */}

          <H3 css={{}}>Box</H3>

          <Box
            css={{
              ...this.props.theme!.colors.red.background(),
              height: this.props.theme!.blh(3),
              width: "100%",
            }}
          />

          {/* Typographic components */}

          <H2 css={{}}>Typographic components</H2>

          {/* Text */}

          <H3 css={{}}>Text</H3>

          <Text>Some text</Text>

          {/* Paragraph */}

          <H3 css={{}}>Paragraph</H3>

          <Paragraph>Some text in a paragraph</Paragraph>

          {/* Heading */}

          <H3 css={{}}>Heading</H3>

          <Heading>
            A heading without level will render as <Code>p</Code>
          </Heading>
          <Heading level={1}>
            A heading with an integer level <Code>n</Code> between 1 and 6 will
            render as <Code>h1</Code> to <Code>h6</Code> respectively, otherwise
            as a <Code>p</Code>. Of course, you can override this behaviour
            using `as`.
          </Heading>
          <H1>
            You can also use the shorthands <Code>H1</Code> to <Code>H6</Code>{" "}
            for that.
          </H1>
          <H1>Heading 1</H1>
          <H2>Heading 2</H2>
          <H3>Heading 3</H3>
          <H4>Heading 4</H4>
          <H5>Heading 5</H5>
          <H6>Heading 6</H6>

          {/* Inline Elements */}

          <H3 css={{}}>Inline elements</H3>

          <Paragraph>
            <Emphasis>
              {`<Emphasis>`} or {`<Em>`}
            </Emphasis>
          </Paragraph>

          <Paragraph>
            <StrongEmphasis>
              {`<StrongEmphasis>`} or {`<Strong>`}
            </StrongEmphasis>
          </Paragraph>

          <Paragraph>
            <Quote>
              {`<Quote>`} or {`<Q>`}
            </Quote>
          </Paragraph>

          <Paragraph>
            <Code>{`<Code>`}</Code>
          </Paragraph>

          {/* BlockQuote */}

          <H3 css={{}}>BlockQuote</H3>

          <BlockQuote>A blockquote</BlockQuote>

          {/* CodeBlock */}

          <H3 css={{}}>CodeBlock</H3>

          <CodeBlock>A CodeBlock</CodeBlock>
        </Container>
        <Box
          css={{
            ...this.props.theme!.colors.gray.background(),
            "@media (min-width: 43rem)": {
              borderRadius: this.props.theme!.blh(1 / 4),
            },
          }}
        >
          <Container>
            Something
            <br />
            Something
            <br />
            Something
          </Container>
        </Box>
        <Container>
          {/* PreFormattedText */}

          <H3 css={{}}>PreFormattedText</H3>
        </Container>
        <Container as={PreFormattedText}>
          A block of pre-formatted text
        </Container>
        <Container>
          {Object.keys(this.props.theme!.colors).map((key, index) => (
            <Box
              key={index}
              css={{
                ...this.props.theme!.colors[key].background(),
                borderRadius: this.props.theme!.blh(1 / 4),
                padding: this.props.theme!.blh(1),
                width: "100%",
              }}
            >
              {key}
            </Box>
          ))}
        </Container>
      </Article>
    );
    // return (
    //   <FlexColumn>
    //     <FlexColumn
    //       css={{
    //         background: this.props.theme!.colors.blue.shade,
    //         padding: this.props.theme!.blh(1),
    //         alignItems: "flex-start",
    //         justifyContent: "flex-start",
    //       }}
    //       as={{
    //         component: "article",
    //       }}
    //     >
    //       <ThemeProvider
    //         theme={(theme: any) => {
    //           theme = theme || {};
    //           theme.bgColor = this.props.theme!.colors.blue.shade;
    //           theme.fgColor = this.props.theme!.colors.white;
    //           return theme;
    //         }}
    //       >
    //         <FlexRow css={{ flexWrap: "wrap" }}>
    //           {objectFlatMap((name: string, color: Color) => (
    //             <Simple key={name} c={color}>
    //               {name} {color.toString()}
    //             </Simple>
    //           ))(this.props.theme!.colors)}
    //         </FlexRow>
    //       </ThemeProvider>
    //       Box
    //       <Text
    //         css={{
    //           ...this.props.theme!.colors.yellow.background(),
    //           borderRadius: this.props.theme!.blh(1 / 4),
    //           display: "inline-block",
    //           padding: this.props.theme!.blh(1),
    //         }}
    //       >
    //         Box
    //       </Text>
    //       <Em css={{ color: this.props.theme!.colors.yellow.shade }}>Box</Em>
    //       <Space />
    //       <Strong css={{ color: this.props.theme!.colors.yellow.shade }}>
    //         Box
    //       </Strong>
    //     </FlexColumn>
    //   </FlexColumn>
    // );
    // return <As as={{ component: "a", props: {} }}>App</As>;
  }
}

export default hot(module)(withTheme(App));
