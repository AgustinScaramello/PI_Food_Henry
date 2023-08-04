import Card from "../card/Card";
import styled from "./Cards.module.css"

function Cards() {
    return ( 
        <div className={styled.cards}>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
        </div>
     )
}

export default Cards;