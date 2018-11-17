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
}).actions(self => ({
  changeName (newName) {
    self.name = newName
  },
  changePrice (newPrice) {
    self.price = newPrice
  },
  changeImage (newImage) {
    self.image = newImage
  }
}))

export const WishList = types.model({
  items: types.optional(types.array(WishListItem), [])
}).actions(self => ({
  add (item) {
    self.items.push(item)
  }
}))
