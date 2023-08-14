import { useEffect, useState } from "react"
import { useSelector, useDispatch } from "react-redux"
import {useParams} from "react-router-dom"
import styled from "./Detail.module.css"
import { getRecipeDetail } from "../../redux/actions"
import Loading from "../../components/loading/Loading"

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
            <Loading/>
        )
    }

    const dietsIsAPIorDB = () => {
        if(recipeDetail.Diets){
            return recipeDetail.Diets.map((diet) => diet.name)
        }else{
            return recipeDetail.diets
        }
    }
    
    const {title, summary, healthScore, instructions, image, diets = dietsIsAPIorDB()} = recipeDetail

    const dietsList = Array.isArray(diets) ? diets.join(', ') : '';

    return ( 
        <div className={styled.containerDetail}>
            <div className={styled.containerImageDetail}>
                <img src={image} alt="" />
                <h1 className={styled.nameDetail}>{title}</h1>
            </div>

            <div className={styled.containerInfoDetail}>
                <div>
                    <h2 className={styled.indexInfoDetail}>Resumen de plato:</h2>
                    <div className={styled.infoDetail} dangerouslySetInnerHTML={{ __html: summary }} />
                </div>
                <div>
                    <h2 className={styled.indexInfoDetail}>Nivel de comida saludable:</h2>
                    <h3 className={styled.infoDetail}>{healthScore}</h3>
                </div>
                <div>
                    <h2 className={styled.indexInfoDetail}>Paso a paso:</h2>
                    <div className={styled.infoDetail} dangerouslySetInnerHTML={{ __html: instructions }} />
                </div>
                <div>
                    <h2 className={styled.indexInfoDetail}>Tipo de dieta:</h2>
                    <h3 className={styled.infoDetail}>{dietsList}</h3>
                </div>
            </div>
        </div>
     )
}

export default Detail;