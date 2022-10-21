import Footer from "../components/Footer"
import Header from "../components/Header"
import { Link } from "react-router-dom"
import PetList from "../components/PetList"
import useFetch from "../hooks/useFetch"


const Home = () => {


    const {fetchAnimals} = useFetch()







    const year = new Date().getFullYear()


    return (
        <>
            <Header></Header>


            <div className="hero">
                <div className="contenido-hero">
                    <div className="text-center text-white align-items-center justify-content-center">
                        <h1 className="mb-3">Adopta a tu mejor amigo</h1>
                        <h4 className="mb-3">Todos merecen un hogar</h4>
                        <Link className="btn btn-outline-light btn-lg" to='/mascotas' role="button"
                        >Ver Mascotas</Link>
                    </div>

                </div>
            </div>

            <div className="container sombra mt-5 mb-4">
                <h2>Nuestros Servicios</h2>
                <main className="servicios mt-5">
                    <div className="servicio">
                        <h3>Adopción</h3>
                        <div className="iconos">
                            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-home" width="44" height="44" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#2c3e50" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                <polyline points="5 12 3 12 12 3 21 12 19 12" />
                                <path d="M5 12v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-7" />
                                <path d="M9 21v-6a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v6" />
                            </svg>
                        </div>
                        <p>Ut congue ligula sapien, ac aliquet erat viverra a. Nulla rhoncus hendrerit fringilla. Mauris tempus sagittis libero, eget finibus sem aliquet eget.</p>
                    </div>
                    <div className="servicio">
                        <h3>Vacunación</h3>
                        <div className="iconos">
                            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" className="bi bi-capsule-pill" viewBox="0 0 16 16">
                                <path fillRule="evenodd" d="M11.02 5.364a3 3 0 0 0-4.242-4.243L1.121 6.778a3 3 0 1 0 4.243 4.243l5.657-5.657Zm-6.413-.657 2.878-2.879a2 2 0 1 1 2.829 2.829L7.435 7.536 4.607 4.707ZM12 8a4 4 0 1 1 0 8 4 4 0 0 1 0-8Zm-.5 1.041a3 3 0 0 0 0 5.918V9.04Zm1 5.918a3 3 0 0 0 0-5.918v5.918Z" />
                            </svg>
                        </div>
                        <p>Ut congue ligula sapien, ac aliquet erat viverra a. Nulla rhoncus hendrerit fringilla. Mauris tempus sagittis libero, eget finibus sem aliquet eget.</p>
                    </div>
                    <div className="servicio">
                        <h3>Guardería </h3>
                        <div className="iconos">
                            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" className="bi bi-search-heart" viewBox="0 0 16 16">
                                <path d="M6.5 4.482c1.664-1.673 5.825 1.254 0 5.018-5.825-3.764-1.664-6.69 0-5.018Z" />
                                <path d="M13 6.5a6.471 6.471 0 0 1-1.258 3.844c.04.03.078.062.115.098l3.85 3.85a1 1 0 0 1-1.414 1.415l-3.85-3.85a1.007 1.007 0 0 1-.1-.115h.002A6.5 6.5 0 1 1 13 6.5ZM6.5 12a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11Z" />
                            </svg>
                        </div>
                        <p>Ut congue ligula sapien, ac aliquet erat viverra a. Nulla rhoncus hendrerit fringilla. Mauris tempus sagittis libero, eget finibus sem aliquet eget.</p>
                    </div>
                </main>
                <section><h2 className="my-4">Algunas de Nuestras Mascotas</h2>
                    <div className="row row-cols-1 row-cols-md-3 gy-1">
                        {fetchAnimals.map(animal => (
                            <PetList key={animal.id} animal={animal}></PetList>

                        ))}

                    </div>


                </section>
            </div>
            <Footer year={year}></Footer>

        </>
    )
}

export default Home

{/* <div>
                        <img src={imagenPet(animal)} alt={imagenPet(animal)} />
                        <p>{animal.age}</p>
                        <p>{animal.name}</p>
                        <p>{animal.species}</p>
                        <p>{animal.gender}</p>



                    </div> */ }