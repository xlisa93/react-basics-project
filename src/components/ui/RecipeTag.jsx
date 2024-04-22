// Making my tags look nicer.
import { Tag } from "@chakra-ui/react";

export const RecipeTag = ({ colorScheme, label }) => {
  return (
    <Tag
      colorScheme={colorScheme}
      variant="subtle"
      textTransform="uppercase"
      fontSize={["2xs", "xs"]}
    >
      {label}
    </Tag>
  );
};
