import styled from "./NavBar.module.css"
import { NavLink } from "react-router-dom";

function NavBar() {
    return ( 
        <div className={styled.navBar}>
            <div>
                <h1>#InfoChef</h1> 
            </div>
            <div className={styled.navBarBottons}>
                <NavLink to="/home" className={styled.links}>Home</NavLink>
                <NavLink to="/create" className={styled.links}>Crear Receta</NavLink>
            </div>
        </div>
     )
}

export default NavBar;