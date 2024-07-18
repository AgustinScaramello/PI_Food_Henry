import { useEffect, useState } from "react";
import {useDispatch, useSelector} from "react-redux"
import {filterAllRecipes, filterCardsByDiets, filterCardsByOrigin, getDiets, getRecipes, sortCardsAlphabetically, sortCardsByHealthScore} from "../../redux/actions"

import Cards from "../../components/cards/Cards";
import SearchBar from "../../components/searchbar/SearchBar";
import FilterAndOrder from "../../components/filterAndOrder/FilterAndOrder";
import Paginator from "../../components/paginator/Paginator";
import Loading from "../../components/loading/Loading";
import styled from "./Home.module.css"

function Home() {

    const dispatch = useDispatch()
    const recipes = useSelector((state) => state.recipes)

    //Filtros----------------------------------------------------------------------
    const diets = useSelector((state) => state.diets)
    
    const handleAllRecipes = () => {
        setCurrentPage(1)
        dispatch(filterAllRecipes())
    }

    const handleFilterByDiet = (e) => {
        setCurrentPage(1)
        dispatch(filterCardsByDiets(e.target.value))
    }
    
    const handleFilterByOrigin = (e) => {
        setCurrentPage(1)
        dispatch(filterCardsByOrigin(e.target.value))
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
            <Loading/>
        )
    }

    return (
        <div className={styled.containerHome}>

            <div className={styled.filterAndSearch}>

                <FilterAndOrder  
                    handleAllRecipes={handleAllRecipes}
                    handleFilterByOrigin={handleFilterByOrigin}
                    handleFilterByDiet={handleFilterByDiet}
                    handleOrderAlphabetically={handleOrderAlphabetically}
                    handelOrderHealthScore={handelOrderHealthScore}
                    diets={diets}
                />

                <SearchBar />
            </div>

            <Cards recipes={recipeShow} />

            <Paginator currentPage={currentPage} handlePaginator={handlePaginator} />
        </div>
     )
}

export default Home;