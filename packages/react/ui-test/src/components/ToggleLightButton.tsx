import { withTheme } from "emotion-theming";
import { action } from "mobx";
import { inject, observer } from "mobx-react";
import React from "react";
import { Flex, ThemedProps } from "../../../src";
import { ViewModelInjectionProps } from "../ViewModel";

export const ToggleLightButton = withTheme(
  inject("viewModel")(
    observer(({ theme, viewModel }: ThemedProps & ViewModelInjectionProps) => (
      <Flex
        as="button"
        // flex={1}
        css={{
          "&": {
            paddingBottom: theme!.blh(1 / 4),
            paddingLeft: theme!.blh(1 / 2),
            paddingRight: theme!.blh(1 / 2),
            paddingTop: theme!.blh(1 / 4),

            borderColor: viewModel!.darkMode
              ? theme!.colors.white.base
              : theme!.colors.black.base,
            borderRadius: theme!.blh(1 / 4),
            borderStyle: "solid",
            borderWidth: theme!.blh(1 / 16),

            color: viewModel!.darkMode
              ? theme!.colors.white.base
              : theme!.colors.black.base,

            cursor: "pointer",
            transition: "all 200ms ease-in-out",
          },
          "&:hover": {
            background: viewModel!.darkMode
              ? theme!.colors.white.base
              : theme!.colors.black.base,
            color: viewModel!.darkMode
              ? theme!.colors.black.base
              : theme!.colors.white.base,
          },
        }}
        onClick={action(() => {
          viewModel!.toggleDarkMode();
        })}
      >
        {viewModel!.darkMode ? "Light mode" : "Dark mode"}
      </Flex>
    )),
  ),
);
