import express from "express";
import { autenticar, confirmar, registrar, recuperarPassword, cambiarPassword,logout } from "../controllers/usuarioController.js";



const router = express.Router();


//Area publica

router.post('/', registrar)
router.get('/confirmar/:token', confirmar)

router.post('/login', autenticar)

router.post('/recuperarPassword', recuperarPassword)

router.post('/recuperarPassword/:token', cambiarPassword)

router.post('/cerrarSesion', logout)






export default router;