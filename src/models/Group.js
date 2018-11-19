import { types } from 'mobx-state-tree'
import { WishList } from './WishList'

const User = types
  .model({
    id: types.number,
    name: types.string,
    gender: types.enumeration('gender', ['m', 'f']),
    wishList: types.optional(WishList, {})
  })
  .actions(self => ({
    async getSuggestions () {
      const response = await window.fetch(
        `http://localhost:3001/suggestions_${self.gender}`
      )
      const suggestions = await response.json()
      self.addSuggestions(suggestions)
    },
    addSuggestions (suggestions) {
      self.wishList.items.push(...suggestions)
    }
  }))

export const Group = types.model({
  users: types.optional(types.array(User), [])
})
