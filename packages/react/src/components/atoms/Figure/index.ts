/**
 * Figure & Figure caption
 */

// tslint:disable:no-shadowed-variable

import { StyledComponent } from "@emotion/styled";

import augment from "../../../util/augment";
import PropsType from "../../../util/PropsType";
import Box from "../Box";

const Figure = augment({
  component: Box,
  defaultProps: {
    as: "figure",
  },

  displayName: "Figure",
}) as StyledComponent<PropsType<"figure">, {}, any> & {
  Caption: typeof FigureCaption;
};

const FigureCaption = augment({
  component: Box,
  defaultProps: {
    as: "figcaption",
  },
  displayName: "Figure.Caption",
}) as StyledComponent<PropsType<"figcaption">, {}, any>;

Figure.Caption = FigureCaption;

namespace Figure {
  export type Props = PropsType<typeof Figure>;

  export type Caption = typeof Figure.Caption;
  export namespace Caption {
    export type Props = PropsType<typeof Figure.Caption>;
  }
}

export default Figure;
