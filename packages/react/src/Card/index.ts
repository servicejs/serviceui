/**
 * Card
 */

import augment from "@service-ui/mixins/util/augment";
import PropsType from "@service-ui/mixins/util/PropsType";
import Box from "../Box";

const Card = augment<typeof Box, {}>({
  component: Box,
  displayName: "Card",
});

namespace Card {
  export type Props = PropsType<typeof Card>;
}

export default Card;
