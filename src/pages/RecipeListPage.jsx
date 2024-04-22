// This page displays all recipes from the data.jx and how each RecipeCard element is showed.
import { Flex } from "@chakra-ui/react";
import { RecipeCard } from "../components/RecipeCard";

export const RecipeListPage = ({ recipes, clickFn }) => {
  return (
    <Flex
      gap={8}
      flexDir={["column", "row"]}
      justifyContent="center"
      alignItems="center"
      flexWrap={"wrap"}
    >
      {recipes.map(({ id, recipe }) => (
        <RecipeCard key={id} recipe={recipe} clickFn={clickFn} />
      ))}
    </Flex>
  );
};
