import {Link} from "react-router-dom"
import styled from "./Confirmation.module.css"

function Confirmation(){
    return(
        <div className={styled.divConfirmation}>
            <h1 className={styled.confirmation}>¡Receta creada con exito!</h1>
            <Link to={"/home"} className={styled.linkBackToHome}>
                Ir al home
            </Link>
        </div>
    )
}

export default Confirmation