import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

const RecipeDetails = () => {
  const [recipeDetail, setRecipeDetail] = useState([]);
  const { id } = useParams();
  // const recipe = recipes.find((recipe) => recipe.idMeal === id);
  // https://www.themealdb.com/api/json/v1/1/lookup.php?i=52997
  console.log(recipeDetail);

  useEffect(() => {
    axios
      .get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
      .then((res) => setRecipeDetail(res.data.meals));
  }, [id]);
  // strMeasure1
  const theRecipe = recipeDetail[0];
  return (
    <div className="recipe">
      {theRecipe && (
        <>
          <img src={theRecipe.strMealThumb} alt={theRecipe.strMeal} />
          <h1>{theRecipe.strMeal}</h1>
          <h2> {theRecipe.strIngredient1 && theRecipe.strIngredient1}</h2>
          <h2> {theRecipe.strIngredient2}</h2>
          <h2> {theRecipe.strIngredient3}</h2>
          <h2> {theRecipe.strIngredient4}</h2>
          <h2> {theRecipe.strIngredient5}</h2>

          <h2> {theRecipe.strMeasure1}</h2>
          <h2> {theRecipe.strMeasure2}</h2>
          <h2> {theRecipe.strMeasure3}</h2>
          <h2> {theRecipe.strMeasure4}</h2>
          <h2> {theRecipe.strMeasure5}</h2>
          <h2> {theRecipe.strMeasure6}</h2>
        </>
      )}

      {/* key={recipe.idMeal}>
       <h1>{recipe.strMeal}</h1>
       <h2> {recipe.strTags}</h2> */}
      {/* <Link to={`/recipes/${recipe.strArea}`}/> */}
    </div>
  );
};
export default RecipeDetails;
