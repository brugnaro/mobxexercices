import { Component } from 'react'
import WishListView from './WishListView'
import '../assets/css/App.css'

export default class App extends Component {
  constructor (props) {
    super()
    this.state = { selectedUser: null }
  }
  render () {
    const { group } = this.props
    const selectedUser = group.users.get(this.state.selectedUser)
    return (
      <div>
        <h4>Wish List</h4>
        <select onChange={this.onSelectUser}>
          <option>- Select User -</option>
          {group.users.map(user => (
            <option key={user.id} value={user.id}>
              {user.name}
            </option>
          ))}
        </select>
        {selectedUser && <WishListView wishList={selectedUser.wishList} />}
        {selectedUser &&
          <button onClick={selectedUser.getSuggestions}>Suggestions</button>}
      </div>
    )
  }

  onSelectUser = () => {
    this.setState({ selectedUser: event.target.value })
  }
}
