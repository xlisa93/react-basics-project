// This page contains of a searchbar and all recipes from RecipeListPage. It also takes data.
import { data } from "../utils/data";
import { Input } from "@chakra-ui/react";
import { RecipeListPage } from "../pages/RecipeListPage";
import { useState } from "react";

export const RecipeSearch = ({ clickFn }) => {
  const [searchField, setSearchField] = useState("");
  const matchingRecipes = data.hits.filter((recipe) => {
    const matchingName = recipe.recipe.label
      .toLowerCase()
      .includes(searchField.toLowerCase());

    return matchingName;
  });

  const handleChange = (event) => {
    setSearchField(event.target.value);
  };

  return (
    <>
      <Input
        onChange={handleChange}
        w={[300, 400]}
        placeholder="Search recipe by name"
        variant="outline"
        bgColor="white"
        focusBorderColor="grey"
      />
      <RecipeListPage clickFn={clickFn} recipes={matchingRecipes} />
    </>
  );
};
