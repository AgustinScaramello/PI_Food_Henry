import styled from "./Paginator.module.css"

function Paginator({currentPage, handlePaginator}){
    return(
        <div className={styled.paginator}>
                <button onClick={() => handlePaginator(currentPage - 1)} className={styled.buttonPage}>{"<"}</button>
                <h1 className={styled.numberPage}>Pagina {currentPage}</h1>
                <button onClick={() => handlePaginator(currentPage + 1)} className={styled.buttonPage}>{">"}</button>
            </div>
    )
    
}

export default Paginator