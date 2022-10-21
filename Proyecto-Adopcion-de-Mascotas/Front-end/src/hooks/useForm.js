import { useState } from "react"
const useForm = () => {
  
    const initialForm = {
        name: 'Santiago',
        email: 'santilizarazo2001@hotmail.com'
    }

    const [formState, setFormState] = useState(initialForm)



    const onInputChange = ({ target }) => {
        const { name, value } = target

        setFormState({
            ...formState,
            [name]: value
        })
    }

    const onResetForm = () => {
        setFormState(initialForm)
    }


    return {
        ...formState,
        formState,
        onInputChange,
        onResetForm
    }
}

export default useForm