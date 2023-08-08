import { useState } from "react";
import styled from "./Form.module.css"

function Form() {

    const [ input, setInput ] = useState({
        title: "",
        summary: "",
        healthScore: "",
        instructions: "",
        image: "",
        diets: ""
    })

    function handleChange(e){
        setInput({
            ...input,
            [e.target.name]: e.target.value
        })
    }

    return ( 
        <div>
            <h1 className={styled.titleCreate}>Crear Receta</h1>
            <form className={styled.formCreate} onSubmit={""}>
                <div className={styled.containerInputCreate}>
                    <label htmlFor="" className={styled.labelCreate}>Nombre</label>
                    <input type="text" className={styled.inputCreate} name="title" value={input.value} onChange={handleChange} />
                </div>

                <div className={styled.containerInputCreate}>
                    <label htmlFor="" className={styled.labelCreate}>Resumen de plato</label>
                    <input type="text" className={styled.inputCreate} name="summary" value={input.value} onChange={handleChange} />
                </div>

                <div className={styled.containerInputCreate}>
                    <label htmlFor="" className={styled.labelCreate}>Nivel de comida saludable:</label>
                    <input type="number" max={100} min={0} className={styled.inputCreate} name="healthScore" value={input.value} onChange={handleChange} />
                </div>

                <div className={styled.containerInputCreate}>
                    <label htmlFor="" className={styled.labelCreate}>Paso a paso</label>
                    <input type="text" className={styled.inputCreate} name="instructions" value={input.value} onChange={handleChange} />
                </div>

                <div className={styled.containerInputCreate}>
                    <label htmlFor="" className={styled.labelCreate}>Imagen</label>
                    <input type="url" className={styled.inputCreate} name="image" value={input.value} onChange={handleChange} />
                </div>

                <button className={styled.buttonCreate} type="submit">Crear</button>
            </form>
        </div>
     )
}

export default Form;