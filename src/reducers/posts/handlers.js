import update from 'immutability-helper'

export const fetchedPostsSuccess = (state, { payload }) => update(state, {
  list: { $set: payload },
  fetched: { $set: true }
})
