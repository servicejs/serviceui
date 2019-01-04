/* @jsx jsx */

import { jsx } from "@emotion/core";
import React from "react";
// tslint:disable-next-line:no-var-requires
const MathJax = require("react-mathjax").default;

import MuiTextField from "@material-ui/core/TextField";

import { em, ThemedProps } from "@service-ui/mixins";
import { withTheme } from "emotion-theming";
import { inject, observer } from "mobx-react";
import {
  AspectRatio,
  Audio,
  Box,
  Code,
  Figure,
  Grid,
  Heading,
  IFrame,
  Input,
  InputResetButton,
  InputSubmitButton,
  Label,
  Paragraph,
  ResizeWrapper,
  SafeArea,
  Video,
} from "../../../src";
import { SampleTheme } from "../theme";
import ExampleChart from "./ExampleChart";
import Unsplash from "./Unsplash";

const Lorem = () => (
  <React.Fragment>
    Lorem ipsum dolor sit amet, inani moderatius posidonium id mel, eam id petentium adolescens instructior. Ea modo
    labitur debitis mea, discere mediocrem abhorreant duo ea. Graeco numquam legimus duo ei. Mel ut tale minim atomorum,
    nam cu quod sensibus, no mei hinc aliquam dolorem.
  </React.Fragment>
);

const LoremParagraph = () => (
  <Paragraph>
    <Lorem />
  </Paragraph>
);

const tex = `f(x) = \\int_{-\\infty}^\\infty
    \\hat f(\\xi)\\,e^{2 \\pi i \\xi x}
    \\,d\\xi`;

const SampleArticle = withTheme(({ theme }: ThemedProps<SampleTheme>) => {
  return (
    <Box w="100%">
      {/* Background & minimum padding */}
      <Box bg="#FFF" p={1} as="article" w="100%">
        {/* SafeArea.X, which also centers the content horizontally & contains the width constraint */}
        <SafeArea.X mx="auto" maxWidth={em(33)}>
          <Heading.H1>Hello World</Heading.H1>
          <LoremParagraph />
          <MathJax.Provider>
            <MathJax.Node formula={tex} />
          </MathJax.Provider>
          <LoremParagraph />

          <Figure>
            {/* tslint:disable-next-line:max-line-length */}
            <Unsplash.Image id="1543097692-fa13c6cd8595" />
            <Figure.Caption>
              A <Code>Figure</Code> with a <Code>Figure.Caption</Code> and an <Code>Image</Code>
            </Figure.Caption>
          </Figure>

          <LoremParagraph />

          <Figure>
            <Unsplash.Picture id="1543424376-0df9d9e216fc" />
            <Figure.Caption>
              A <Code>Figure</Code> with <Code>Figure.Caption</Code> and a <Code>Picture</Code>
            </Figure.Caption>
          </Figure>

          <LoremParagraph />

          <Figure>
            <Video controls={true} css={{ width: "100%", maxWidth: "100%" }}>
              <source src="https://www.w3schools.com/css/mov_bbb.mp4" type="video/mp4" />
              <source src="https://www.w3schools.com/css/mov_bbb.ogg" type="video/ogg" />
              Your browser does not support HTML5 video.
            </Video>
            <Figure.Caption>
              A <Code>Figure</Code> with <Code>Figure.Caption</Code> and a <Code>Video</Code>
            </Figure.Caption>
          </Figure>

          <LoremParagraph />

          <Figure>
            <Audio controls={true} css={{ width: "100%", maxWidth: "100%" }}>
              <source src="https://www.w3schools.com/css/mov_bbb.mp4" type="video/mp4" />
              <source src="https://www.w3schools.com/css/mov_bbb.ogg" type="video/ogg" />
              Your browser does not support HTML5 audio.
            </Audio>
            <Figure.Caption>
              A <Code>Figure</Code> with <Code>Figure.Caption</Code> and an <Code>Audio</Code>
            </Figure.Caption>
          </Figure>

          <LoremParagraph />

          <Box css={{ width: "100%" }}>
            <AspectRatio aspectRatio={16 / 9}>
              <IFrame
                css={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%" }}
                src="https://www.youtube-nocookie.com/embed/pD_tY1RE8CU"
                frameBorder={0}
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen={true}
              />
            </AspectRatio>
          </Box>

          <LoremParagraph />

          <AspectRatio aspectRatio={1} w="100%">
            <ResizeWrapper component={ExampleChart} />
          </AspectRatio>

          <LoremParagraph />
        </SafeArea.X>
      </Box>

      {/* Section */}

      {/* Background & minimum padding */}
      <Box bg="#F00" p={1} as="section" w="100%">
        {/* SafeArea.X, which also centers the content horizontally & contains the width constraint */}
        <SafeArea.X mx="auto" maxWidth={em(33)}>
          <Heading.H1>Do more.</Heading.H1>
        </SafeArea.X>
      </Box>

      {/* Form */}

      {/* Background & minimum padding */}
      <Box bg="#FFF" p={1} as="section" w="100%">
        {/* SafeArea.X, which also centers the content horizontally & contains the width constraint */}
        <SafeArea.X mx="auto" maxWidth={em(33)}>
          <Heading.H1>Some Form</Heading.H1>
          <Grid gap={theme!.scale(1)} cols={12}>
            <Grid child={true} cs={1} ce={7} css={{ display: "flex", flexDirection: "column" }}>
              <Label htmlFor="email">Email</Label>
              <MuiTextField placeholder="abc" label="xyz" />
              <Input type="email" placeholder="Email" name="email" required={true} css={{ display: "block" }} />
            </Grid>
            <Grid child={true} cs={7} ce={13}>
              <Label htmlFor="password">Password</Label>
              <Input
                type="password"
                placeholder="Password"
                name="password"
                required={true}
                css={{ display: "block" }}
              />
              <Paragraph c="#F00" css={{ marginTop: "0 !important" }}>
                Is required
              </Paragraph>
            </Grid>
            <Grid child={true}>
              <InputResetButton value="Reset" />
            </Grid>
            <Grid child={true}>
              <InputSubmitButton value="Submit" />
            </Grid>
          </Grid>
        </SafeArea.X>
      </Box>
    </Box>
  );
});

// {/* Each block represents one section */}
// <Repeat
//   n={10}
//   component={() => (
//     <Fragment>
//       {/* Background & minimum padding */}
//       <Box bg="#FFF" p={1} my={1}>
//         {/* SafeArea.X, which also centers the content horizontally & contains the width constraint */}
//         <SafeArea.X mx="auto" bg="#F00" maxWidth={em(33)}>
//           {/* Actual content */}
//           <Paragraph>
//             <Lorem />
//             <Space />
//             <Lorem />
//           </Paragraph>
//         </SafeArea.X>
//       </Box>
//     </Fragment>
//   )}
// />

export default SampleArticle;
