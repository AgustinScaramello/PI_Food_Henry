import styled from "./Form.module.css"

function Form() {
    return ( 
        <div>
            <h1 className={styled.titleCreate}>Crear Receta</h1>
            <form className={styled.formCreate}>
                <div className={styled.containerInputCreate}>
                    <label htmlFor="" className={styled.labelCreate}>Nombre</label>
                    <input type="text" className={styled.inputCreate} />
                </div>

                <div className={styled.containerInputCreate}>
                    <label htmlFor="" className={styled.labelCreate}>Resumen de plato</label>
                    <input type="text" className={styled.inputCreate} />
                </div>

                <div className={styled.containerInputCreate}>
                    <label htmlFor="" className={styled.labelCreate}>Nivel de comida saludable:</label>
                    <input type="number" max={100} min={0} className={styled.inputCreate} />
                </div>

                <div className={styled.containerInputCreate}>
                    <label htmlFor="" className={styled.labelCreate}>Paso a paso</label>
                    <input type="text" className={styled.inputCreate} />
                </div>

                <div className={styled.containerInputCreate}>
                    <label htmlFor="" className={styled.labelCreate}>Imagen</label>
                    <input type="url" className={styled.inputCreate} />
                </div>

                <button className={styled.buttonCreate}>Crear</button>
            </form>
        </div>
     )
}

export default Form;