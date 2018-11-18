import { Component } from 'react'
import WishListView from './WishListView'
import '../assets/css/App.css'

export default class App extends Component {
  render () {
    return (
      <div>
        <h4>Wish List</h4>
        <WishListView wishList={this.props.wishList} />
      </div>
    )
  }
}
