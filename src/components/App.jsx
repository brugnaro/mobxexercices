import { Component } from 'react'
import WishListView from './WishListView'
import '../assets/css/App.css'

class App extends Component {
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
        <button onClick={group.drawLots}>Draw Lots</button>
        <h2>
          {selectedUser && selectedUser.recipient ? selectedUser.recipient : ''}
        </h2>
      </div>
    )
  }

  onSelectUser = () => {
    this.setState({ selectedUser: event.target.value })
  }
}

export default App
