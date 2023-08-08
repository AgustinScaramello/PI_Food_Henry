import Card from "../card/Card";
import styled from "./Cards.module.css"

function Cards({allRecipes}) {

    const recipesList = allRecipes

    return ( 
        <div className={styled.cards}>
            {recipesList?.map((recipe) => (
                <Card recipe={recipe} key={recipe.id}/>
            ))}
        </div>
     )
}

export default Cards;