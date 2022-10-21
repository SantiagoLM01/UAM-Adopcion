import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import AuthLayout from '../layouts/AuthLayout'
import axios from 'axios'

const CuentaConfirmada = () => {

    const params = useParams()

    const [alerta, SetAlerta] = useState({
        msg: '',
        hasError: false,
        display: 'd-none'
    })

    useEffect(() => {
        confirmarCuenta()
    }, [])


    const confirmarCuenta = async () => {



        const { token } = params

        console.log(token)


        try {
            const {data} = await axios(`https://adopcionsanti.herokuapp.com/api/usuarios/confirmar/${token}`)
            SetAlerta({
                msg: data,
                hasError: false,
                display: 'd-block'
            })

        } catch (error) {
            console.log(error)
            SetAlerta({
                msg: error.response.data.msg,
                hasError: true,
                display: 'd-block'
            })
        }

    }

    return (
        <>
            <AuthLayout pagina={'Confirmar Cuenta'}>

                {!alerta.hasError ? <div className={`text-center mt-4 alert alert-success ${alerta.display}`} role="alert">
                    {alerta.msg}
                </div> :
                    <div className="text-center mt-4 alert alert-danger" role="alert">
                        {alerta.msg}
                    </div>
                }
                <Link className="flex-col-c p-t-20 txt3" to='/'>Regresar a la Pagina Principal</Link>

                <div className="flex-col-c p-t-170 p-b-40">
                    <span className="txt1 p-b-9">
                        ¿Quieres Iniciar Sesión?
                    </span>

                    <Link to='/login' className="txt3">
                        Login
                    </Link>
                </div>



            </AuthLayout>
        </>
    )
}

export default CuentaConfirmada