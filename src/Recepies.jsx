import React from "react";
import style from './recepies.css';
 const Recipies=({title,calories,image,ingredients,url})=>{
    return(
        <div className={style.recepies}>
        <h1>{title}</h1>
        <p>{calories}</p>
        <img src={image} alt=""/>
        <ol>
        {ingredients.map(ingredient=>(<li>{ingredient.text}</li>))}
        </ol>
    <p>{url}</p>
        </div>
    )
 }
 export default Recipies;