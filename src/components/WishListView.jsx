import React from 'react'

import WishListItemView from './WishListItemView'

const WishListView = ({ whishList }) => (
  <div className='list'>
    <ul>
      {whishList.items.map((item, idx) => <WishListItemView key={idx} item={item} />)}
    </ul>
  </div>
)

export default WishListView
