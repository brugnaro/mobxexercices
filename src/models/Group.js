import { types } from 'mobx-state-tree'
import { WishList } from './WishList'

const User = types.model({
  id: types.number,
  name: types.string,
  gender: types.enumeration('gender', ['m', 'f']),
  wishList: types.optional(WishList, {})
})

export const Group = types.model({
  users: types.optional(types.array(User), [])
})
