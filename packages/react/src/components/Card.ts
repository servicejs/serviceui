import { augment } from "../util";
import { Box } from "./Box";

export const Card = augment<typeof Box, {}>({
  component: Box,
  displayName: "Card",
});
