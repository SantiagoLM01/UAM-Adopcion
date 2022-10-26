import styles from '../styles/styles.module.css'
import { createContext } from 'react'
import { useProduct } from '../hooks/useProduct'
import { Props, useProductProps } from '../interfaces/interfaces'


export const ProductContext = createContext({} as useProductProps)

const { Provider } = ProductContext



export const ProductCard = ({ children, product }: Props) => {



    const { counter, decrement, increment } = useProduct()

    return (

        <Provider value={{ counter, decrement, increment, product }}>
            <div className={styles.productCard}>

                {children}

            </div>
        </Provider>
    )
}


