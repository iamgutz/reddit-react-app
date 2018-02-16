import update from 'immutability-helper'

export const countRequested = (state) => update(state, {
  isCounting: { $set: true }
})

export const decreaseCount = (state, {payload}) => update(state, {
  result: { $set: payload },
  count: { $set: state.count > 1 ? state.count - 1 : 0},
  isCounting: { $set: false }
})

export const increaseCount = (state, {payload}) => update(state, {
  result: { $set: payload },
  count: { $set: state.count + 1 },
  isCounting: { $set: false }
})
