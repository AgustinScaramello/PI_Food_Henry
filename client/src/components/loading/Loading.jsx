import styled from "./Loading.module.css"

function Loading() {
    return(
        <div className={styled.containerLoading}>
            <h1 className={styled.loading}>Cargando</h1>
            <div class={styled.circle}></div>
        </div>
    )
}

export default Loading