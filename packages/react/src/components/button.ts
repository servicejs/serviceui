/**
 * Flex
 */

import { StyledComponent } from "@emotion/styled";

import { augment, PropsType } from "../util";
import { Box } from "./Box";

export const Button = augment({
  component: Box,
  defaultProps: {
    as: "button",
  },
  displayName: "Button",
  mixin: () => ({
    cursor: "pointer",
  }),
}) as StyledComponent<PropsType<"button">, {}, any>;

export const InputButton = augment({
  component: Button,
  defaultProps: {
    as: "input",
    type: "button",
  },
  displayName: "InputButton",
  mixin: () => ({
    verticalAlign: "unset",
  }),
}) as StyledComponent<PropsType<"input">, {}, any>;

export const InputResetButton = augment<typeof InputButton, {}>({
  component: InputButton,
  defaultProps: {
    type: "reset",
  },
  displayName: "InputResetButton",
});

export const InputSubmitButton = augment<typeof InputButton, {}>({
  component: InputButton,
  defaultProps: {
    type: "submit",
  },
  displayName: "InputSubmitButton",
});
