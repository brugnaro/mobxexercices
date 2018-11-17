import { getSnapshot, onSnapshot, onPatch } from 'mobx-state-tree'
import { WishListItem, WishList } from '../src/models/WishList'

it('can create a instance of a model', () => {
  const item = WishListItem.create({
    'name': 'Harry Potter',
    'price': 100.00
  })

  expect(item.price).toBe(100.00)
  expect(item.image).toBe('')
  item.changeName('Narnia')
  expect(item.name).toBe('Narnia')
})

it('can create a wishlist - 2', () => {
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

it('can add new items - 2', () => {
  const list = WishList.create()
  const patches = []
  onPatch(list, patch => {
    patches.push(patch)
  })

  list.add({
    name: 'Cherston',
    price: 10
  })

  // expect(list.items.length).toBe(1)
  // expect(list.items[0].name).toBe('Cherston')
  list.items[0].changeName('The Lord Of Rings')
  // expect(list.items[0].name).toBe('The Lord Of Rings')

  // expect(getSnapshot(list)).toEqual({
  //   items: [
  //     {
  //       name: 'The Lord Of Rings',
  //       price: 10,
  //       image: ''
  //     }
  //   ]
  // })

  // expect(getSnapshot(list)).toMatchSnapshot()

  expect(patches).toMatchSnapshot()
})
