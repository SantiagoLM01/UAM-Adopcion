import { ProductButtons } from "../components/ProductButtons"
import { ProductCard } from "../components"
import { ProductImage } from "../components/ProductImage"
import { ProductTitle } from "../components/ProductTitle"


const product = {
    id: '1',
    title: 'Coffee Mug - Card',
    img: './coffee-mug.png'
}


const ShoppingPage = () => {

    return (
        <div>

            <h1>Shopping Store</h1>
            <hr />

            <div style={{
                display: 'flex', flexDirection: 'row',
                flexWrap: 'wrap'
            }}>
                <ProductCard product={product}>
                    <ProductCard.Image ></ProductCard.Image>
                    <ProductCard.Title></ProductCard.Title>
                    <ProductCard.Buttons ></ProductCard.Buttons>
                </ProductCard>
                <ProductCard product={product}>
                    <ProductImage ></ProductImage>
                    <ProductTitle title={'Cafe'}></ProductTitle>
                    <ProductButtons ></ProductButtons>
                </ProductCard>
            </div>

        </div>
    )
}

export default ShoppingPage