import Usuario from '../models/Usuarios.js'
import generarId from "../helpers/generarid.js"
import emailRegistro from '../helpers/emailRegistro.js'
import emailCambiarPassword from '../helpers/emailCambiarPassword.js'


const registrar = async (req, res) => {

    const { email, password, username } = req.body
    console.log(email, password, username)
    //Prevenir Usuarios duplicados

    const existeUsuario = await Usuario.findOne({ email })

    if (existeUsuario) {
        const error = new Error('Usuario ya registrado')
        return res.status(400).json({ msg: error.message })
    }



    try {
        //Guardar un nuevo veterinario
        const usuario = new Usuario(req.body)
        const usuarioGuardado = await usuario.save()

        //Enviar el email

        emailRegistro({
            email,
            username,
            token: usuarioGuardado.token
        })

        res.json(usuarioGuardado)

    } catch (error) {
        console.log(error)
    }
}



const confirmar = async (req, res) => {

    const { token } = req.params

    const usuarioExiste = await Usuario.findOne({ token })

    if (!usuarioExiste) {
        const error = new Error('Token No Valido')
        return res.status(404).json({ msg: error.message })
    }
    try {
        usuarioExiste.token = null
        usuarioExiste.confirmado = true
        await usuarioExiste.save()

        res.json('Cuenta Confirmada Correctamente')
    } catch (error) {
        console.log(error)
    }
}

const autenticar = async (req, res) => {

    console.log('autenticando')

    const { email, password } = req.body

    const usuarioExiste = await Usuario.findOne({ email })

    if (!usuarioExiste) {
        const error = new Error('Usuario con ese email no existe')
        return res.status(404).json({ msg: error.message })
    }
    if (usuarioExiste.confirmado === false) {
        const error = new Error('Tu cuenta no ha sido confirmada')
        return res.status(403).json({ msg: error.message })
    }
    if (password !== usuarioExiste.password) {
        const error = new Error('Password Incorrecto')
        return res.status(403).json({ msg: error.message })
    }
    try {
        usuarioExiste.logged = true
        await usuarioExiste.save()
        res.json({
            _id: usuarioExiste._id,
            username: usuarioExiste.username,
            email: usuarioExiste.email,
            logged: usuarioExiste.logged
        })

    } catch (error) {
        console.log(error)
    }

}

const recuperarPassword = async (req, res) => {
    const { email } = req.body

    const usuarioExiste = await Usuario.findOne({ email })

    if (!usuarioExiste) {
        const error = new Error('No existe un Usuario con ese email')
        return res.status(404).json({ msg: error.message })
    }
    try {
        usuarioExiste.token = generarId();
        await usuarioExiste.save();
        emailCambiarPassword({
            email,
            token: usuarioExiste.token
        })
        res.json({ msg: 'Hemos enviado un email con las Instrucciones' })
    } catch (error) {
        console.log(error)
    }
}

const cambiarPassword = async (req, res) => {

    const { new_pass } = req.body

    const { token } = req.params

    const usuarioExiste = await Usuario.findOne({ token })

    if (!usuarioExiste) {
        const error = new Error('No existe un Usuario con ese email')
        return res.status(404).json({ msg: error.message })
    }

    try {
        usuarioExiste.password = new_pass
        usuarioExiste.token = null
        await usuarioExiste.save();
        res.json({ msg: 'El Password se ha cambiado Exitosamente' })
    } catch (error) {
        console.log(error)
    }

}

const logout = async (req, res) => {

    const {loggedUserInfo} = req.body

    const {email} = loggedUserInfo

    const usuarioExiste = await Usuario.findOne({ email })


    try {
        usuarioExiste.logged = false
        await usuarioExiste.save();
    } catch (error) {
        console.log(error)
    }
}





export {
    registrar,
    confirmar,
    autenticar,
    recuperarPassword,
    cambiarPassword,
    logout
}
