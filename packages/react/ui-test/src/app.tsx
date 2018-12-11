/**
 * UI test app component
 */

/* @jsx jsx */

/** Imports */

import { hot } from "react-hot-loader";

import { jsx } from "@emotion/core";
import CloseOutlined from "@material-ui/icons/CloseOutlined";
import { action } from "mobx";
import { inject, observer } from "mobx-react";
import { Component, Fragment } from "react";
// tslint:disable-next-line:no-var-requires
const MathJax = require("react-mathjax").default;

import {
  Audio,
  Box,
  Button,
  Code,
  Figure,
  Flex,
  FlexColumn,
  FlexRow,
  Form,
  Grid,
  gridMixin,
  H6,
  Heading,
  IFrame,
  Image,
  Input,
  InputSubmitButton,
  Paragraph,
  Picture,
  PseudoSelectors,
  safeAreaMixin,
  SafeAreaX,
  separateChildrenXMixin,
  TimingFunctions,
  transition,
  Video,
} from "../../src";

import ExampleChart from "./example-chart";
import { SampleTheme } from "./theme";
import { aqua } from "./util/mrmrs.cc-gradients";

const Lorem = () => (
  <Fragment>
    Lorem ipsum dolor sit amet, inani moderatius posidonium id mel, eam id petentium adolescens instructior. Ea modo
    labitur debitis mea, discere mediocrem abhorreant duo ea. Graeco numquam legimus duo ei. Mel ut tale minim atomorum,
    nam cu quod sensibus, no mei hinc aliquam dolorem.
  </Fragment>
);

const tex = `f(x) = \\int_{-\\infty}^\\infty
    \\hat f(\\xi)\\,e^{2 \\pi i \\xi x}
    \\,d\\xi`;

/**
 * Main Application component
 */
