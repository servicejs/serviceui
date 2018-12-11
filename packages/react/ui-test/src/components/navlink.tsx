import styled from "@emotion/styled";
import React from "react";
import { NavLink, NavLinkProps } from "react-router-dom";
import {
  augment,
  Box,
  BoxProps,
  CoreProps,
  EmotionPropsType,
} from "../../../src";

export const CustomNavLink = styled(
  ({ children, ...props }: NavLinkProps & BoxProps) => (
    <Box as={NavLink} {...props as any}>
      {children}
    </Box>
  ),
)(({ theme }) => ({
  "&": {
    fontWeight: 700,
    paddingBottom: theme && theme!.blh(1 / 8),
    paddingTop: theme && theme!.blh(1 / 8),
    textDecoration: "none",
  },
  "&.active": {
    color: theme!.colors.blue.base,
  },
}));

export const CustomExternalNavLink = augment<
  CoreProps & EmotionPropsType<"a">,
  BoxProps
>({
  defaultProps: {
    as: "a",
    target: "_blank",
  },
  displayName: "CustomExternalNavLink",
})(CustomNavLink);
