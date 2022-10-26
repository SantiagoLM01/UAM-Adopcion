import { ReactElement } from "react"

export interface Props {
    product: Product
    children?: ReactElement | ReactElement[]
}

export interface Product {
    id: string,
    title: string,
    img?: string
}

export interface useProductProps {
    increment: () => void,
    decrement: () => void,
    counter: number,
    product: Product
}

export interface ProductCardHOCProps{
    ({ children, product }: Props): JSX.Element,
    Title: ({ title }: {
        title?: string | undefined;
    }) => JSX.Element;
    Image: ({ img }: {
        img?: string | undefined;
    }) => JSX.Element;
    Buttons: () => JSX.Element;
}