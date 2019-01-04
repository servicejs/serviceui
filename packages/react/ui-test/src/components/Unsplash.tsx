/**
 * Unsplash image and picture components
 */

/* @jsx jsx */

// tslint:disable:no-shadowed-variable

import { jsx } from "@emotion/core";
import { FunctionComponent } from "react";
import { Image as Img, Picture as Pic } from "../../../src";

/** Generates the URL to an Unsplash image */
export const url = (id: string, width: number = 1350, quality: number = 80) =>
  `https://images.unsplash.com/photo-${id}?w=${width}&q=${quality}`;

export interface Props {
  id: string;
  width?: number;
  quality?: number;
}

export const Image: FunctionComponent<Props & Img.Props> = ({ id, quality = 80, width = 1350, ...rest }) => (
  <Img src={url(id, width, quality)} {...rest} />
);

export const Picture: FunctionComponent<Props & Pic.Props> = ({ id, quality = 80, width = 1350, ...rest }) => (
  <Pic {...rest}>
    <source media={`(max-width: ${width}px)`} srcSet={url(id, width, quality)} />
    <source media={`(min-width: ${width}px and max-width: ${2 * width}px)`} srcSet={url(id, width * 2, quality)} />
    <source media={`(min-width: ${width * 2}px)`} srcSet={url(id, width * 3, quality)} />
    {/* tslint:disable-next-line:max-line-length */}
    <Image id={id} quality={quality} width={width} />
  </Pic>
);

const outerUrl = url;
type OuterProps = Props;
const OuterImage = Image;
const OuterPicture = Picture;
namespace Unsplash {
  export const url = outerUrl;
  export type Props = OuterProps;
  export const Image = OuterImage;
  export const Picture = OuterPicture;
}

export default Unsplash;
