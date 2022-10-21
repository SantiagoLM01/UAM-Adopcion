import mongoose from "mongoose";
import generarId from "../helpers/generarid.js";


const UsuarioSchema = mongoose.Schema({
    username: {
        type:String,
        required:true,
        trim:true
    } ,
    password: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    telefono: {
        type: String,
        default: null, // No es olbigatorio
        trim: true
    },
    token: {
        type: String,
        default: generarId()
    },
    confirmado: {
        type: Boolean,
        default: false

    },
    logged: {
        type: Boolean,
        default: false
    }


})

const Usuario = mongoose.model('Usuario', UsuarioSchema)



export default Usuario;