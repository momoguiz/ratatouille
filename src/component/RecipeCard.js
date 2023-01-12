import { Link } from "react-router-dom"

const RecipeCard =({recipe})=> {
    return (
        <div>
            <Link to={`/${recipe.idMeal}`}> 
            <img src={recipe.strMealThumb} alt={recipe.strMeal} />
            <h2> {recipe.strMeal}</h2>
            <h2> {recipe.strArea}</h2>
            </Link>
            
            
        </div>
    )
}
export default RecipeCard



