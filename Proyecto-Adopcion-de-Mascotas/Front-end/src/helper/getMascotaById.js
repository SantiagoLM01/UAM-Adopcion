import { useEffect } from "react";
import useFetch from "../hooks/useFetch"




export const getMascotaById = (id) => {

    const {filterAnimals, FetchAnimalData} = useFetch();

    return filterAnimals.find(mascota => mascota.id === id)
}