import styled from "./Paginator.module.css"

function Paginator({currentPage, handlePaginator}){
    return(
        <div className={styled.paginator}>
                <button onClick={() => handlePaginator(currentPage - 1)} className={styled.buttonPage}>{"<"}</button>
                <span className={styled.numberPage}>Pagina {currentPage}</span>
                <button onClick={() => handlePaginator(currentPage + 1)} className={styled.buttonPage}>{">"}</button>
            </div>
    )
    
}

export default Paginator