import nodemailer from 'nodemailer'

const emailRegistro = async (datos) => {


    const transport = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.GMAIL_USER,
            pass: process.env.GMAIL_APP_PASS
        }
    })



    const { email, username, token } = datos
    const info = await transport.sendMail({
        from: 'UAM - Adopcion de Mascotas',
        to: email,
        subject: 'Comprueba tu cuenta en UAM',
        text: 'Comprueba tu cuenta en UAM',
        html: `<p> Hola ${username}, comprueba tu cuenta en UAM.</p>
        <p> Tu cuenta ya esta lista, solo debes confirmarla en el siguiente enlace:<a href="${process.env.FRONTEND_URL}/confirmar/${token}">Confirmar Cuenta</a></p>
        
        <p> Si tu no creaste esta cuenta, puedes ignorar este mensaje</p>`
    })

    console.log('Mensaje enviado: %s', info.messageId)
    //Enviar el email

}

export default emailRegistro