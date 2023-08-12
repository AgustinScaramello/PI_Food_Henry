import {Link} from "react-router-dom"
import styled from "./Card.module.css"


function Card({recipe}) {

    const dietsIsAPIorDB = () => {
        if(recipe.Diets){
            return recipe.Diets.map((diet) => diet.name)
        }else{
            return recipe.diets
        }
    }

    const {title, image, diets = dietsIsAPIorDB(), id} = recipe

    const dietsList = Array.isArray(diets) ? diets.join(', ') : '';

    return ( 
        <Link to={`/detail/${id}`} className={styled.linkDetail}>
            <div className={styled.card}>
                <img src={image} alt="" />
                <h3 className={styled.titleCard}>{title}</h3>
                <h3 className={styled.dietsCard}>Tipo de dieta: {dietsList}</h3>
            </div>
        </Link>
     )
}

export default Card;