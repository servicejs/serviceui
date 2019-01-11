/* @jsx jsx */

import { jsx } from "@emotion/core";

import { em } from "@service-ui/mixins";
import { Box, SafeArea } from "../../../src";

const Footer = () => (
  /* Background & minimum padding */
  <Box bg="#111" c="#EEE" p={1} as="footer">
    {/* SafeArea.X, which also centers the content horizontally & contains the width constraint */}
    <SafeArea.X mx="auto" maxWidth={em(33)}>
      @service-ui/react by Automorph
    </SafeArea.X>
  </Box>
);

export default Footer;
