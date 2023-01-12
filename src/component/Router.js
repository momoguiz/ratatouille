import { Routes, Route } from "react-router-dom";
import RecipeDetails from "./RecipeDetails";
// import RecipesCountry from "./RecipesCountry";
// import RecipesIdeas from "./RecipesIdeas";
import NavBar from "./NavBar";
import App from "../App";
import RecipesCategory from "./RecipesCategory";
const Router = () => {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/category/:category" element={<RecipesCategory />} />
        <Route path="/recipes/:id" element={<RecipeDetails />} />
      </Routes>
    </div>
  );
};
export default Router;
