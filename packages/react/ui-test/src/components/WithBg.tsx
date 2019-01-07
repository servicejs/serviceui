import styled from "@emotion/styled";
import { Padding, ThemedInlineFunctionMixin, ThemedProps } from "@service-ui/mixins";
import SampleTheme from "../SampleTheme";

const WithBg = styled("div")<Padding.MixinProps>(
  ({ theme }: ThemedProps<SampleTheme>) => ({
    background: theme!.colors.black,
    borderRadius: theme!.scale(1),
    color: theme!.colors.white,
    // padding: theme.scale(1),
    margin: theme!.scale(1),
  }),

  ThemedInlineFunctionMixin.toThemedFunctionMixin(Padding.mixin),
);

export default WithBg;
