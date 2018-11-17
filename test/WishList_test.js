import { getSnapshot, onPatch } from 'mobx-state-tree'
import { reaction } from 'mobx'
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

it('can add new items - 2', () => {
  const list = WishList.create()
  const states = []
  onPatch(list, patch => {
    states.push(patch)
  })

  list.add({
    name: 'Cherston',
    price: 10
  })

  expect(list.items.length).toBe(1)
  expect(list.items[0].name).toBe('Cherston')
  list.items[0].changeName('The Lord Of Rings')
  expect(list.items[0].name).toBe('The Lord Of Rings')

  expect(getSnapshot(list)).toEqual({
    items: [
      {
        name: 'The Lord Of Rings',
        price: 10,
        image: ''
      }
    ]
  })

  expect(getSnapshot(list)).toMatchSnapshot()

  expect(states).toMatchSnapshot()
})

it('can calculate the total price of a whishlist', () => {
  const list = WishList.create({
    items: [
      {
        name: 'Machine Gun',
        price: 7.35,
        image: 'https://www.google.com.br/url?sa=i&source=images&cd=&cad=rja&uact=8&ved=2ahUKEwiW1Jjpq9zeAhXBf5AKHe6NCa4QjRx6BAgBEAU&url=http%3A%2F%2Fwww.machinegunbooks.com%2F&psig=AOvVaw1SP1vcijiOscR87P74P2lJ&ust=1542575513271311'
      },
      {
        name: 'Lego Mindstorms',
        price: 349.95,
        image: 'https://www.google.com.br/url?sa=i&source=images&cd=&cad=rja&uact=8&ved=2ahUKEwiJ8tGQrNzeAhXBF5AKHfwYDi4QjRx6BAgBEAU&url=https%3A%2F%2Fwww.penguin.co.nz%2Fbooks%2Fthe-lego-mindstorms-ev3-laboratory-9781593275334&psig=AOvVaw1df0wWOaddadqNvNEzyZeP&ust=1542575617640994'
      }
    ]
  })

  expect(list.totalPrice).toBe(357.3)

  let changed = 0
  reaction(() => list.totalPrice, () => changed++)

  expect(changed).toBe(0)
  console.log(list.totalPrice)
  list.items[0].changeName('Test')
  expect(changed).toBe(0)
  list.items[0].changePrice(10)
  expect(changed).toBe(1)
})
