import { useEffect, useState } from "react";
import {useDispatch, useSelector} from "react-redux"
import {getByName, getRecipes} from "../../redux/actions"

import Cards from "../../components/cards/Cards";
import SearchBar from "../../components/searchbar/SearchBar";
import styled from "./Home.module.css"

function Home() {

    const dispatch = useDispatch()
    const allRecipes = useSelector((state) => state.allRecipes)

    //*Filtro con el Back-end
    const [searchString, setSearchString] = useState("")

    function handleChange(e){
        e.preventDefault()
        setSearchString(e.target.value.toLowerCase())
    }

    function handleSubmit(e){
        e.preventDefault()
        dispatch(getByName(searchString))
    }


    //*Filtro sobre el estado
    // const [filtered, setFiltered] = useState(allRecipes)
    // const [searchString, setSearchString] = useState("")

    // function handleChange(e){
    //     e.preventDefault()
    //     setSearchString(e.target.value.toLowerCase())
    // }

    // function handleSubmit(e){
    //     e.preventDefault()
    //     const filtered = allRecipes.filter((recipe) => recipe.title.toLowerCase().includes(searchString))
    //     setFiltered(filtered)
    // }

    useEffect(()=>{
        dispatch(getRecipes())
    }, [dispatch])

    return (
        <div>
            <h1 className={styled.home}>Home - PI Food</h1>
            <SearchBar handleChange={handleChange} handleSubmit={handleSubmit} />
            <Cards allRecipes={allRecipes} />
        </div>
     )
}

export default Home;