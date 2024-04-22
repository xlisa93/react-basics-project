// This component makes a nice lay-out for each recipe that's being showed on RecipeListPage. (Lay-out of each individual recipe showed)

import {
  Card,
  CardBody,
  CardHeader,
  Flex,
  Heading,
  Image,
  Text,
} from "@chakra-ui/react";
import { RecipeTag } from "./ui/RecipeTag";

export const RecipeCard = ({ recipe, clickFn }) => {
  const allowHealthLabels = ["Vegan", "Vegetarian", "Gluten-Free"];
  const filterHealthLabels = recipe.healthLabels.filter((healthLabel) =>
    allowHealthLabels.includes(healthLabel));

  return (
    <Card
      cursor="pointer"
      onClick={() => clickFn(recipe)}
      _hover={{ transform: "scale(1.01)" }}
      w={[300, 350]}
      h={500}
      flexWrap="wrap"
      bgColor="white"
      variant="elevated"
      borderRadius={16}
      boxShadow="lg"
    >
      <CardHeader p="0">
        <Image
          src={recipe.image}
          w={350}
          h={200}
          borderTopRadius={16}
          objectFit="cover"
        />
      </CardHeader>
      <CardBody mb={0}>
        <Flex flexDir="column" gap={2} justify="center" align="center">
          <Text textTransform="uppercase">{recipe.mealType}</Text>
          <Heading
            fontSize={["lg", "x1"]}
            textAlign="center"
            color="black"
            mb={2}
          >
            {recipe.label}
          </Heading>
          <Flex flexWrap="no-wrap" gap={2}>
            {recipe.dietLabels.map((dietLabel, index) => (
              <RecipeTag key={index} colorScheme="green" label={dietLabel} />
            ))}
          </Flex>
          <Flex flexWrap="wrap" gap={2}>
            {filterHealthLabels.map((healthLabel, index) => (
              <RecipeTag key={index} colorScheme="blue" label={healthLabel} />
            ))}
          </Flex>
          <Text>
            Dish: {""}
            <Text as="span" fontWeight="semibold">
              {recipe.dishType}
            </Text>
          </Text>
          {recipe.cautions.length > 0 && (
            <>
              <Text fontSize="sm">Cautions</Text>
              <Flex flexWrap="wrap" flexDir="row" justify="center" gap={2}>
                {recipe.cautions.map((caution, index) => (
                  <RecipeTag key={index} colorScheme="red" label={caution} />
                ))}
              </Flex>
            </>
          )}
        </Flex>
      </CardBody>
    </Card>
  );
};
