import styled from "./NavBar.module.css"
import { NavLink } from "react-router-dom";
import logo from "../images/logo.png"
import homeIcon from "../images/home-icono.png"
import createIcon from "../images/create-icono.png"

function NavBar() {
    return ( 
        <div className={styled.navBar}>
            <div className={styled.containerInfoChef}>
                <img src={logo} alt="logo" className={styled.logo}/>
                <h1 className={styled.infoChef}>#InfoChef</h1> 
            </div>
            <div className={styled.navBarBottons}>
                <NavLink to="/home" className={styled.links}>
                    <img src={homeIcon} alt="home" className={styled.icons}/>
                </NavLink>
                <NavLink to="/create" className={styled.links}>
                    <img src={createIcon} alt="home" className={styled.icons}/>
                </NavLink>
            </div>
        </div>
     )
}

export default NavBar;