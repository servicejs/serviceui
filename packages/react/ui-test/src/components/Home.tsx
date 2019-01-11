/* @jsx jsx */

import { jsx } from "@emotion/core";
import { em, ThemedProps } from "@service-ui/mixins";
import { withTheme } from "emotion-theming";
import { RouteComponentProps, withRouter } from "react-router";

import { Box, SafeArea, Text } from "../../../src";

import SampleTheme from "../SampleTheme";
import WithBg from "./WithBg";

const Home = withRouter<ThemedProps<SampleTheme> & RouteComponentProps>(
  withTheme(({ theme }: any) => (
    <Box w="100%">
      {/* Background & minimum padding */}
      <Box bg="#FFF" p={1} as="article" w="100%">
        {/* SafeArea.X, which also centers the content horizontally & contains the width constraint */}
        <SafeArea.X mx="auto" maxWidth={em(33)}>
          <Box p={1}>XXX</Box>
          <WithBg p={1}>Test {theme!.colors.black}</WithBg>
          <Text.Block>XXX</Text.Block>
          <Box
            css={(cssTheme?: SampleTheme) => ({
              background: cssTheme!.colors.white,
              borderRadius: cssTheme!.scale(1),
              color: cssTheme!.colors.black,
              margin: cssTheme!.scale(1),
              padding: cssTheme!.scale(1),
            })}
          >
            Hello World {theme!.colors.white}
          </Box>
        </SafeArea.X>
      </Box>
    </Box>
  )),
);

export default Home;
