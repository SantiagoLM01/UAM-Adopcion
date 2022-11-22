import { ProductButtons } from "../components/ProductButtons"
import { ProductCard } from "../components"
import { ProductImage } from "../components/ProductImage"
import { ProductTitle } from "../components/ProductTitle"
import '../styles/custom-styles.css'
import { useShoppingCart } from "../hooks/useShoppingCart"



const ShoppingPage = () => {

    const {products,shoppingCard,onProductCountChange} = useShoppingCart()

    return (
        <div>

            <h1>Shopping Store</h1>
            <hr />

            <div style={{
                display: 'flex', flexDirection: 'row',
                flexWrap: 'wrap'
            }}>
                {products.map(producto => (
                    <ProductCard key={producto.id} className="bg-dark" product={producto} onChange={ onProductCountChange} value={shoppingCard[producto.id]?.count ? shoppingCard[producto.id].count : 0}>
                        <ProductImage className="custom-image"></ProductImage>
                        <ProductTitle style={{ fontWeight: "bold" }} className="text-white text-bold" title={''}></ProductTitle>
                        <ProductButtons className="custom-buttons"></ProductButtons>
                    </ProductCard>
                ))}
            </div>

            <div className="shopping-card">
                {Object.entries(shoppingCard).map(([key, value]) => (
                    <ProductCard key={key} style={{ width: '100px' }} className="bg-dark" product={value} value={value.count} onChange={onProductCountChange}>
                        <ProductImage className="custom-image"></ProductImage>
                        <ProductTitle style={{ fontWeight: "bold" }} className="text-white text-bold" title={''}></ProductTitle>
                        <ProductButtons className="custom-buttons"></ProductButtons>
                    </ProductCard>
                ))}
            </div>
            <div>
                <code>
                    {JSON.stringify(shoppingCard)}
                </code>
            </div>
        </div>
    )
}

export default ShoppingPage
