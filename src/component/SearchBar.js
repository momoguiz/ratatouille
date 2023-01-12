

const SearchBar =({changeHandler})=>{
    
    
    return (
        
        <input type="text" placeholder="Chercher une recette" onChange={(e)=>changeHandler(e.target.value)}/>
        
    )
}
export default SearchBar