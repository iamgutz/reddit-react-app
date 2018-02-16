import update from 'immutability-helper'

export const fetchedJobsSuccess = (state, { payload }) => update(state, {
  list: { $set: payload },
  fetched: { $set: true }
})
