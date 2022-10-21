import useAuth from "../auth/hooks/useAuth"

const Perfil = () => {


    const { loggedUserInfo } = useAuth()
    const {logged} = loggedUserInfo

    return (

        
        <>

            <h1 className="relative">Perfil</h1>
            <div className="container div-perfil">
                <h2>Informacion de la Cuenta</h2>
                <p>Nombre: {loggedUserInfo.username}</p>
                <p>Correo: {loggedUserInfo.email}</p>
            </div>

        </>


    )
}

export default Perfil