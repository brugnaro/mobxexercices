import { types } from 'mobx-state-tree'

// const data = {
//   "name": "Harry Potter",
//   "price": 100.00,
//   "image": 'https://hpmedia.bloomsbury.com/rep/s/9781408855898_309038.jpeg'
// }

export const WishListItem = types.model({
  name: types.string,
  price: types.number,
  image: ''
})

export const WishList = types.model({
  items: types.optional(types.array(WishListItem), [])
})
