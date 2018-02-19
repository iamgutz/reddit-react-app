import update from 'immutability-helper'
import _ from 'lodash'

export const fetchedPostsSuccess = (state, { payload }) => update(state, {
  list: { $set: payload.posts },
  nextPage: { $set: payload.nextPage },
  fetched: { $set: true }
})

export const fetchedMorePostsSucess = (state, { payload }) => {
  const morePosts = state.list[0].data.id !== payload.posts[0].data.id
  const newList = [
    ...state.list,
    ...payload.posts
  ]

  return update(state, {
    list: { $set: morePosts ? newList : state.list },
    nextPage: { $set: payload.nextPage },
    morePosts: { $set: morePosts },
    fetched: { $set: true }
  })
}

export const selectPostSuccess = (state, { payload }) => {
  const selectedPost = state.list[payload]
  // set clicked post to visited
  const updatedList = Object.assign({}, state.list)
  _.update(updatedList, `[${payload}].data.visited`, () => (true))

  return update(state, {
    list: { $set: updatedList },
    selected: { $set: selectedPost }
  })
}
