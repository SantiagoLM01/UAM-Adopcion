import { useEffect, useState } from "react"
import axios from 'axios'


const useFetch =  () => {


    const [fetchAnimals, setFetchAnimals] = useState([])
    const [loading, setLoading] = useState(false);



    const token = 'live_W0DQ0oFhcsIEq48qoGvKtKuxtNUA5ZUpsPUgapXgUoSqynXvVM1wMw5G4HnwdU1J'

     /*     curl -d "grant_type=client_credentials&client_id=jEStR8xGAs9jGiMMWzrBJyZopTIudDjIKApSSYhVX7QH0PwJog&client_secret=2Dw7FZJtknkv4Nrk6JdKsT8wQVQf2ZmSA7jEyTe6" https://api.petfinder.com/v2/oauth2/token */

    const FetchAnimalData = async () => {
        setLoading(true);
        const config = {
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`
            }
        }
        const url = `https://api.thedogapi.com/v1/images/search?size=med&mime_types=jpg&format=json&has_breeds=true&order=RANDOM&page=0&limit=25`



        try {
            const { data } = await axios(url, config)
            setFetchAnimals(data)
            

        } catch (error) {
            console.log(error)
        }
    }


    useEffect(() => {

        FetchAnimalData();

    }, [])


    return {
        fetchAnimals,
        FetchAnimalData,
        loading
    }


}

export default useFetch