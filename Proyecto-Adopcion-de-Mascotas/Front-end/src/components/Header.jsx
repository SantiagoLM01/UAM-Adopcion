import { useEffect } from "react"
import { useState } from "react"
import { Link } from "react-router-dom"
import useAuth from "../auth/hooks/useAuth"

const Header = () => {


    const { loggedUserInfo, setLoggedUserInfo, handleLogout } = useAuth()

    const [collapse, setCollapse] = useState(false);

    const handleBurger = () => {
        setCollapse(!collapse)
    }



    return (

        <>
            <header className="bg-green fixed-top">
                <nav className="navbar navbar-expand-md navbar-light container d-flex justify-content-center ">
                    <div className="d-flex flex-column">
                        <Link className="navbar-brand text-white" to='/'>UAM - Adopcion de Mascostas</Link>
                        <button onClick={handleBurger} className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                    </div>
                    <div className={`text-center ${collapse ? 'collapse' : ''}  navbar-collapse justify-content-end`} id="navbarNav">
                        <ul className="navbar-nav ">
                            {loggedUserInfo?.logged ? <li className="nav-item ">
                                <h2 className="m-0 mt-1 nav-link text-white">Bienvenido: {loggedUserInfo.username}</h2>
                            </li> : ''}
                            
                            <li className="nav-item ">
                                <Link className=" nav-link text-white link" to='/mascotas'>Mascostas</Link>
                            </li>
                            <li className="nav-item ">
                                <Link className="nav-link text-white link" to='/nosotros'>Nosotros</Link>
                            </li>
                            <li className="nav-item">
                                {loggedUserInfo.logged ? <Link className="nav-link text-white link" to='/admin'>Perfil</Link> : ''}

                            </li>
                            <li className="nav-item">
                                {!loggedUserInfo.logged ? <Link className="nav-link text-white link" to='/Login'>Iniciar Sesion</Link> : <Link onClick={handleLogout} to='/Login' className="nav-link text-white link">Cerrar Sesión</Link>}

                            </li>

                        </ul>
                    </div>
                </nav>
            </header>

        </>

    )
}

export default Header