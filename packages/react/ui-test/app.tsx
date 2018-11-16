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
  augment,
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
  SafeAreaX,
  StrongEmphasis,
  Text,
  ThemedProps,
  WrappingFlexRow,
} from "../src";

// import { objectFlatMap, objectMap } from "../src/util/ObjectFunctor";

/** Declarations */

const Space = ({ c = " " }: { c?: string }) => (
  <React.Fragment>{c}</React.Fragment>
);

const Container = augment<BoxProps, BoxProps>({
  defaultProps: {
    css: ({ theme }) => ({
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
      },
    }),
  },
  displayName: "Container",
})(Box);

const Lorem = () => (
  <Paragraph>
    Lorem ipsum dolor sit amet, inani moderatius posidonium id mel, eam id
    petentium adolescens instructior. Ea modo labitur debitis mea, discere
    mediocrem abhorreant duo ea. Graeco numquam legimus duo ei. Mel ut tale
    minim atomorum, nam cu quod sensibus, no mei hinc aliquam dolorem.
  </Paragraph>
);

/**
 * Main Application component
 */
class App extends React.Component<ThemedProps> {
  public render() {
    return (
      <Article
        css={{ margin: "0 auto", width: "max-content", maxWidth: "100%" }}
      >
        <FlexRow />
        <FlexColumn />
        <WrappingFlexRow />

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

          <Lorem />

          {/* Heading */}

          <H3 css={{}}>Heading</H3>

          <Heading>
            A generic heading will render as <Code>p</Code>
          </Heading>

          <Lorem />

          <Paragraph>
            You can also use the shorthands <Code>H1</Code> to <Code>H6</Code>{" "}
            to render the corresponding tags.
          </Paragraph>

          <H1>Heading 1</H1>
          <Lorem />
          <H2>Heading 2</H2>
          <Lorem />
          <H3>Heading 3</H3>
          <Lorem />
          <H4>Heading 4</H4>
          <Lorem />
          <H5>Heading 5</H5>
          <Lorem />
          <H6>Heading 6</H6>
          <Lorem />

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
