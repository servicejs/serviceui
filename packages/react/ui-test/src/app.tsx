/**
 * UI test app component
 */

/** Imports */

import { hot } from "react-hot-loader";

import { withTheme } from "emotion-theming";
import * as React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import {
  augment,
  BlockQuote,
  Box,
  BoxProps,
  Button,
  Code,
  CodeBlock,
  Emphasis,
  Flex,
  H1,
  H2,
  H3,
  H4,
  H5,
  H6,
  Heading,
  InputButton,
  InputResetButton,
  InputSubmitButton,
  Paragraph,
  Quote,
  rem,
  StrongEmphasis,
  Text,
  ThemedProps,
} from "../../src";
import { Layout } from "./components/layout";
import { BoxPage } from "./pages";

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

const FrontPage = withTheme(({ theme }: ThemedProps) => (
  <Flex as="article" direction="column">
    <H1>@service-ui/react</H1>
    <H2>To Do</H2>
    <Paragraph>
      The thing that is in particular lacking are correct/good ways to do
      layouts. Hence, work on container & layout components.
    </Paragraph>
    <Paragraph>
      Theming in particular feels a bit clunky. Can I simplify / improve this?
      In particular, can I remove some of the behaviours and separate them out
      into different files?
    </Paragraph>
    <Paragraph>
      I'm lacking UI interface colors, e.g. lots of greys for the chrome.
    </Paragraph>
    <Paragraph>
      Transitions and animations need to be done ad-hoc at the moment. How do I
      inject these styles for systematically?
    </Paragraph>
    <Paragraph>
      Can I find a better / new way to organise/name elements and values, so it
      follows a system?
    </Paragraph>
    <Paragraph>Icons are missing</Paragraph>
    <Paragraph>Hover, Focus & Active styles are lacking right now.</Paragraph>
    <Paragraph>Input elements are missing</Paragraph>
    <Paragraph>
      Responsiveness is clunky now. How do you realise this in a good way?
    </Paragraph>
  </Flex>
));
const NotFoundPage = () => <H1>Not found</H1>;

const TextPage = withTheme(({ theme }: ThemedProps) => (
  <Flex as="article" direction="column">
    <H1>Text</H1>
    <Text>Some text</Text>
  </Flex>
));

const ParagraphPage = withTheme(({ theme }: ThemedProps) => (
  <Flex as="article" direction="column">
    <H1>Paragraph</H1>
    <Lorem />
  </Flex>
));

const HeadingsPage = withTheme(({ theme }: ThemedProps) => (
  <Flex as="article" direction="column">
    <H1>Headings</H1>
    <Heading>
      A generic heading will render as <Code>p</Code>
    </Heading>

    <Lorem />

    <Paragraph>
      You can also use the shorthands <Code>H1</Code> to <Code>H6</Code> to
      render the corresponding tags.
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
  </Flex>
));

const InlineElementsPage = withTheme(({ theme }: ThemedProps) => (
  <Flex as="article" direction="column">
    <H1>Inline elements</H1>
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
  </Flex>
));

const BlockQuotePage = withTheme(({ theme }: ThemedProps) => (
  <Flex as="article" direction="column">
    <H1>BlockQuote</H1>
    <BlockQuote>A blockquote</BlockQuote>
  </Flex>
));

const CodeBlockPage = withTheme(({ theme }: ThemedProps) => (
  <Flex as="article" direction="column">
    <H1>CodeBlock</H1>
    <CodeBlock>A CodeBlock</CodeBlock>;
  </Flex>
));

const ButtonsPage = withTheme(({ theme }: ThemedProps) => (
  <Flex as="article" direction="column">
    <H1>Buttons</H1>

    <H2>Button types</H2>
    <Box css={{ "& > *": { marginTop: theme!.blh(1) } }}>
      <Button>Button</Button>
      <InputButton value="InputButton" />
      <InputSubmitButton value="InputSubmitButton" />
      <InputResetButton value="InputResetButton" />
    </Box>

    <H2>Button shapes</H2>

    <Box css={{ "& > *": { marginTop: theme!.blh(1) } }}>
      <Button shape="rounded">Button</Button>
      <Button shape="pill">Button</Button>
      <Button shape="rect">Button</Button>
      <Button shape="round">Button</Button>
      <Button shape="square">Button</Button>
    </Box>

    <H2>Button fill styles</H2>

    <Box css={{ "& > *": { marginTop: theme!.blh(1) } }}>
      <Button fill="filled">Button[fill=filled]</Button>
      <Button fill="outline">Button[fill=outline]</Button>
      <Button fill="transparent">Button[fill=transparent]</Button>
    </Box>

    <H2>Button colors</H2>

    <Box css={{ "& > *": { marginTop: theme!.blh(1) } }}>
      {Object.keys(theme!.colors).map((key) => (
        <Button key={key} color={theme!.colors[key].base}>
          {key} button
        </Button>
      ))}
    </Box>
  </Flex>
));

/**
 * Main Application component
 */
class App extends React.Component<ThemedProps> {
  public render() {
    return (
      <BrowserRouter>
        <Layout>
          <Switch>
            <Route path="/" exact={true} component={FrontPage} />
            <Route path="/components/box" component={BoxPage} />
            <Route path="/components/text" component={TextPage} />
            <Route path="/components/paragraph" component={ParagraphPage} />
            <Route path="/components/headings" component={HeadingsPage} />
            <Route path="/components/inline" component={InlineElementsPage} />
            <Route path="/components/blockquote" component={BlockQuotePage} />
            <Route path="/components/codeblock" component={CodeBlockPage} />
            <Route path="/components/buttons" component={ButtonsPage} />
            <Route path="*" component={NotFoundPage} />
          </Switch>
        </Layout>
      </BrowserRouter>
    );
  }
}

export default hot(module)(withTheme(App));
