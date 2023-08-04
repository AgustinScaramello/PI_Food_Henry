import styled from "./Detail.module.css"

function Detail() {
    return ( 
        <div className={styled.containerDetail}>
            <div className={styled.imageDetail}>
                <h1 className={styled.nameDetail}>Milanesas</h1>
            </div>
            <h3 className={styled.infoDetail}>Resumen de plato: Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora quidem in natus beatae. Esse, perspiciatis porro asperiores, nostrum harum veniam voluptates autem adipisci assumenda, in maiores voluptatibus necessitatibus ea. Quos.</h3>
            <h3 className={styled.infoDetail}>Nivel de comida saludable: 0</h3>
            <h3 className={styled.infoDetail}>Paso a paso: Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vitae illum iste, dolorem modi laboriosam quasi, ad quibusdam quaerat cumque, quia reiciendis rem culpa laudantium est voluptas sequi ipsam. Ipsa, eligendi.</h3>
            <h3 className={styled.infoDetail}>Tipo de dieta: Ninguna</h3>
        </div>
     )
}

export default Detail;