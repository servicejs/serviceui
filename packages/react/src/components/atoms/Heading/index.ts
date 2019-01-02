/**
 * Heading
 */

// tslint:disable:no-shadowed-variable

import { jsx } from "@emotion/core";
import { StyledComponent } from "@emotion/styled";
import augment from "../../../util/augment";
import PropsType from "../../../util/PropsType";
import Box from "../Box";
import Text from "../Text";

namespace Heading {
  export interface HeadingProps {
    level?: number;
  }

  export type Props = PropsType<typeof Heading>;

  export type H1 = typeof H1;
  export namespace H1 {
    export type Props = PropsType<typeof H1>;
  }

  export type H2 = typeof H2;
  export namespace H2 {
    export type Props = PropsType<typeof H2>;
  }

  export type H3 = typeof H3;
  export namespace H3 {
    export type Props = PropsType<typeof H3>;
  }

  export type H4 = typeof H4;
  export namespace H4 {
    export type Props = PropsType<typeof H4>;
  }

  export type H5 = typeof H5;
  export namespace H5 {
    export type Props = PropsType<typeof H5>;
  }

  export type H6 = typeof H6;
  export namespace H6 {
    export type Props = PropsType<typeof H6>;
  }
}

const UnstyledHeading = ({ level, ...props }: Heading.HeadingProps & Box.Props & PropsType<"h1">) =>
  jsx(Text.Block, {
    as:
      typeof level === "number" && Number.isInteger(level) && level >= 1 && level <= 6
        ? (`h${level}` as "h1" | "h2" | "h3" | "h4" | "h5" | "h6")
        : undefined,
    ...props,
  } as any);

UnstyledHeading.defaultProps = Text.Block.defaultProps;
UnstyledHeading.displayName = "Unstyled(Heading)";

const Heading = augment({
  component: UnstyledHeading,
  defaultProps: {
    level: 1,
  },
  displayName: "Heading",
}) as StyledComponent<Heading.HeadingProps & Box.Props & PropsType<"h1">, {}, any> & {
  H1: typeof H1;
  H2: typeof H2;
  H3: typeof H3;
  H4: typeof H4;
  H5: typeof H5;
  H6: typeof H6;
};

const H1 = augment<typeof Heading, {}>({ component: Heading, defaultProps: { level: 1 }, displayName: "H1" });
Heading.H1 = H1;
const H2 = augment<typeof Heading, {}>({ component: Heading, defaultProps: { level: 2 }, displayName: "H2" });
Heading.H2 = H2;
const H3 = augment<typeof Heading, {}>({ component: Heading, defaultProps: { level: 3 }, displayName: "H3" });
Heading.H3 = H3;
const H4 = augment<typeof Heading, {}>({ component: Heading, defaultProps: { level: 4 }, displayName: "H4" });
Heading.H4 = H4;
const H5 = augment<typeof Heading, {}>({ component: Heading, defaultProps: { level: 5 }, displayName: "H5" });
Heading.H5 = H5;
const H6 = augment<typeof Heading, {}>({ component: Heading, defaultProps: { level: 6 }, displayName: "H6" });
Heading.H6 = H6;

export default Heading;
