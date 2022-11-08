import { ProductButtons } from "../components/ProductButtons"
import { ProductCard } from "../components"
import { ProductImage } from "../components/ProductImage"
import { ProductTitle } from "../components/ProductTitle"
import '../styles/custom-styles.css'


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
                <ProductCard className="bg-dark" product={product}>
                    <ProductCard.Image className="custom-image"></ProductCard.Image>
                    <ProductCard.Title className="text-white text-bold"></ProductCard.Title>
                    <ProductCard.Buttons className="custom-buttons"></ProductCard.Buttons>
                </ProductCard>
                <ProductCard className="bg-dark" product={product}>
                    <ProductImage className="custom-image"></ProductImage>
                    <ProductTitle style={{ fontWeight: "bold" }} className="text-white text-bold" title={'Cafe'}></ProductTitle>
                    <ProductButtons className="custom-buttons"></ProductButtons>
                </ProductCard>
                <ProductCard style={{ backgroundColor: '#70D1F8' }} product={product}>
                    <ProductImage style={{ boxShadow: '10px 10px 10px rgba(0,0,0,0.2)' }}></ProductImage>
                    <ProductTitle title={'Cafe'}></ProductTitle>
                    <ProductButtons style={{
                        display: "flex",
                        justifyContent: 'end'
                    }}></ProductButtons>
                </ProductCard>
            </div>

        </div>
    )
}

export default ShoppingPage