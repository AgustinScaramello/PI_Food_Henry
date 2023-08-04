import Cards from "../../components/cards/Cards";
import SearchBar from "../../components/searchbar/SearchBar";
import styled from "./Home.module.css"

function Home() {
    return ( 
        <div>
            <h1 className={styled.home}>Home - PI Food</h1>
            <SearchBar/>
            <Cards/>
        </div>
     )
}

export default Home;