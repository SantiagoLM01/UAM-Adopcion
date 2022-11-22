import { useEffect, useRef, useState } from "react"
import { onChangeArgs, Product } from "../interfaces/interfaces"

interface useProductProps {
    product: Product,
    onChange?: (args: onChangeArgs) => void;
    value?: number
}

export const useProduct = ({ onChange, product, value = 0 }: useProductProps) => {

    const [counter, setCounter] = useState<number>(value);

    const isControlled = useRef(!!onChange)

    console.log(isControlled) 


    const increment = () => {

        if (!isControlled.current) {
            return onChange!({ count: value, product })
        }
        const newValue = counter + 1
        setCounter((counter: number) => newValue)
        onChange && onChange({ count: newValue, product });

    }

    const decrement = () => {
      
        if (counter === 0) return
        const newValue = counter - 1
        setCounter((counter: number) => newValue)
        onChange && onChange({ count: newValue, product });
    }

    useEffect(() => {
        setCounter(value)
    }, [value])
    return {
        counter,
        increment,
        decrement
    }
}