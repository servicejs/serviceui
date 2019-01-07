import styled from "@emotion/styled";
import { paddingMixin, PaddingShorthandProps, ThemedProps } from "@service-ui/mixins";
import SampleTheme from "../SampleTheme";

const WithBg = styled("div")<PaddingShorthandProps>(
  ({ theme }: ThemedProps<SampleTheme>) => ({
    background: theme!.colors.black,
    color: theme!.colors.white,
    // padding: theme.scale(1),
    margin: theme!.scale(1),
    borderRadius: theme!.scale(1),
  }),

  paddingMixin,
);

export default WithBg;
