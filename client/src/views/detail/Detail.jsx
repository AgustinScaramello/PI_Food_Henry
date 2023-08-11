import { useEffect, useState } from "react"
import { useSelector, useDispatch } from "react-redux"
import {useParams} from "react-router-dom"
import styled from "./Detail.module.css"
import { getRecipeDetail } from "../../redux/actions"
import HTMLReactParser from 'html-react-parser';

function Detail() {

    const dispatch = useDispatch()
    const {id} = useParams()
    const recipeDetail = useSelector((state) => state.recipeDetail)
    
    const[loading, setLoading] = useState(true)
    
    useEffect(()=>{
        const fetchRecipeDetail = async (id) => {
            await dispatch(getRecipeDetail(id))
            setLoading(false)
        } 
        fetchRecipeDetail(id)
    },[dispatch,id])

    if (loading){
        return(
            <div>Cargando...</div>
        )
    }

    const {title, summary, healthScore, instructions, image, diets} = recipeDetail

    const summaryRender = summary ? HTMLReactParser(summary.toString()) : summary
    const instructionsRender = instructions ? HTMLReactParser(instructions.toString()) : instructions


    return ( 
        <div className={styled.containerDetail}>
            <div className={styled.imageDetail}>
                <img src={image} alt="" />
                <h1 className={styled.nameDetail}>{title}</h1>
            </div>
            <h3 className={styled.infoDetail} >Resumen de plato: {summaryRender}</h3>
            <h3 className={styled.infoDetail}>Nivel de comida saludable: {healthScore}</h3>
            <h3 className={styled.infoDetail}>Paso a paso: {instructionsRender}</h3>
            <h3 className={styled.infoDetail}>Tipo de dieta: {diets}</h3>
        </div>
     )
}

export default Detail;