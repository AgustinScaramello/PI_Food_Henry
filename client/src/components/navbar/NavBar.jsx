import styled from "./NavBar.module.css"
import { NavLink } from "react-router-dom";

function NavBar() {
    return ( 
        <div className={styled.navBar}>
            <div className={styled.containerInfoChef}>
                <h1 className={styled.infoChef}>#InfoChef</h1> 
            </div>
            <div className={styled.navBarBottons}>
                <NavLink to="/home" className={styled.links}>Home</NavLink>
                <NavLink to="/create" className={styled.links}>Crear Receta</NavLink>
            </div>
        </div>
     )
}

export default NavBar;