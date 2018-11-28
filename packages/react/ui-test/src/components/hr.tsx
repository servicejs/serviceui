import { withTheme } from "emotion-theming";
import React from "react";
import { Box, BoxProps } from "../../../src";

export const Hr = withTheme(({ theme, ...props }: BoxProps) => (
  <Box as="hr" {...props as any} />
));
