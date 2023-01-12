import SearchBar from "./SearchBar"
import { Link } from "react-router-dom"

const NavBar =({changeHandler})=>{
    return (

        <nav className="navBar">
            {/* <div className="navBar_log"> logo </div> */}
            <Link to="/RecipesCategory" classame="navBar_link"> Recette par Categories </Link>
            <Link to="/RecipesIdeas" className="navBar_link"> Idees Recettes </Link> 
            <Link to="/RecipesCountry" className="navBar_link"> Recettes Pays </Link>
            <SearchBar changeHandler={changeHandler}/>
        </nav>
        


    )
}
export default NavBar