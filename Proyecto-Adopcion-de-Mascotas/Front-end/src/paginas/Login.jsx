import axios from "axios"
import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import '../../src/css/login.css'
import useAuth from "../auth/hooks/useAuth"
import AuthLayout from "../layouts/AuthLayout"

const Login = () => {

    const { loggedUserInfo, setLoggedUserInfo } = useAuth()

    const navigate = useNavigate();

    const [alerta, SetAlerta] = useState({
        msg: '',
        hasError: false,
        display: 'd-none'
    })
    const [userInfo, SetUserInfo] = useState({
        email: '',
        password: ''
    })


    const onInputChange = ({ target }) => {
        const { name, value } = target

        SetUserInfo({
            ...userInfo,
            [name]: value
        })
    }

    const onResetForm = () => {
        setFormState(initialForm)
    }

    const validarFormulario = async (e) => {
        e.preventDefault();
        if (userInfo.email === '' || userInfo.password === '') {
            SetAlerta({
                msg: 'Todos Los Campos Son Obligatorios',
                hasError: true
            })
            return
        }

        try {
            const { email, password } = userInfo
            const { data } = await axios.post(`https://adopcionsanti.herokuapp.com/api/usuarios/login`, { email, password })
            setLoggedUserInfo(data)
            localStorage.setItem('data',JSON.stringify(data))
            SetAlerta({
                msg: 'Inicio de Sesión Exitoso',
                hasError: false
            })
            navigate('/')

        } catch (error) {
            SetAlerta({
                msg: error.response.data.msg,
                hasError: true
            })
        }
    }


    return (
        <>
            <AuthLayout pagina='Inicia Sesión' userInfo={userInfo} SetAlerta={SetAlerta}>

                <div className="wrap-input100 validate-input m-b-16" data-validate="Please enter username">
                    <input value={userInfo.email} onChange={(e) => onInputChange(e)} className="input100" type="text" name="email" placeholder="Email" />
                    <span className="focus-input100"></span>
                </div>

                <div className="wrap-input100 validate-input" data-validate="Please enter password">
                    <input value={userInfo.password} onChange={(e) => onInputChange(e)} className="input100" type="password" name="password" placeholder="Password" />
                    <span className="focus-input100"></span>
                </div>

                <div className="text-right p-t-13 p-b-23">

                    <Link to='/recuperarPassword' className="txt2">
                        Se te olvidó la contraseña?
                    </Link>
                </div>

                <div className="container-login100-form-btn">
                    <button onClick={validarFormulario} className="login100-form-btn">
                        Iniciar Sesión
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
                        ¿Crea una Cuenta?
                    </span>

                    <Link to='/registrar' className="txt3">
                        Registrar
                    </Link>
                </div>
            </AuthLayout>
        </>
    )
}

export default Login