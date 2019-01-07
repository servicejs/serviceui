/**
 * Outline property helpers & mixins
 */

import { OutlineColorProperty, OutlineOffsetProperty, OutlineStyleProperty, OutlineWidthProperty } from "csstype";
import { StaticFunctionMixin, ThemedInlineFunctionMixin } from "./Mixin";
import maybe from "./util/maybe";
import stringOrNumberScale from "./util/stringOrNumberScale";

namespace Outline {
  //
  // Outline color
  //
  export namespace Color {
    export interface MixinProps {
      oc?: OutlineColorProperty;
    }

    export const mixin: StaticFunctionMixin<Outline.Color.MixinProps> = ({ oc: outlineColor }) => ({ outlineColor });
  }

  //
  // Outline offset
  //
  export namespace Offset {
    export interface MixinProps<TLength = string> {
      oo?: number | OutlineOffsetProperty<TLength>;
    }

    export const mixin: ThemedInlineFunctionMixin<Outline.Offset.MixinProps> = ({ oo }) => (theme: any) => {
      const scale = maybe(stringOrNumberScale(theme.scale));
      return {
        outlineOffset: scale(oo),
      };
    };
  }

  //
  // Outline style
  //
  export namespace Style {
    export const enum Values {
      Dashed = "dashed",
      Dotted = "dotted",
      Double = "double",
      Groove = "groove",
      Hidden = "hidden",
      Inset = "inset",
      None = "none",
      Outset = "outset",
      Ridge = "ridge",
      Solid = "solid",
    }

    export interface MixinProps {
      os?: OutlineStyleProperty;
    }

    export const mixin: StaticFunctionMixin<Outline.Style.MixinProps> = ({ os }) => ({
      outlineStyle: os,
    });
  }

  //
  // Outline width
  //
  export namespace Width {
    export interface MixinProps<TLength = string> {
      ow?: number | OutlineWidthProperty<TLength>;
    }

    export const mixin: ThemedInlineFunctionMixin<Outline.Width.MixinProps> = ({ ow }) => (theme: any) => {
      const scale = maybe(stringOrNumberScale(theme.scale));
      return {
        outlineWidth: scale(ow),
      };
    };
  }
}

export default Outline;
