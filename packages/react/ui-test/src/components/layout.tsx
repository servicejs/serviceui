import { withTheme } from "emotion-theming";
import { inject, observer } from "mobx-react";
import React from "react";
import { RouteComponentProps, withRouter } from "react-router";
import { ExpandingFlex, H1 } from "../../../dist";
import {
  Box,
  Flex,
  FlexColumn,
  FlexRow,
  H3,
  Paragraph,
  safeAreaMixin,
  ThemedProps,
} from "../../../src";
import { ViewModelInjectionProps } from "../ViewModel";
import { Nav } from "./nav";
import { CustomExternalNavLink } from "./navlink";
import { ToggleLightButton } from "./ToggleLightButton";

export const Layout = withRouter(
  withTheme(
    inject("viewModel")(
      observer(
        ({
          children,
          theme,
          viewModel,
        }: ThemedProps &
          ViewModelInjectionProps &
          RouteComponentProps &
          React.Props<any>) => (
          <FlexRow
            justifyContent="stretch"
            alignItems="stretch"
            flex={1}
            css={{
              background: viewModel!.darkMode
                ? theme!.colors.black.base
                : theme!.colors.white.base,
              color: viewModel!.darkMode
                ? theme!.colors.black.text
                : theme!.colors.white.text,
              transition: "all 200ms ease-in-out",
              ...safeAreaMixin({ x: true }),
            }}
          >
            <FlexColumn
              as="aside"
              css={{
                "&": {
                  height: "100vh",
                  overflow: "auto",
                  // padding: theme!.blh(1),
                  width: "20em",
                },

                "::-webkit-scrollbar": {
                  width: theme!.blh(1 / 8),
                },
                "::-webkit-scrollbar-thumb": {
                  backgroundColor: theme!.colors.gray.base,
                  borderRadius: "10000em",
                },
                "::-webkit-scrollbar-track": {
                  borderRadius: "10000em",
                },
                // "& > *": {
                //   marginTop: theme!.blh(1 / 2),
                // },
                // "& > *:first-child": {
                //   marginTop: 0,
                // },
                "@media (max-width: 40em)": {
                  display: "none",
                },
              }}
            >
              <Box>
                <FlexColumn
                  css={{
                    "&": {
                      // background: theme!.colors.silver.base,
                      padding: theme!.blh(1),
                    },
                    "& > *": {
                      marginTop: theme!.blh(1 / 2),
                    },
                    "& > *:first-child": {
                      marginTop: 0,
                    },
                  }}
                >
                  <H1 css={{ fontSize: "1.3rem", lineHeight: theme!.blh(1.5) }}>
                    @service-ui/react
                  </H1>
                </FlexColumn>
                <Flex
                  flex={1}
                  css={{
                    "&": {
                      padding: theme!.blh(1),
                    },
                    "& > *": {
                      width: "100%",
                    },
                  }}
                >
                  <Nav />
                </Flex>
                <FlexColumn
                  css={{
                    "&": {
                      // background: theme!.colors.silver.base,
                      background: viewModel!.darkMode
                        ? theme!.colors.black.base
                        : theme!.colors.white.base,
                      bottom: "0",

                      borderTopColor: theme!.colors.silver.base,
                      borderTopStyle: "solid",
                      borderTopWidth: theme!.blh(1 / 24),

                      color: viewModel!.darkMode
                        ? theme!.colors.black.text
                        : theme!.colors.white.text,
                      padding: theme!.blh(1),
                      position: "sticky",
                    },
                    "& > *": {
                      marginTop: theme!.blh(1 / 2),
                    },
                    "& > *:first-child": {
                      marginTop: 0,
                    },
                  }}
                >
                  <FlexRow>
                    <ToggleLightButton />
                  </FlexRow>
                  <Paragraph>
                    <CustomExternalNavLink href="https://github.com/servicejs/service-ui-react">
                      GitHub
                    </CustomExternalNavLink>
                  </Paragraph>
                  <Paragraph>
                    <CustomExternalNavLink href="https://www.gfm.io">
                      Made by @gfmio
                    </CustomExternalNavLink>
                  </Paragraph>
                  <Paragraph>
                    <CustomExternalNavLink href="https://www.automorph.com">
                      Automorph
                    </CustomExternalNavLink>
                  </Paragraph>
                </FlexColumn>
              </Box>
            </FlexColumn>
            <FlexColumn
              justifyContent="space-between"
              css={{
                height: "100vh",
                overflow: "auto",
                padding: theme!.blh(1),
              }}
              flex={1}
            >
              {children}
            </FlexColumn>
          </FlexRow>
        ),
      ),
    ),
  ),
);
