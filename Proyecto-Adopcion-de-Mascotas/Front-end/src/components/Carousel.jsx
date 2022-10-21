import { useState } from "react"

const Carousel = () => {

    const [slide, setSlide] = useState(1)
    const [endSiguiente, setEndSiguiente] = useState(false)
    const [endAnterior, setEndAnterior] = useState(false)

    const decrement = () => {
        if (slide === 1) {
            return
        }
        setSlide(slide - 1)

    }

    const increment = () => {
        if (slide === 3) {
            return
        }
        setSlide(slide + 1)
   
    }


    return (


        <>

            <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img className="d-block w-100" src={`/img/carousel${slide}.png`} alt="First slide" />
                    </div>
                </div>
                {slide !== 1 ? <button onClick={decrement} className="carousel-control-prev" href="#carouselExampleControls" role="button" >
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="sr-only">Anterior</span>
                </button> : ''}

                {slide !== 3 ? <button onClick={increment} className="carousel-control-next" href="#carouselExampleControls" role="button" >
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="sr-only">Siguiente</span>
                </button> : ''}

            </div>

        </>

    )
}

export default Carousel