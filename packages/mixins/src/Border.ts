import { BorderColorProperty, BorderStyleProperty } from "csstype";
import { StaticFunctionMixin, ThemedInlineFunctionMixin } from "./Mixin";
import maybe from "./util/maybe";
import { selectFirstDefined } from "./util/select-first";
import stringOrNumberScale from "./util/stringOrNumberScale";

namespace Border {
  //
  // border-color
  //
  export namespace Color {
    export interface MixinProps {
      bc?: BorderColorProperty;
      bcl?: BorderColorProperty;
      bcr?: BorderColorProperty;
      bct?: BorderColorProperty;
      bcb?: BorderColorProperty;
      bcx?: BorderColorProperty;
      bcy?: BorderColorProperty;
    }

    export const mixin: StaticFunctionMixin<Border.Color.MixinProps> = ({ bc, bcl, bcr, bct, bcb, bcx, bcy }) => ({
      borderColor: bc,

      borderBottomColor: selectFirstDefined(bcb, bcy),
      borderLeftColor: selectFirstDefined(bcl, bcx),
      borderRightColor: selectFirstDefined(bcr, bcx),
      borderTopColor: selectFirstDefined(bct, bcy),
    });
  }

  //
  // Border width
  //
  export namespace Width {
    export interface MixinProps {
      bwl?: string | number;
      bwr?: string | number;
      bwt?: string | number;
      bwb?: string | number;
      bwx?: string | number;
      bwy?: string | number;
      bw?: string | number;
    }

    export const mixin: ThemedInlineFunctionMixin<Border.Width.MixinProps> = ({ bwl, bwr, bwt, bwb, bwx, bwy, bw }) => (
      theme: any,
    ) => {
      const scale = maybe(stringOrNumberScale(theme.scale));
      return {
        borderWidth: scale(bw),

        borderBottomWidth: scale(selectFirstDefined(bwb, bwy)),
        borderLeftWidth: scale(selectFirstDefined(bwl, bwx)),
        borderRightWidth: scale(selectFirstDefined(bwr, bwx)),
        borderTopWidth: scale(selectFirstDefined(bwt, bwy)),
      };
    };
  }

  //
  // Border style
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
      bsl?: BorderStyleProperty;
      bsr?: BorderStyleProperty;
      bst?: BorderStyleProperty;
      bsb?: BorderStyleProperty;
      bsx?: BorderStyleProperty;
      bsy?: BorderStyleProperty;
      bs?: BorderStyleProperty;
    }

    export const mixin: StaticFunctionMixin<Border.Style.MixinProps> = ({ bsl, bsr, bst, bsb, bsx, bsy, bs }) =>
      ({
        borderStyle: bs,

        borderBottomStyle: selectFirstDefined(bsb, bsy),
        borderLeftStyle: selectFirstDefined(bsl, bsx),
        borderRightStyle: selectFirstDefined(bsr, bsx),
        borderTopStyle: selectFirstDefined(bst, bsy),
      } as any);
  }

  export namespace Radius {
    export interface MixinProps {
      br?: string | number;
      brtl?: string | number;
      brtr?: string | number;
      brbl?: string | number;
      brbr?: string | number;
    }

    export const mixin: ThemedInlineFunctionMixin<Border.Radius.MixinProps> = ({ br, brtl, brtr, brbl, brbr }) => (
      theme: any,
    ) => {
      const scale = maybe(stringOrNumberScale(theme.scale));
      return {
        borderRadius: scale(br),

        borderBottomLeftRadius: scale(brbl),
        borderBottomRightRadius: scale(brbr),
        borderTopLeftRadius: scale(brtl),
        borderTopRightRadius: scale(brtr),
      };
    };
  }
}

export default Border;
