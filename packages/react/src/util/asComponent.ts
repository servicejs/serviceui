import { withProps } from "recompose";
import { AsProperty, AsProps } from "../components";

export const asComponent = <TOuter extends AsProps, TInner extends AsProps>(
  props: AsProperty,
) =>
  withProps<TOuter, TInner>(
    (originalProps: TInner) =>
      ({
        as: props,
        ...(originalProps as object),
      } as TOuter),
  );
