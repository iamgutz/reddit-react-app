import update from 'immutability-helper'
import _ from 'lodash'

export const fetchedPostsSuccess = (state, { payload }) => update(state, {
  list: { $set: payload },
  fetched: { $set: true }
})

export const selectPostSuccess = (state, { payload }) => {
  const selectedPost = _.find(state.list, { data: { id: payload } } )
  const postIndex = _.findIndex(state.list, { data: { id: payload } } )
  // set clicked post to visited
  const updatedList = Object.assign({}, state.list)
  _.update(updatedList, `[${postIndex}].data.visited`, () => (true))

  return update(state, {
    list: { $set: updatedList },
    selected: { $set: selectedPost }
  })
}
