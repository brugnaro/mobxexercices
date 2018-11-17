import React from 'react'

const WishListItemView = ({ item }) => (
  <li className='item'>
    {item.image && <img src={item.image} />}
    <h4>{item.name}</h4>
    <span>{item.price}</span>
  </li>
)

export default WishListItemView
