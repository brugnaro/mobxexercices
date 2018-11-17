import { WishListItem, WishList } from '../src/models/WishList'

it('can create a instance of a model', () => {
  const item = WishListItem.create({
    'name': 'Harry Potter',
    'price': 100.00
  })

  expect(item.price).toBe(100.00)
  expect(item.image).toBe('')
})

it('can create a wishlist', () => {
  const list = WishList.create({
    items: [
      {
        'name': 'Harry Potter',
        'price': 100.00
      }
    ]
  })

  expect(list.items.length).toBe(1)
  expect(list.items[0].price).toBe(100.0)
})
