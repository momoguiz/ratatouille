import "./App.css";
import "./Css/NavBar.css";
import React from "react";
import { useEffect, useState } from "react";
// import { Routes, Route, Link } from "react-router-dom";
// // import { Link } from "react-router-dom";
// import NavBar from "./component/NavBar";
// import RecipeDetails from "./component/RecipeDetails";
// import RecipeCard from "./component/RecipeCard";
import ListCategories from "./component/ListCategories";
// import RecipesCountry from "./component/RecipesCountry";
// import RecipesIdeas from "./component/RecipesIdeas";

const App = () => {
  // const [recipes, setRecipes] = useState([]);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("https://www.themealdb.com/api/json/v1/1/categories.php")
      .then((res) => res.json())
      .then((data) => setCategories(data.categories));
  }, []);

  // const changeHandler = (recipeName) => {
  //   fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${recipeName}`)
  //     .then((res) => res.json())
  //     .then((data) => setRecipes(data.meals));
  // };

  return (
    <div className="App">
      <div className="title">
        <h1>Envie de ...</h1>
      </div>
      <div className="homePage">
        {categories &&
          categories.map((category) => {
            return <ListCategories {...category} />;
          })}
      </div>
      {/* quand click affiche les categorie a mettre dans des cards avec nom et image
      et chaque card redirige vers toutes les recettes de la categorie precise
      1 afficher les info
      2 créer la route
      3 integrer card de mui
      4 styliser  */}

      {/* {categories.map(categorie =><h1 key={categorie.idCategory}>{categorie.strCategory}</h1>)} */}
    </div>
  );
};

export default App;
