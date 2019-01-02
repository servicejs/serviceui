/**
 * ElseIf component
 */

import { jsx } from "@emotion/core";
import { FunctionComponent } from "react";

import PropsType from "../../../util/PropsType";
import Else from "../Else";
import If from "../If";

const ElseIf: FunctionComponent<If.Props> = ({ children, condition }) =>
  jsx(Else, {}, jsx(If, { condition }, children));

namespace ElseIf {
  // tslint:disable-next-line:no-empty-interface
  export type Props = PropsType<typeof ElseIf>;
}

export default ElseIf;
