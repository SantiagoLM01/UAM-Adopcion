import React from 'react'
import { useEffect } from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import useAuth from '../auth/hooks/useAuth'
import Footer from '../components/Footer'
import Header from '../components/Header'

const RutaProtegida = () => {

    const { loggedUserInfo, setLoggedUserInfo } = useAuth()

    

   

    console.log(loggedUserInfo)

    return (

        <>
            <Header></Header>
            {loggedUserInfo.logged ? <Outlet></Outlet> : <Navigate to='/login'></Navigate>}


            <Footer></Footer>

        </>
    )
}

export default RutaProtegida