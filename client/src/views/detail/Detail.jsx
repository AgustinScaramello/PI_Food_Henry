import { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import {useParams} from "react-router-dom"
import styled from "./Detail.module.css"
import { getRecipeDetail } from "../../redux/actions"

function Detail() {

    const dispatch = useDispatch()
    const {id} = useParams()
    
    const recipeDetail = useSelector((state) => state.recipeDetail)

    const {title, summary, healthScore, instructions, image, diets} = recipeDetail

    useEffect(()=>{
        dispatch(getRecipeDetail(id))
    },[dispatch,id])

    return ( 
        <div className={styled.containerDetail}>
            <div className={styled.imageDetail}>
                <img src={image} alt="" />
                <h1 className={styled.nameDetail}>{title}</h1>
            </div>
            <h3 className={styled.infoDetail}>Resumen de plato: {summary}</h3>
            <h3 className={styled.infoDetail}>Nivel de comida saludable: {healthScore}</h3>
            <h3 className={styled.infoDetail}>Paso a paso: {instructions}</h3>
            <h3 className={styled.infoDetail}>Tipo de dieta: {diets}</h3>
        </div>
     )
}

export default Detail;