/* @jsx jsx */

import { jsx } from "@emotion/core";
import { em, ThemedProps } from "@service-ui/mixins";
import { withTheme } from "emotion-theming";
import React from "react";
import { Box, SafeArea } from "../../../src";
import SampleTheme from "../SampleTheme";

const Header = withTheme(({ theme }: ThemedProps<SampleTheme>) => (
  /* Background & minimum padding */
  <Box bg="#EEE" c={theme!.colors.black} p={1} as="header">
    {/* SafeArea.X, which also centers the content horizontally & contains the width constraint */}
    <SafeArea.X mx="auto" maxWidth={em(33)}>
      @service-ui/react
    </SafeArea.X>
  </Box>
));

export default Header;
