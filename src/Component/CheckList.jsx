import React, { useEffect, useState } from 'react'
import Item from './Item'
import './CheckList.css'
import { useDispatch } from 'react-redux'
import { empty } from '../store/CartSlice'

const CheckList = ({products}) => {
    const [totalAmount, setTotalAmount] = useState(0)

    const dispatch = useDispatch()

    useEffect(()=>{
        let total = 0;
        products.forEach(element => {
            total += element.price
        });
        setTotalAmount(total)
    },[products])

    const checkoutHandler=()=>{
        dispatch(empty())
        alert("All  items have been checked out.")
    }
    return (
        <div className='check-out-container'>
            <h2>Check Out</h2>
            <div className="item">
                {
                    products.map((item,idx)=><Item key={idx} item={item} idx={idx}/>)
                }
            
            </div>
            <div className="total-container">
                <span>Total</span>
                <span>${totalAmount}</span>
            </div>
            <button onClick={checkoutHandler}> Click To Checkout</button>
        </div>
    )
}

export default CheckList