import mongoose from "mongoose";


const mascotaSchema = mongoose.Schema({


    nombre: {
        type: String,
        required: true

    },
    usuario: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Veterinario" //Relacionar con el modelo de Veterinario

    },
    
},{
    timestamps: true
})

const Mascota = mongoose.model("Mascota",mascotaSchema)

export {
    Mascota
}