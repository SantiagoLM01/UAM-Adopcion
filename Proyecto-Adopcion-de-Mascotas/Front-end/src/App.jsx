import React from 'react'
import { BrowserRouter, Routes, Route, Navigate, Link } from "react-router-dom"
import AuthProvider from './auth/context/AuthProvider'
import RutaProtegida from './layouts/RutaProtegida'
import RutaPublica from './layouts/RutaPublica'
import CambiarPassword from './paginas/CambiarPassword'
import CuentaConfirmada from './paginas/CuentaConfirmada'
import ForgotPassword from './paginas/ForgotPassword'
import Home from './paginas/Home'
import Login from './paginas/Login'
import Mascotas from './paginas/Mascotas'
import Nosotros from './paginas/Nosotros'
import Perfil from './paginas/Perfil'
import Registrar from './paginas/Registrar'


const App = () => {
    return (
        <>
            <BrowserRouter>

                <AuthProvider>
                    <Routes>

                        <Route path="/" element={<Home></Home>}></Route>
                        <Route path="nosotros" element={<Nosotros></Nosotros>}></Route>
                        <Route path="mascotas" element={<Mascotas></Mascotas>}></Route>
                       

                        <Route element={<RutaPublica></RutaPublica>}>
                        <Route path='login' element={<Login></Login>}></Route>
                        <Route path="registrar" element={<Registrar></Registrar>}></Route>
                        <Route path="recuperarPassword" element={<ForgotPassword></ForgotPassword>}></Route>
                        <Route path="recuperarPassword/:token" element={<CambiarPassword></CambiarPassword>}></Route>
                        <Route path='confirmar/:token' element={<CuentaConfirmada></CuentaConfirmada>}></Route>


                        </Route>

                        <Route path='/admin' element={<RutaProtegida></RutaProtegida>}>
                            <Route index element={<Perfil></Perfil>}></Route>


                        </Route>

                        <Route path="/*" element={<Navigate to={'/login'}></Navigate>}></Route>


                    </Routes>
                </AuthProvider>

            </BrowserRouter>

        </>
    )
}

export default App