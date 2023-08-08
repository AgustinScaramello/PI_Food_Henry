import styled from "./SearchBar.module.css"

function SearchBar({handleChange, handleSubmit}) {
    return ( 
        <div className={styled.containerSearchBar}>
            <input className={styled.inputSearchBar} onChange={(e) => handleChange(e)} type='search' placeholder="Buscar por Name" />
            <button className={styled.buttonSearchBar} onClick={handleSubmit} type="submit">Buscar</button>
        </div>
     )
}

export default SearchBar;