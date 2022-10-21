import { useState } from 'react';
import { Link } from 'react-router-dom';
import AuthLayout from '../layouts/AuthLayout'
import axios from 'axios'


const Registrar = () => {

    const [alerta, SetAlerta] = useState({
        msg: '',
        hasError: false,
        display: 'd-none'
    })
    const [userInfo, SetUserInfo] = useState({
        username: '',
        email: '',
        password: '',
        repetirPassword: ''
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

        if (userInfo.email === '' || userInfo.password === '' || userInfo.username === '', userInfo.repetirPassword === '') {
            SetAlerta({
                msg: 'Todos Los Campos Son Obligatorios',
                hasError: true
            })
            return
        } if (userInfo.password !== userInfo.repetirPassword) {
            SetAlerta({
                msg: 'Los Password no Coinciden',
                hasError: true
            })
            return
        } else {
            try {
                const {username,email,password} = userInfo
                const respuesta = await axios.post('https://adopcionsanti.herokuapp.com/api/usuarios',{username,email,password})
                SetAlerta({
                    msg: 'Registrado Correctamente, Te hemos enviado un email para la confirmacion de la cuenta',
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
    }


    return (
        <AuthLayout pagina={'Registrarse'}>

            <div className="wrap-input100 validate-input m-b-16" data-validate="Please enter username">
                <input value={userInfo.username} onChange={(e) => onInputChange(e)} className="input100" type="text" name="username" placeholder="Username" />
                <span className="focus-input100"></span>
            </div>
            <div className="wrap-input100 validate-input m-b-16" data-validate="Please enter username">
                <input value={userInfo.email} onChange={(e) => onInputChange(e)} className="input100" type="text" name="email" placeholder="Tu Email" />
                <span className="focus-input100"></span>
            </div>
            <div className="wrap-input100 validate-input m-b-16" data-validate="Please enter username">
                <input value={userInfo.password} onChange={(e) => onInputChange(e)} className="input100" type="password" name="password" placeholder="Password" />
                <span className="focus-input100"></span>
            </div>

            <div className="wrap-input100 validate-input" data-validate="Please enter password">
                <input value={userInfo.RepetirPassword} onChange={(e) => onInputChange(e)} className="input100" type="password" name="repetirPassword" placeholder="Repite tu Password" />
                <span className="focus-input100"></span>
            </div>

            <div className="container-login100-form-btn mt-3">
                <button onClick={validarFormulario} className="login100-form-btn">
                    Registrarse
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
                    ¿Ya tienes una cuenta?
                </span>

                <Link to='/login' className="txt3">
                    Login
                </Link>
            </div>


        </AuthLayout>


    )
}

export default Registrar