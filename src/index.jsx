import { render } from 'react-dom'
import App from './components/App'
import { getSnapshot } from 'mobx-state-tree'
import { WishList } from './models/WishList'

let initialState = {
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
}

let wishList = WishList.create(initialState)

function renderApp () {
  render(<App wishList={wishList} />, document.getElementById('root'))
}

renderApp()

if (module.hot) {
  module.hot.accept(['./components/App'], () => {
    // new components
    renderApp()
  })

  module.hot.accept(['./models/WishList'], () => {
    // new model definitions
    const snapshot = getSnapshot(wishList)
    wishList = WishList.create(snapshot)
    renderApp()
  })
}
