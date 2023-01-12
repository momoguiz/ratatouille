import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

const RecipesCategory = () => {
  const [categories, setCategories] = useState([]);
  const { category } = useParams();
  // console.log(category);

  //   const category = useParams();
  useEffect(() => {
    axios
      .get(
        `https://www.themealdb.com/api/json/v1/1/filter.php?c=${category.toLowerCase()}`
      )
      .then((res) => setCategories(res.data.meals));
  }, [category]);

  return (
    <div>
      {categories &&
        categories.map((cat) => {
          return (
            <>
              <Link to={`/recipes/${cat.idMeal}`}>
                <h2>{cat.strMeal}</h2>
                {/* <p>{cat.idMeal}</p> */}
                {/* Link qui renvoie sur la route recipes/ avec l'id en paramètre */}
                <img src={cat.strMealThumb} alt={cat.strMeal} />
              </Link>
            </>
          );
        })}
    </div>
  );
};
export default RecipesCategory;
