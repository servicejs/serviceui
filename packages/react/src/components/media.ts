/**
 * Media components
 */

import { StyledComponent } from "@emotion/styled";

import { augment, PropsType } from "../util";
import { Box, BoxProps } from "./Box";

export const Image = augment({
  component: Box,
  defaultProps: {
    as: "img",
  },
  displayName: "Image",
  mixin: {
    display: "inline-block",
    maxHeight: "100%",
    maxWidth: "100%",
  },
}) as StyledComponent<PropsType<"img"> & BoxProps, {}, any>;

export const Picture = augment({
  component: Box,
  defaultProps: {
    as: "picture",
  },
  displayName: "Picture",
}) as StyledComponent<PropsType<"picture">, {}, any>;

export const FigureCaption = augment({
  component: Box,
  defaultProps: {
    as: "figcaption",
  },
  displayName: "Figure.Caption",
}) as StyledComponent<PropsType<"figcaption">, {}, any>;

export const Figure = augment({
  component: Box,
  defaultProps: {
    as: "figure",
  },

  displayName: "Figure",
}) as StyledComponent<PropsType<"figure">, {}, any> & {
  Caption: typeof FigureCaption;
};

Figure.Caption = FigureCaption;

export const Video = augment({
  component: Box,
  defaultProps: {
    as: "video",
  },
  displayName: "Video",
}) as StyledComponent<PropsType<"video">, {}, any>;

export const Audio = augment({
  component: Box,
  defaultProps: {
    as: "audio",
  },
  displayName: "Audio",
}) as StyledComponent<PropsType<"audio">, {}, any>;

export const IFrame = augment({
  component: Box,
  defaultProps: {
    as: "iframe",
  },
  displayName: "IFrame",
}) as StyledComponent<PropsType<"iframe">, {}, any>;
