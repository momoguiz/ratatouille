import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import "../Css/RecipeDetails.css";

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
          <div className="top">
            <h1>{theRecipe.strMeal}</h1>
            <img src={theRecipe.strMealThumb} alt={theRecipe.strMeal} />
          </div>

          <div className="ingrContainer">
            <div className="vignet">
              <h2>
                {" "}
                {theRecipe.strMeasure1}{" "}
                {theRecipe.strIngredient1 && theRecipe.strIngredient1}
              </h2>
            </div>
            <div className="vignet">
              <h2>
                {" "}
                {theRecipe.strMeasure2} {theRecipe.strIngredient2}
              </h2>
            </div>
            <div className="vignet">
              <h2>
                {" "}
                {theRecipe.strMeasure3} {theRecipe.strIngredient3}
              </h2>
            </div>
            <div className="vignet">
              <h2>
                {" "}
                {theRecipe.strMeasure4} {theRecipe.strIngredient4}
              </h2>
            </div>
            <div className="vignet">
              <h2>
                {" "}
                {theRecipe.strMeasure5} {theRecipe.strIngredient5}
              </h2>
            </div>
          </div>
          <p> {theRecipe.strInstructions}</p>
          {/* <h2> {theRecipe.strMeasure6}</h2> */}
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
