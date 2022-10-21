import  express from "express";
import dotenv from 'dotenv'
import cors from 'cors'
import { conectarDB } from "./config/db.js";
import usuariosRoutes from './routes/usuariosRoutes.js'
import mascotasRoutes from './routes/mascotasRoutes.js'



const app = express()

app.use(express.json())

dotenv.config();

conectarDB();
app.use(cors())



const port = process.env.PORT || 5000;


app.listen(port, () => {
    console.log(`Servidor Funcionando en el puerto ${port}`)
})

app.use('/api/usuarios',usuariosRoutes)
app.use('/api/mascotas', mascotasRoutes)
