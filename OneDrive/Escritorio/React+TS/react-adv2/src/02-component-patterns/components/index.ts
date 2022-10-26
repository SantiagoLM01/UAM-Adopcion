import {ProductCard as ProductCardHOC} from "./ProductCard";
import { ProductImage } from "./ProductImage";
import { ProductButtons } from "./ProductButtons";
import { ProductTitle } from "./ProductTitle";
import { ProductCardHOCProps } from "../interfaces/interfaces";


export const ProductCard: ProductCardHOCProps = Object.assign(ProductCardHOC , {
    Title: ProductTitle,
    Image: ProductImage,
    Buttons: ProductButtons
})