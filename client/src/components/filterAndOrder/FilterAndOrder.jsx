import styled from "./FilterAndOrder.module.css"

function FilterAndOrder({ handleAllRecipes, handleFilterByOrigin, handleFilterByDiet, handleOrderAlphabetically, handelOrderHealthScore, diets }){
    return(
        <div className={styled.filters}>
            <button onClick={handleAllRecipes} className={styled.buttonAllRecipes}>Todas las recetas</button>
            <div className={styled.containerSelect}>
                <select onChange={handleFilterByOrigin} className={styled.select}>
                    <option hidden selected>Recipes By</option>
                    <option value="API" className={styled.options}>API</option>
                    <option value="DB" className={styled.options}>DataBase</option>
                </select>
                <select onChange={handleFilterByDiet} className={styled.select}>
                    <option hidden selected>Dietas</option>
                    {diets?.map((diet) => (
                        <option key={diet.id} className={styled.options}>{diet.name}</option>))}
                </select>
                <select name="Ordenar" onChange={handleOrderAlphabetically} className={styled.select}>
                    <option hidden selected>Orden</option>
                    <option value="A" className={styled.options}>A - Z</option>
                    <option value="D" className={styled.options}>Z - A</option>
                </select>
                <select onChange={handelOrderHealthScore} className={styled.select}>
                    <option hidden selected>HealthScore</option>
                    <option value="A" className={styled.options}>Ascendente</option>
                    <option value="D" className={styled.options}>Descendente</option>
                </select>
            </div>
        </div>
    )
}

export default FilterAndOrder;