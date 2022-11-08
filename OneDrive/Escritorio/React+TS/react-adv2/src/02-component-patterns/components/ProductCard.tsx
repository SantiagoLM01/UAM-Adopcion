import styles from '../styles/styles.module.css'
import { createContext, ReactElement } from 'react'
import { useProduct } from '../hooks/useProduct'
import { Product, useProductProps } from '../interfaces/interfaces'


export const ProductContext = createContext({} as useProductProps)

const { Provider } = ProductContext

export interface Props {
    product: Product;
    children?: ReactElement | ReactElement[]
    className?: string,
    style?: React.CSSProperties
}



export const ProductCard = ({ children, product, className, style }: Props) => {



    const { counter, decrement, increment } = useProduct()

    return (

        <Provider value={{ counter, decrement, increment, product }}>
            <div className={`${styles.productCard} ${className}`}
            style={style}>

                {children}

            </div>
        </Provider>
    )
}


