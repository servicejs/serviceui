/**
 * UI test app component
 */

/** Imports */

import { hot } from "react-hot-loader";

import { withTheme } from "emotion-theming";
import * as React from "react";
import styled, { css } from "react-emotion";

import {
  BlockQuote,
  Box,
  Code,
  CodeBlock,
  Color,
  em,
  Em,
  Emphasis,
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
  Strong,
  StrongEmphasis,
  Text,
  ThemedProps,
} from "../src";
import { ExpandingFlex, Flex, FlexColumn, FlexRow } from "../src";
// import { objectFlatMap, objectMap } from "../src/util/ObjectFunctor";

/** Declarations */

const Space = ({ c = " " }: { c?: string }) => (
  <React.Fragment>{c}</React.Fragment>
);

/**
 * Main Application component
 */
class App extends React.Component<ThemedProps> {
  public render() {
    return (
      <FlexColumn css={{ transform: `` }}>
        <Box
          css={{
            margin: `0 auto`,
            padding: this.props.theme!.blh(1),
            maxWidth: rem(2 * parseFloat(this.props.theme!.blh(1)) + 33),
            width: "100%",
          }}
        >
          <Box css={{ display: "grid", gridGap: this.props.theme!.blh(1) }}>
            <H1 css={{ fontSize: rem(2), fontWeight: 700 }}>Components</H1>
            <H2 css={{ fontSize: rem(1.5), fontWeight: 700 }}>Base</H2>

            {/* Box */}

            <H3 css={{ fontSize: rem(1.25), fontWeight: 700 }}>Box</H3>

            <Box
              css={{
                ...this.props.theme!.colors.red.background(),
                height: this.props.theme!.blh(3),
                width: "100%",
              }}
            />

            {/* Typographic components */}

            <H2 css={{ fontSize: rem(1.5), fontWeight: 700 }}>
              Typographic components
            </H2>

            {/* Text */}

            <H3 css={{ fontSize: rem(1.25), fontWeight: 700 }}>Text</H3>

            <Text>Some text</Text>

            {/* Paragraph */}

            <H3 css={{ fontSize: rem(1.25), fontWeight: 700 }}>Paragraph</H3>

            <Paragraph>Some text in a paragraph</Paragraph>

            {/* Heading */}

            <H3 css={{ fontSize: rem(1.25), fontWeight: 700 }}>Heading</H3>

            <Heading>
              A heading without level will render as <Code>p</Code>
            </Heading>
            <Heading level={1}>
              A heading with an integer level <Code>n</Code> between 1 and 6
              will render as <Code>h1</Code> to <Code>h6</Code> respectively,
              otherwise as a <Code>p</Code>. Of course, you can override this
              behaviour using `as`.
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

            <H3 css={{ fontSize: rem(1.25), fontWeight: 700 }}>
              Inline elements
            </H3>

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

            <H3 css={{ fontSize: rem(1.25), fontWeight: 700 }}>BlockQuote</H3>

            <BlockQuote>A blockquote</BlockQuote>

            {/* CodeBlock */}

            <H3 css={{ fontSize: rem(1.25), fontWeight: 700 }}>CodeBlock</H3>

            <CodeBlock>A CodeBlock</CodeBlock>

            {/* PreFormattedText */}

            <H3 css={{ fontSize: rem(1.25), fontWeight: 700 }}>
              PreFormattedText
            </H3>

            <PreFormattedText>A block of pre-formatted text</PreFormattedText>

            {Object.keys(this.props.theme!.colors).map((key, index) => (
              <Box
                key={index}
                css={{
                  ...this.props.theme!.colors[key].background(),
                  padding: this.props.theme!.blh(1),
                  width: "100%",
                  borderRadius: this.props.theme!.blh(1 / 4),
                }}
              >
                {key}
              </Box>
            ))}
          </Box>
        </Box>
      </FlexColumn>
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
