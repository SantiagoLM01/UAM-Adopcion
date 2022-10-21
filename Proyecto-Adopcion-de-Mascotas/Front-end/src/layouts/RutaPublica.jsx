import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import useAuth from '../auth/hooks/useAuth'


const RutaPublica = () => {

    const { loggedUserInfo } = useAuth()






    return (

        <>
            {!loggedUserInfo.logged ? <Outlet></Outlet> : <Navigate to='/'></Navigate>}

        </>
    )
}

export default RutaPublica