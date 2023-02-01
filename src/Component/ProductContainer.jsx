
import Product from './Product'
import './ProductContainer.css'

const ProductContainer = ({products}) => {  
    return (
        <div className='product-container'>
            
            {
                products?
                products.map((item)=>  <Product product={item} key={item.id}/>)
                :''
            }
        </div>
    )
}

export default ProductContainer