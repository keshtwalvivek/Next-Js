import RecipeDetailsItems from "@/components/recipe-details";

async function fetchRecipeDetails(currentRecipeid) {
  try {
    const apiResponse = await fetch(
      `https://dummyjson.com/recipes/${currentRecipeid}`
    );
    const data = await apiResponse.json();

    return data;
  } catch (err) {
    throw new Error(err);
  }
}

export default async function RecipeDetails({ params }) {
  const getRecipeDetails = await fetchRecipeDetails(params?.details);
  return <RecipeDetailsItems getRecipeDetails={getRecipeDetails} />;
}
