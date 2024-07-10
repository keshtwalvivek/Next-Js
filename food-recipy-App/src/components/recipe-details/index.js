import Link from "next/link";

export default function RecipeDetailsItems({ getRecipeDetails }) {
  return (
    <div>
      <Link href={"/recipe-list"}>Go To Recipe List</Link>
      <div className="p-6 lg:max-w-6xl max-w-2xl mx-auto">
        <div className="grid  items-start grid-col-1 lg:grid-cols-2 gap-10 p-4">
          <div className="w-full lg:sticky top-0 sm:flex gap-2">
            <img
              src={getRecipeDetails?.image}
              name={getRecipeDetails?.name}
              className="w-4/5 rounded object-cover"
            />
          </div>
          <div>
            <h2 className="font-bold">{getRecipeDetails?.name}</h2>
            <div className="flex flex-wrap gap-4 mt-5">
              <p>{getRecipeDetails?.mealType[0]}</p>
            </div>
            <div>
              <p className="text-2xl text-gray-800">
                {getRecipeDetails?.cuisine}
              </p>
            </div>
            <div className="mt-5">
              <h3 className="text-lg font-bold text-gray-700">Ingredient</h3>
              <ul className="space-y-3 list-disc mt-4 text-sm text-gray-900">
                {getRecipeDetails?.ingredients.map((item) => (
                  <li>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
