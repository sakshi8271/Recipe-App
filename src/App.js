import React,{useEffect,useState} from 'react';
import Recepies from "./Recepies";
import "./App.css";
require('dotenv').config()
const APP_ID="015656e6";
const APP_KEY="07b69742622dc9bb73d7ffff69a3d727	";

const App=()=>{
 const[recipes,setRecepies]=useState([]);
 const [search,setSearch]= useState("");
 const[query,setQuery]=useState('chicken');
  useEffect(() => {
    getRecepies();
  },[query])

  const getRecepies=async()=>{
    const response=await fetch(`https://api.edamam.com/search?q=${query}&app_id=${process.env.APP_ID}&app_key=${process.env.APP_KEY}`)
    const data=await response.json();
    setRecepies(data.hits);
  }
  const updateSearch=(e)=>{
    setSearch(e.target.value);
  }

  const getSearch=e=>{
    e.preventDefault();
    setQuery(search);
    setSearch('');
  }
  return(
    <div className="App">
      <form onSubmit={getSearch} className="search-form"> 
        <input className="search-bar" type="text" value={search} onChange={updateSearch}/>
        <button className="search-button" type="submit">Search</button>
      </form>
      <div className="recepies">
      {recipes.map(recipe=>(
        
        <Recepies 
        key={recipe.recipe.label}
        title={recipe.recipe.label} 
        calories={recipe.recipe.calories} 
        image={recipe.recipe.image}
        ingredients={recipe.recipe.ingredients}
        url={recipe.recipe.url}
        />
       

      )

      )}
       </div>
    </div>
  )
}

export default App
