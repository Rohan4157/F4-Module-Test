
import { useDispatch, useSelector } from 'react-redux'
import { addToCart, removeFromCart } from '../store/CartSlice'
import './Product.css'

const Product = ({ product }) => {
  const dispatch = useDispatch()
  const cart = useSelector((state) => state.cart.data);

  let flag = false;
  cart.forEach(element => {
    if (product.id === element.id) {
      flag = true
    }
  });

  const addToCartHandler = () => {
    if (flag) {
      dispatch(removeFromCart(product.id))
    } else {
      dispatch(addToCart(product))
    }
  }

  return (
    <div className='product'>
      <div className="img-container">
        <img src={product.images[0]} alt="" />
      </div>
      <div className="info">
        <span>Name : {product.title}</span>
        <span>Price : ${product.price}</span>
      </div>
      <button onClick={addToCartHandler}>{flag ? "Remove" : "Add to Cart"}</button>
    </div>
  )
}

export default Product