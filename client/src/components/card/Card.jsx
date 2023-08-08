import {Link} from "react-router-dom"
import styled from "./Card.module.css"


function Card({recipe}) {

    const {title, image, diets, id} = recipe

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