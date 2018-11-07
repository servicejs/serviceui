import { withTheme } from "emotion-theming";
import { IdMonad, RCT, withStyle } from "../util";
import { Theme } from "./Theme";

// prettier-ignore
export const themed = (name: string) =>
  <P>(component: RCT<P>) =>
    IdMonad.of(component)
      .map(withStyle(
        ({theme, ...props}) => {
          return theme!.componentStyles(name, props);
        }
      ))
      .map((c) => withTheme<P, Theme>(c as RCT<P>))
      .flatten();
