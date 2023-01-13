import { useParams } from "react-router-dom";

const RecipesCountry = (recipes) => {
  const { idArea } = useParams();

  const recipe = recipes.find((recipe) => recipe.strArea === idArea);
  return (
    <div className="recipeCountry" key={recipe.strArea}>
      <h2> Je suis dans Recipe Country</h2>
      <h2> {recipe.strArea}</h2>
    </div>
  );
};
export default RecipesCountry;
