/**
 * Form
 */

import { StyledComponent } from "@emotion/styled";

import { augment, PropsType } from "../util";
import { Box, BoxProps } from "./Box";

export const Form = augment({
  component: Box,
  defaultProps: { as: "form" },
  displayName: "Form",
}) as StyledComponent<PropsType<"form"> & BoxProps, {}, any>;

export const FieldSet = augment({
  component: Box,
  defaultProps: {
    as: "fieldset",
  },
  displayName: "FieldSet",
}) as StyledComponent<PropsType<"fieldset"> & BoxProps, {}, any>;

export const Legend = augment({
  component: Box,
  defaultProps: {
    as: "legend",
  },
  displayName: "Legend",
}) as StyledComponent<PropsType<"legend"> & BoxProps, {}, any>;

export const Label = augment({
  component: Box,
  defaultProps: {
    as: "label",
  },
  displayName: "Label",
}) as StyledComponent<PropsType<"label"> & BoxProps, {}, any>;

export const Input = augment({
  component: Box,
  defaultProps: {
    as: "input",
  },
  displayName: "Input",
}) as StyledComponent<PropsType<"input"> & BoxProps, {}, any>;

export const TextInput = augment<typeof Input, {}>({
  component: Input,
  defaultProps: {
    type: "text",
  },
  displayName: "TextInput",
});

export const MultiLineTextInput = augment<typeof Input, {}>({
  component: Input,
  defaultProps: {
    as: "textarea",
  },
  displayName: "MultiLineTextInput",
});
