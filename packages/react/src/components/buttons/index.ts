/**
 * Button components
 */

/** Imports */

import { augment } from "../../util/augment";
import { EmotionPropsType } from "../../util/PropsType";
import { Box, BoxProps, CoreProps } from "../base";

/** Declarations */

export interface ButtonProps extends CoreProps, EmotionPropsType<"button"> {
  color?: string;
  fill?: "transparent" | "filled" | "outline";
  shape?: "rounded" | "rect" | "square" | "round" | "pill";
}

/**
 * Button (`<button>`)
 */
export const Button = augment<ButtonProps, BoxProps>({
  defaultProps: { as: "button" },
  displayName: "Button",
})(Box);

export interface InputButtonProps
  extends CoreProps,
    EmotionPropsType<"input"> {}

export const InputButton = augment<InputButtonProps, ButtonProps>({
  defaultProps: {
    as: "input",
    type: "button",
  },
  displayName: "InputButton",
})(Button);

export const InputSubmitButton = augment<InputButtonProps, InputButtonProps>({
  defaultProps: {
    type: "submit",
  },
  displayName: "InputSubmitButton",
})(InputButton);

export const InputResetButton = augment<InputButtonProps, InputButtonProps>({
  defaultProps: {
    type: "reset",
  },
  displayName: "InputResetButton",
})(InputButton);