@inject("theme")
@observer
class App extends Component<{ theme?: SampleTheme }> {
  public render() {
    const theme = this.props.theme;
    return (
      <FlexColumn child={true} flex={1}>
        <FlexRow p={1} as="header">
          Header
        </FlexRow>
        <Flex child={true} flex={1}>
          <Box p={1} css={{ background: theme!.colors.white, color: theme!.colors.black }}>
            <SafeAreaX
              mx="auto"
              my={0}
              css={{
                ...(safeAreaMixin as any)({
                  x: true,
                }),
                "width": "100%",
                "& > *": { maxWidth: "33em", marginTop: theme!.scale(1), marginBottom: theme!.scale(1) },
              }}
            >
              <Heading>Hello World</Heading>
              <Paragraph>
                <Lorem />
              </Paragraph>
              <MathJax.Provider>
                <MathJax.Node formula={tex} />
              </MathJax.Provider>
              <Paragraph>
                <Lorem />
              </Paragraph>
              <Figure>
                {/* tslint:disable-next-line:max-line-length */}
                <Image src="https://images.unsplash.com/photo-1543097692-fa13c6cd8595?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80" />
                <Figure.Caption>
                  A <Code>Figure</Code> with a <Code>Figure.Caption</Code> and an <Code>Image</Code>
                </Figure.Caption>
              </Figure>
              <Figure>
                <Picture>
                  <source
                    media="(max-width: 1350px)"
                    srcSet="https://images.unsplash.com/photo-1543424376-0df9d9e216fc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
                  />
                  <source
                    media="(min-width: 1350px and max-width: 2700px)"
                    srcSet="https://images.unsplash.com/photo-1543424376-0df9d9e216fc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2700&q=80"
                  />
                  <source
                    media="(min-width: 2700px)"
                    srcSet="https://images.unsplash.com/photo-1543424376-0df9d9e216fc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=4050&q=80"
                  />
                  {/* tslint:disable-next-line:max-line-length */}
                  <Image src="https://images.unsplash.com/photo-1543097692-fa13c6cd8595?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80" />
                </Picture>
                <Figure.Caption>
                  A <Code>Figure</Code> with <Code>Figure.Caption</Code> and a <Code>Picture</Code>
                </Figure.Caption>
              </Figure>
              <Figure>
                {/* tslint:disable-next-line:max-line-length */}
                <Video controls={true} css={{ width: "100%", maxWidth: "100%" }}>
                  <source src="https://www.w3schools.com/css/mov_bbb.mp4" type="video/mp4" />
                  <source src="https://www.w3schools.com/css/mov_bbb.ogg" type="video/ogg" />
                  Your browser does not support HTML5 video.
                </Video>
                <Figure.Caption>
                  A <Code>Figure</Code> with <Code>Figure.Caption</Code> and a <Code>Video</Code>
                </Figure.Caption>
              </Figure>
              <Figure>
                {/* tslint:disable-next-line:max-line-length */}
                <Audio controls={true} css={{ width: "100%", maxWidth: "100%" }}>
                  <source src="https://www.w3schools.com/css/mov_bbb.mp4" type="video/mp4" />
                  <source src="https://www.w3schools.com/css/mov_bbb.ogg" type="video/ogg" />
                  Your browser does not support HTML5 audio.
                </Audio>
                <Figure.Caption>
                  A <Code>Figure</Code> with <Code>Figure.Caption</Code> and an <Code>Audio</Code>
                </Figure.Caption>
              </Figure>
              <Box css={{ width: "100%" }}>
                <Box css={{ height: 0, overflow: "hidden", paddingBottom: `${100 / (16 / 9)}%`, position: "relative" }}>
                  <IFrame
                    css={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%" }}
                    src="https://www.youtube-nocookie.com/embed/pD_tY1RE8CU"
                    frameBorder={0}
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen={true}
                  />
                </Box>
              </Box>
              <Box css={{ width: "100%" }}>
                <Box css={{ height: 0, overflow: "hidden", paddingBottom: `${100 / (16 / 9)}%`, position: "relative" }}>
                  <ExampleChart css={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%" }} />
                </Box>
              </Box>
              {/* <Form css={(gridMixin as any)({ cols: 6, gap: theme!.scale(1) }) as any}>
                <Input type="text" css={{ gridColumnStart: 1, gridColumnEnd: "span 6", background: "#F00" }} />
                <Input type="text" css={{ gridColumnStart: 1, gridColumnEnd: "span 3", background: "#F00" }} />
                <Input type="text" css={{ gridColumnStart: 4, gridColumnEnd: "span 3", background: "#F00" }} />
                <InputSubmitButton />
              </Form> */}
              <FlexRow css={separateChildrenXMixin(theme!.scale(1))}>
                <Button
                  css={{
                    [PseudoSelectors.None]: {
                      background: "#F00",
                      transition: transition({
                        property: "background",
                        duration: "0.8s",
                        timingFunction: TimingFunctions.easeInOut,
                      }),
                    },
                    [PseudoSelectors.hover]: { background: "#0F0" },
                    [PseudoSelectors.focus]: { background: "#00F" },
                    [PseudoSelectors.active]: { background: "#FFF" },
                    [PseudoSelectors.disabled]: { background: "#777" },
                  }}
                >
                  Hello World
                </Button>
                Flex
                <Button
                  onClick={action(() => {
                    theme!.colors.black = "#" + Math.round(Math.random() * 256 * 256 * 256 - 0.5).toString(16);
                    theme!.colors.white = "#" + Math.round(Math.random() * 256 * 256 * 256 - 0.5).toString(16);
                  })}
                >
                  Change
                  <CloseOutlined />
                </Button>
                <InputSubmitButton css={aqua} value="Submit" />
              </FlexRow>
              <H6>heading 6</H6>
              <Grid cols={3}>
                <div>1</div>
                <div>2</div>
                <div>3</div>
              </Grid>
            </SafeAreaX>
          </Box>
        </Flex>
        <FlexRow p={1} as="footer">
          Footer
        </FlexRow>
      </FlexColumn>
    );
    // <BrowserRouter>
    //   <Layout>
    //     <Switch>
    //       <Route path="/" exact={true} component={FrontPage} />
    //       <Route path="/components/box" component={BoxPage} />
    //       <Route path="/components/text" component={TextPage} />
    //       <Route path="/components/paragraph" component={ParagraphPage} />
    //       <Route path="/components/headings" component={HeadingsPage} />
    //       <Route path="/components/inline" component={InlineElementsPage} />
    //       <Route path="/components/blockquote" component={BlockQuotePage} />
    //       <Route path="/components/codeblock" component={CodeBlockPage} />
    //       <Route path="/components/buttons" component={ButtonsPage} />
    //       <Route path="*" component={NotFoundPage} />
    //     </Switch>
    //   </Layout>
    // </BrowserRouter>
  }
}

export default hot(module)(App);
