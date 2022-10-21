import nodemailer from 'nodemailer'

const emailCambiarPassword = async (datos) => {


    const transport = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.GMAIL_USER,
            pass: process.env.GMAIL_APP_PASS
        }
    })



    const { email, token } = datos
    const info = await transport.sendMail({
        from: 'UAM - Adopcion de Mascotas',
        to: email,
        subject: 'Cambia tu password en UAM',
        text: 'Cambia tu password en UAM',
        html: `<p> Hola, cambia tu password en UAM.</p>
        <p> Cambia tu password, solo debes cambiarla en el siguiente enlace:<a href="${process.env.FRONTEND_URL}/recuperarPassword/${token}">Cambiar Password</a></p>
        
        <p> Si no solicitaste el cambio de password, puedes ignorar este mensaje</p>`
    })

    console.log('Mensaje enviado: %s', info.messageId)
    //Enviar el email

}

export default emailCambiarPassword