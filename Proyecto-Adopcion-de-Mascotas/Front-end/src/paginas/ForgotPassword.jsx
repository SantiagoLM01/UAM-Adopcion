import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";
import AuthLayout from "../layouts/AuthLayout"

const ForgotPassword = () => {

    const [alerta, SetAlerta] = useState({
        msg: '',
        hasError: false,
        display: 'd-none'
    })
    const [userInfo, SetUserInfo] = useState({
        email: '',
    })


    const onInputChange = ({ target }) => {
        const { name, value } = target

        SetUserInfo({
            ...userInfo,
            [name]: value
        })
    }

    const validarFormulario = async (e) => {
        e.preventDefault();
        if (userInfo.email === '') {
            SetAlerta({
                msg: 'Todos Los Campos Son Obligatorios',
                hasError: true
            })
            return
        }

        try {
            const {email} = userInfo
            const { data } = await axios.post(`https://adopcionsanti.herokuapp.com/api/usuarios/recuperarPassword`,{email})
            SetAlerta({
                msg: data.msg,
                hasError: false,
                display: 'd-block'
            })
        } catch (error) {
            SetAlerta({
                msg: error.response.data.msg,
                hasError: true,
                display: 'd-block'
            })
        }

    }



    return (
        <>
            <AuthLayout pagina={'Recuperar Password'} validarFormulario={validarFormulario}>

                <div className="wrap-input100 validate-input m-b-16" data-validate="Please enter username">
                    <input value={userInfo.email} onChange={(e) => onInputChange(e)} className="input100" type="text" name="email" placeholder="Tu email" />
                    <span className="focus-input100"></span>
                </div>

                <div className="container-login100-form-btn">
                    <button onClick={validarFormulario} className="login100-form-btn">
                        Enviar Email para Recuperar Password
                    </button>
                </div>
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

export default ForgotPassword