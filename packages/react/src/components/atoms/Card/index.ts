/**
 * Card
 */

import augment from "../../../util/augment";
import PropsType from "../../../util/PropsType";
import Box from "../Box";

const Card = augment<typeof Box, {}>({
  component: Box,
  displayName: "Card",
});

namespace Card {
  export type Props = PropsType<typeof Card>;
}

export default Card;
