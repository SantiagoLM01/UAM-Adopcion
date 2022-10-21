import { useNavigate } from "react-router-dom"
import useAuth from "../auth/hooks/useAuth"

const PetList = ({ animal }) => {

    const navigate = useNavigate()

    const { loggedUserInfo } = useAuth()


    const viewPet = (e) => {
        e.preventDefault()
    }

    return (

        <>
            <div className="col">
                <div className="card">
                    <div className="row no-gutters">
                        <div className="row p-0 m-0">
                            <img style={{height: 300}} src={animal.url} alt={'Imagen Mascosta'} />
                        </div>

                        <div className="col-8">
                            <div className="card-body">
                                <p className="card-text m-0">Especie: Perro</p>
                                <p className="card-text m-0">Width: {animal.width}</p>
                                <p className="card-text m-0">Height: {animal.height}</p>
                                {loggedUserInfo?.logged ? <button onClick={viewPet} className="btn btn-primary">Adoptar!</button> : <b className="m-0">Inicia Sesión para Adoptar!</b>}

                            </div>


                        </div>
                    </div>
                </div>

            </div>

        </>


    )
}

export default PetList