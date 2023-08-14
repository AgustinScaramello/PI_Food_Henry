import styled from "./SearchBar.module.css"

function SearchBar({handleChange, handleSubmit}) {
    return ( 
        <div className={styled.containerSearchBar}>
            <div className={styled.shadow}> 
                <input className={styled.inputSearchBar} onChange={(e) => handleChange(e)} type='search' placeholder="Buscar receta por nombre" />
                <button className={styled.buttonSearchBar} onClick={handleSubmit} type="submit">Buscar</button>
            </div>
        </div>
     )
}

export default SearchBar;