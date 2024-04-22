// Main page which displays RecipePage (when clicked on) and RecipeSearch (searchbar and overview of recipes.)
import { Center, Flex, Heading } from "@chakra-ui/react";
import { useState } from "react";
import { RecipePage } from "./pages/RecipePage";
import { RecipeSearch } from "./components/RecipeSearch";
import { SunIcon } from "@chakra-ui/icons";

export const App = () => {
  const [selectedRecipe, setSelectedRecipe] = useState();
  return (
    <Center p={[8, 4]} bgColor="purple.200" minH="100vh">
      {selectedRecipe ? (
        <RecipePage recipe={selectedRecipe} clickFn={setSelectedRecipe} />
      ) : (
        <Flex
          gap={10}
          flexDir="column"
          justifyContent="center"
          alignItems="center"
        >
          <Heading fontsize="lg" color="white">
            Lisa's Recipe Finder <SunIcon />
          </Heading>
          <RecipeSearch clickFn={setSelectedRecipe} />
        </Flex>
      )}
    </Center>
  );
};
