import { Link, useParams } from "react-router-dom"


const RecipeDetails=({recipes})=>{
   const {id}=useParams()
      const recipe=recipes.find(recipe => recipe.idMeal===id)
      
return (
 <div className="recipe" key={recipe.idMeal}>
      <h1>{recipe.strMeal}</h1>
      <h2> {recipe.strTags}</h2>
      
      {/* <Link to={`/recipes/${recipe.strArea}`}/> */}
 </div>
    )
} 
export default RecipeDetails