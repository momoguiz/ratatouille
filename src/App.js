import './App.css'
import './Css/NavBar.css';
import { useEffect, useState } from 'react'
import NavBar from './component/NavBar'
import RecipeDetails from './component/RecipeDetails';
import RecipeCard from './component/RecipeCard'
import { Routes, Route } from 'react-router-dom';
import RecipesCategory from './component/RecipesCategory';
import RecipesCountry from './component/RecipesCountry';
import RecipesIdeas from './component/RecipesIdeas';


const App =()=> {
  const [categories, setCategories]=useState([])
  const [recipes, setRecipes]=useState([])

  useEffect(()=>{
    fetch("https://www.themealdb.com/api/json/v1/1/categories.php")
    .then(res => res.json())
    .then(data =>setCategories(data.categories))
  },[])


  const changeHandler=(recipeName)=>{
       fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${recipeName}`)
      .then(res =>res.json())
      .then(data=>setRecipes(data.meals))
  }

   
  return (
    <div className="App">

    <NavBar  changeHandler={changeHandler}/>
    {recipes && recipes.map(recipe => { 
      return (
      <RecipeCard recipe={recipe}/>
      ) }) }
      {/* {categories.map(categorie =><h1 key={categorie.idCategory}>{categorie.strCategory}</h1>)} */}
     <Routes>
      <Route path='/:id' element={<RecipeDetails recipes={recipes}/>}/>
      {/* <Route path='/RecipesCategory'   element={<RecipesCategory />}/>
      <Route path='/RecipesIdeas'   element={<RecipesIdeas />}/>
      <Route path='/:idArea'   element={<RecipesCountry recipes={recipes} />}/> */}
      
      
     </Routes>
     </div>
  );
}

export default App;
