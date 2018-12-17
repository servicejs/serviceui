import { CommaSeparatedList } from "../util";
import { FunctionMixin } from "./mixin";

export const backgroundList = CommaSeparatedList;

export interface BackgroundShorthandProps {
  bg?: string | string[];
}

export const backgroundMixin: FunctionMixin<BackgroundShorthandProps> = ({ bg }) => ({
  background: bg ? (Array.isArray(bg) ? backgroundList(bg) : bg) : undefined,
});
