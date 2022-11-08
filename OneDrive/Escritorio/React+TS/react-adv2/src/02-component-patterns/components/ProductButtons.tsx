import { useContext } from "react"
import { ProductContext } from "./ProductCard"
import styles from '../styles/styles.module.css'

export interface Props {
    className?: string,
    style?: React.CSSProperties


}

export const ProductButtons = ({className, style}: Props) => {

    const { increment, decrement, counter } = useContext(ProductContext)

    return (

        <div className={`${styles.buttonsContainer} ${className}`}
        style={style}>

            <button onClick={decrement} className={styles.buttonMinus}>-</button>


            <div className={styles.countLabel}>{counter}</div>


            <button onClick={increment} className={styles.buttonAdd}>+</button>

        </div>


    )
}