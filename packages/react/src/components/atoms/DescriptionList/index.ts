/**
 * Description list components
 */

// tslint:disable:no-shadowed-variable

import { StyledComponent } from "@emotion/styled";
import augment from "../../../util/augment";
import PropsType from "../../../util/PropsType";
import Box from "../Box";

namespace DescriptionList {
  export type Props = PropsType<typeof DescriptionList>;

  export type Term = typeof DescriptionList.Term;
  export namespace Term {
    export type Props = PropsType<typeof DescriptionList.Term>;
  }

  export type Description = typeof DescriptionList.Description;
  export namespace Description {
    export type Props = PropsType<typeof DescriptionList.Description>;
  }
}

const DescriptionList = augment({
  component: Box,
  defaultProps: { as: "dl" },
  displayName: "DescriptionList",
}) as StyledComponent<PropsType<"dl"> & Box.Props, {}, any> & {
  Term: typeof DescriptionListTerm;
  Description: typeof DescriptionListDescription;
};

const DescriptionListTerm = augment({
  component: Box,
  defaultProps: { as: "dt" },
  displayName: "DescriptionList.Term",
}) as StyledComponent<PropsType<"dt"> & Box.Props, {}, any>;

DescriptionList.Term = DescriptionListTerm;

const DescriptionListDescription = augment({
  component: Box,
  defaultProps: { as: "dd" },
  displayName: "DescriptionList.Description",
}) as StyledComponent<PropsType<"dd"> & Box.Props, {}, any>;

DescriptionList.Description = DescriptionListDescription;

export default DescriptionList;
