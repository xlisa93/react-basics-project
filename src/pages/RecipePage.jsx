// This page shows the chosen recipe. (after being selected) Look out for typo's.

import {
  Button,
  ButtonGroup,
  Card,
  CardBody,
  CardFooter,
  Divider,
  Flex,
  Heading,
  Image,
  Text,
} from "@chakra-ui/react";
import { Nutrients } from "../components/ui/Nutrients";
import { RecipeTag } from "../components/ui/RecipeTag";

export const RecipePage = ({ recipe, clickFn }) => {
  return (
    <Card
      variant="elevated"
      backgroundColor="white"
      borderRadius={20}
      w={[300, 1200]}
      boxShadow="lg"
    >
      <CardBody p={0}>
        <Image
          src={recipe.image}
          objectFit="cover"
          w={[300, 1200]}
          h={[200, 400]}
          borderTopRadius={20}
        />
        <Flex flexDir={["column", "row"]} p={[10, 20]}>
          <Flex w={["100%", "60%"]} flexDir="column" gap={2} mb={[5, 0]}>
            <Text textTransform="uppercase">{recipe.mealType}</Text>

            <Heading fontSize={["xl", "3xl"]} fontWeight="semibold">
              {recipe.label}
            </Heading>
            <Text>
              <Text>
                Total cooking time:{" "}
                <Text as="span" fontWeight="semibold">
                  {recipe.totalTime} minutes
                </Text>
              </Text>
              <Text>
                Servings:{" "}
                <Text as="span" fontWeight="semibold">
                  {recipe.yield}
                </Text>
              </Text>
            </Text>
            <Heading fontSize="xl" fontWeight="semibold">
              Ingredients
            </Heading>
            {recipe.ingredientLines.map((ingredient, index) => (
              <Text key={index} fontSize="sm">
                {ingredient}
              </Text>
            ))}
          </Flex>
          <Flex w={["100%", "40%"]} flexDir="column" flexWrap="wrap" gap={2}>
            {recipe.healthLabels.length > 0 && (
              <>
                <Text>Health Labels</Text>
                <Flex flexWrap="wrap" gap={2}>
                  {recipe.healthLabels.map((healthLabel, index) => (
                    <RecipeTag
                      key={index}
                      colorScheme="blue"
                      label={healthLabel}
                    />
                  ))}
                </Flex>
              </>
            )}
            {recipe.dietLabels.length > 0 && (
              <>
                <Text>Diet</Text>
                <Flex flexWrap="no-wrap" gap={2}>
                  {recipe.dietLabels.map((dietLabel, index) => (
                    <RecipeTag
                      key={index}
                      colorScheme="green"
                      label={dietLabel}
                    />
                  ))}
                </Flex>
              </>
            )}
            {recipe.cautions.length > 0 && (
              <>
                <Text>Cautions</Text>
                <Flex flexWrap="no-wrap" gap={2}>
                  {recipe.cautions.map((caution, index) => (
                    <RecipeTag key={index} colorScheme="red" label={caution} />
                  ))}
                </Flex>
              </>
            )}
            <Heading fontSize={"md"} fontWeight="semibold" mt={2}>
              Total nutrients
            </Heading>
            <Nutrients recipe={recipe} />
          </Flex>
        </Flex>
      </CardBody>
      <Divider />
      <CardFooter justify="center" align="center">
        <ButtonGroup spacing="2">
          <Button variant="ghost" colorScheme="purple">
            Save Recipe
          </Button>
          <Button variant="ghost" colorScheme="purple">
            Save Ingredients
          </Button>
          <Button variant="ghost" colorScheme="purple">
            Share
          </Button>
          <Button
            variant="solid"
            cursor={"pointer"}
            onClick={() => clickFn()}
            colorScheme="purple"
          >
            Back to recipes
          </Button>
        </ButtonGroup>
      </CardFooter>
    </Card>
  );
};
