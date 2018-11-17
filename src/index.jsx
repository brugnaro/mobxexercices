import { render } from 'react-dom'
import { AppContainer } from 'react-hot-loader'
import App from './components/App'

import { WishList } from './models/WishList'

const wishList = WishList.create({
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

const root = document.getElementById('root')
const load = () => render((
  <AppContainer>
    <App
      whishList={wishList}
    />
  </AppContainer>
), root)

setInterval(() => {
  wishList.items[0].changePrice(wishList.items[0].price + 1)
}, 1000)

// This is needed for Hot Module Replacement
if (module.hot) {
  module.hot.accept('./components/App', load)
}

load()
