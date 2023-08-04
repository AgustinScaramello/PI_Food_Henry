import styled from "./SearchBar.module.css"

function SearchBar() {
    return ( 
        <div className={styled.containerSearchBar}>
            <input className={styled.inputSearchBar} type='search' placeholder="Buscar por ID o Name"/>
            <button className={styled.buttonSearchBar}>Buscar</button>
        </div>
     )
}

export default SearchBar;