import { useEffect, useState } from "react";
import {useDispatch, useSelector} from "react-redux"
import {filterCardsByDiets, filterCardsByOrigin, getByName, getDiets, getRecipes, sortCardsAlphabetically, sortCardsByHealthScore} from "../../redux/actions"

import Cards from "../../components/cards/Cards";
import SearchBar from "../../components/searchbar/SearchBar";
import styled from "./Home.module.css"

function Home() {

    const dispatch = useDispatch()
    const recipes = useSelector((state) => state.recipes)

    //SearchBar-------------------------------------------------------------------
    const [searchString, setSearchString] = useState("")

    function handleChange(e){
        e.preventDefault()
        setSearchString(e.target.value.toLowerCase())
    }

    function handleSubmit(e){
        e.preventDefault()
        dispatch(getByName(searchString))
    }
    //-----------------------------------------------------------------------------

    //Filtros----------------------------------------------------------------------
    const diets = useSelector((state) => state.diets)

    const handleFilterByDiet = (e) => {
        setCurrentPage(1)
        dispatch(filterCardsByDiets(e.target.value))
    }
    
    const handleFilterByOrigin = (e) => {
        if(e.target.value === "AllRecipes"){
            setCurrentPage(1)
            dispatch(getRecipes())
        }else{
            setCurrentPage(1)
            dispatch(filterCardsByOrigin(e.target.value))
        }
    }
    //-----------------------------------------------------------------------------

    //Order------------------------------------------------------------------------
    const [aux1, setAux1] = useState(false)
    

    const handleOrderAlphabetically = (e) => {
        setCurrentPage(1)
        dispatch(sortCardsAlphabetically(e.target.value))
        setAux1(!aux1)
    }

    const handelOrderHealthScore = (e) => {
        setCurrentPage(1)
        dispatch(sortCardsByHealthScore(e.target.value))
        setAux1(!aux1)
    }
    //-----------------------------------------------------------------------------

    //Paginado------------------------------------------------------------------------
    const recipePerPage = 9;
    const [currentPage, setCurrentPage] = useState(1);
  
    const startIndex = (currentPage - 1) * recipePerPage;
    const endIndex = startIndex + recipePerPage;
    const recipeShow = recipes.slice(startIndex, endIndex);

    const handlePaginator = (newPage) => {
        if (newPage >= 1 && newPage <= Math.ceil(recipes.length / recipePerPage)) {
            setCurrentPage(newPage);
    }
  };
    //-----------------------------------------------------------------------------


    const[loading, setLoading] = useState(true)

    useEffect(()=>{
        const fetchRecipesAndDiets = async () => {
            await dispatch(getRecipes())
            await dispatch(getDiets())
            setLoading(false)
        }
        fetchRecipesAndDiets()        
    }, [dispatch])


    if (loading){
        return(
            <div>Cargando...</div>
        )
    }

    return (
        <div>
            <h1 className={styled.home}>Home - PI Food</h1>
            <SearchBar handleChange={handleChange} handleSubmit={handleSubmit} />

            <div className={styled.filters}>
                <select onChange={handleFilterByOrigin} className={styled.select}>
                    <option hidden selected>Recipes By</option>
                    <option value="AllRecipes">Todas las recetas</option>
                    <option value="API">API</option>
                    <option value="DB">DataBase</option>
                </select>
                <select onChange={handleFilterByDiet} className={styled.select}>
                    <option hidden selected>Dietas</option>
                    {diets?.map((diet) => (
                        <option key={diet.id}>{diet.name}</option>))}
                </select>
                <select name="Ordenar" onChange={handleOrderAlphabetically} className={styled.select}>
                    <option hidden selected>Orden</option>
                    <option value="A">A - Z</option>
                    <option value="D">Z - A</option>
                </select>
                <select onChange={handelOrderHealthScore} className={styled.select}>
                    <option hidden selected>HealthScore</option>
                    <option value="A">Ascendente</option>
                    <option value="D">Descendente</option>
                </select>
            </div>

            <Cards recipes={recipeShow} />

            <div className={styled.paginator}>
                <button onClick={() => handlePaginator(currentPage - 1)} className={styled.buttonPage}>{"<"}</button>
                <span className={styled.numberPage}>Pagina {currentPage}</span>
                <button onClick={() => handlePaginator(currentPage + 1)} className={styled.buttonPage}>{">"}</button>
            </div>
        </div>
     )
}

export default Home;