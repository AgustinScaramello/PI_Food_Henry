import { useState } from "react";
import { useDispatch } from "react-redux"
import { filterCardByName } from "../../redux/actions"
import styled from "./SearchBar.module.css"

function SearchBar() {
    const dispatch = useDispatch()

    const [searchString, setSearchString] = useState("")

    const handleChange = async(e) => {
        e.preventDefault()
        await setSearchString(e.target.value)
        await dispatch(filterCardByName(searchString))
    }

    return ( 
        <div className={styled.containerSearchBar}>
            <div className={styled.shadow}> 
                <input className={styled.inputSearchBar} onChange={(e) => handleChange(e)} type='search' placeholder="Buscar receta por nombre" />
            </div>
        </div>
     )
}

export default SearchBar;