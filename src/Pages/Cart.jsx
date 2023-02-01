import React from 'react'
import { useSelector } from 'react-redux'
import CheckList from '../Component/CheckList'
import ProductContainer from '../Component/ProductContainer'
import './Cart.css'

const Cart = () => {
  const products = useSelector((state)=> state.cart.data)
 
  return (
    <div className='cartpage'>
      <h1>My Cart</h1>
      <div className="container">
        {
          products.length > 0 ?<ProductContainer products={products} />
          :<h2 className='empty-tag'>Cart is Empty</h2>
        }
        <CheckList products={products} />
      </div>
    </div>
  )
}

export default Cart