import styled from "./FilterAndOrder.module.css"

function FilterAndOrder({ handleFilterByOrigin, handleFilterByDiet, handleOrderAlphabetically, handelOrderHealthScore, diets }){
    return(
        <div className={styled.filters}>
                <select onChange={handleFilterByOrigin} className={styled.select}>
                    <option hidden selected>Recipes By</option>
                    <option value="AllRecipes">Todas las recetas</option>
                    <option value="API">API</option>
                    <option value="DB">DataBase</option>
                </select>
                <select onChange={handleFilterByDiet} className={styled.select}>
                    <option hidden selected>Dietas</option>
                    {diets?.map((diet) => (
                        <option key={diet.id}>{diet.name}</option>))}
                </select>
                <select name="Ordenar" onChange={handleOrderAlphabetically} className={styled.select}>
                    <option hidden selected>Orden</option>
                    <option value="A">A - Z</option>
                    <option value="D">Z - A</option>
                </select>
                <select onChange={handelOrderHealthScore} className={styled.select}>
                    <option hidden selected>HealthScore</option>
                    <option value="A">Ascendente</option>
                    <option value="D">Descendente</option>
                </select>
            </div>
    )
}

export default FilterAndOrder;