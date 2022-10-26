import { useContext } from "react"
import { ProductContext } from "./ProductCard"
import styles from '../styles/styles.module.css'

export const ProductButtons = () => {

    const { increment, decrement, counter } = useContext(ProductContext)

    return (

        <div className={styles.buttonsContainer}>

            <button onClick={decrement} className={styles.buttonMinus}>-</button>


            <div className={styles.countLabel}>{counter}</div>


            <button onClick={increment} className={styles.buttonAdd}>+</button>

        </div>


    )
}