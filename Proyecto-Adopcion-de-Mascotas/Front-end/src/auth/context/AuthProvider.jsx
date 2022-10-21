import axios from 'axios';
import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { createContext } from 'react'
import { useNavigate } from 'react-router-dom';

export const AuthContext = createContext();


const AuthProvider = ({ children }) => {



    const navigate = useNavigate()

    const verificarAutenticacion = () => {
        const data = JSON.parse(localStorage.getItem('data'))
        if (data === null) {
            return { logged: false }
        } else {
            return data
        }
    }

    const [loggedUserInfo, setLoggedUserInfo] = useState(verificarAutenticacion)

    useEffect(() => {
        verificarAutenticacion();
    }, [])




    const handleLogout = async () => {

        try {
            localStorage.removeItem('data')
            navigate('/login')
            window.location.reload()
            const { data } = await axios.post(`https://adopcionsanti.herokuapp.com/api/usuarios/cerrarSesion`, { loggedUserInfo })
            setLoggedUserInfo({ logged: false })

        } catch (error) {
            console.log(error)
        }
    }





    return (
        <AuthContext.Provider

            value={{
                loggedUserInfo,
                setLoggedUserInfo,
                handleLogout
            }}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider