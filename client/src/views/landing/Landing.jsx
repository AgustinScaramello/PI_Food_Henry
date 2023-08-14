import {Link} from "react-router-dom"
import styled from "./Landing.module.css"
import logo from "../../components/images/logo.png"

function Landing(){
    return(                
        <div className={styled.divBienvenidos}>
            <img src={logo} alt="logo" className={styled.logo}/>
            <h1 className={styled.infochef}>#InfoChef</h1>
            <h1 className={styled.bienvenidos}>Bienvenidos</h1>
            <Link to={"/home"} className={styled.linkIngresar}>
                Ingresar
            </Link>
        </div>
    )
}

export default Landing