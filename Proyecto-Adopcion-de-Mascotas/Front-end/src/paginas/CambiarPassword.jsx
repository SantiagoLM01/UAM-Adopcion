import axios from 'axios'
import { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import AuthLayout from '../layouts/AuthLayout'

const CambiarPassword = () => {

    const params = useParams();

    const {token} = params

    const [userInfo, SetUserInfo] = useState({
        new_pass: '',
        rnew_pass: ''
    })

    const [alerta, SetAlerta] = useState({
        msg: '',
        hasError: false,
        display: 'd-none'
    })

    const validarFormulario = async (e) => {
        const { new_pass, rnew_pass } = userInfo
        e.preventDefault();
        if (new_pass === '' || rnew_pass === '') {
            SetAlerta({
                msg: 'Todos los campos son Obligatorios',
                hasError: true,
                display: 'd-block'
            })
            return
        } if(new_pass !== rnew_pass){
            SetAlerta({
                msg: 'Los password no coinciden',
                hasError: true,
                display: 'd-block'
            })
            return
        }

        console.log({ new_pass, rnew_pass })
        try {
            const {data} = await axios.post(`https://adopcionsanti.herokuapp.com/api/usuarios/recuperarPassword/${token}`,{new_pass})
            console.log(data)
            SetAlerta({
                msg: data.msg,
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

    const onInputChange = ({ target }) => {
        const { name, value } = target

        SetUserInfo({
            ...userInfo,
            [name]: value
        })
    }


    return (
        <>
            <AuthLayout pagina='Cambiar Password' userInfo={userInfo} SetAlerta={SetAlerta}>

                <div className="wrap-input100 validate-input m-b-16" data-validate="Please enter username">
                    <input value={userInfo.new_pass} onChange={(e) => onInputChange(e)} className="input100" type="password" name="new_pass" placeholder="Nuevo Password" />
                    <span className="focus-input100"></span>
                </div>

                <div className="wrap-input100 validate-input" data-validate="Please enter password">
                    <input value={userInfo.rnew_pass} onChange={(e) => onInputChange(e)} className="input100" type="password" name="rnew_pass" placeholder="Repetir Nuevo Password" />
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

export default CambiarPassword