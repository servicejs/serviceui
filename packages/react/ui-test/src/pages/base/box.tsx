/**
 * BoxPage
 */

/** Imports */

import { withTheme } from "emotion-theming";
import React from "react";
import { Box, Flex, H1, ThemedProps } from "../../../../src";

/**
 * BoxPage
 */
export const BoxPage = withTheme(({ theme }: ThemedProps) => (
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

export const path = "/components/box";
export const title = "Box";
