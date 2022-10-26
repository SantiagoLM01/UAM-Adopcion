import { useState } from "react"



export const useProduct = () => {

    const [counter, setCounter] = useState(0)

    const increment = () => {
        setCounter((counter:number) => counter + 1)
    }

    const decrement = () => {
        if (counter === 0) return
        setCounter((counter:number) => counter - 1)
    }


    return{
        counter,
        increment,
        decrement
    }
}