import React from 'react'
import './Item.css'

const Item = ({idx , item}) => {
  return (
    <div className='item-container'>
        <span className='name-container'>{`${idx+1}. ${item.title}`}</span>
        <span>${item.price}</span>
    </div>
  )
}

export default Item