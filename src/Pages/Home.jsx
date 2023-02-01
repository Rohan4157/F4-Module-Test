import React, { useEffect } from 'react'
import './Home.css'
import ProductContainer from '../Component/ProductContainer'
import { useDispatch, useSelector } from 'react-redux';
import { addProducts } from '../store/ProductSlice';

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
      const getProducts = async () => {
          const res = await fetch('https://dummyjson.com/products');
          const data = await res.json()
          dispatch(addProducts(data.products))
      }
      getProducts()
  })

  const products = useSelector((state) => state.product.data)
  
  return (
    <div className='homepage'>
      <h1>All Items</h1>
      <ProductContainer products={products}/>
    </div>
  )
}

export default Home