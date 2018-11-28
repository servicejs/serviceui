/**
 * BasePage
 */

/** Imports */

import { withTheme } from "emotion-theming";
import React from "react";
import { Box, Flex, H1, ThemedProps } from "../../../../src";

/**
 * BasePage
 */
export const BasePage = withTheme(({ theme }: ThemedProps) => (
  <Flex as="article" direction="column">
    <H1>Box</H1>

    <Box
      css={{
        ...theme!.colors.red.background(),
        height: theme!.blh(3),
        width: "100%",
      }}
    />
  </Flex>
));

export const path = "/components/base";
export const title = "Base";
