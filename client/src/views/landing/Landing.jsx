import {Link} from "react-router-dom"

function Landing(){

    

    return(
        <div>
            <h1>Bienvenidos</h1>
            <Link to={"/home"}>
                Click aqui para ingresar
            </Link>
        </div>
        
    )
}

export default Landing