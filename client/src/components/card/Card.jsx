import styled from "./Card.module.css"

function Card() {
    return ( 
        <div className={styled.card}>
            <h1>Card</h1>
            <h3>Nombre: Milanesas</h3>
            <h3>Tipo de dieta: Ninguna</h3>
        </div>
     )
}

export default Card;