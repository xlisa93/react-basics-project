// Component to calculate the nutrient values for each recipe and round them to a whole number (toFixed(0)).
import { Flex, Text } from "@chakra-ui/react"

export const Nutrients = ({ recipe }) => {
    const NutrientValue = ({ label, quantity }) => (
        <Flex flexDir="column" flexWrap="no-wrap" >
            <Text>{quantity.toFixed(0)}</Text>
            <Text textTransform="uppercase" fontSize={["2xs", "xs"]} fontWeight="bold" >
                {label}
            </Text>
        </Flex>
    );

    return (
        <Flex flexDir="row" flexWrap="wrap" gap={5}>
            <NutrientValue label="Calories" quantity={recipe.calories} />
            <NutrientValue label={recipe.totalNutrients.CHOCDF.label} quantity={recipe.totalNutrients.CHOCDF.quantity} />
            <NutrientValue label={recipe.totalNutrients.PROCNT.label} quantity={recipe.totalNutrients.PROCNT.quantity} />
            <NutrientValue label={recipe.totalNutrients.FAT.label} quantity={recipe.totalNutrients.FAT.quantity} />
            <NutrientValue label={recipe.totalNutrients.CHOLE.label} quantity={recipe.totalNutrients.CHOLE.quantity} />
            <NutrientValue label={recipe.totalNutrients.NA.label} quantity={recipe.totalNutrients.NA.quantity} />
        </Flex>
    );
};