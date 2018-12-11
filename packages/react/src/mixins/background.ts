import { arrayOrElementToArray, CommaSeparatedList } from "../util";
import { Mixin } from "./mixin";

export const backgroundList = CommaSeparatedList;

export interface BackgroundShorthandProps {
  bg?: string | string[];
}

export const backgroundMixin: Mixin<BackgroundShorthandProps> = ({ bg }) => ({
  background: bg ? arrayOrElementToArray(bg) : undefined,
});
