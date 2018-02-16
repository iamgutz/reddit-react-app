import * as types from '../constants/actionTypes'

const timeoutLength = 1000

export const countUp = () => {
  return dispatch => {
    dispatch({
      type: types.COUNT_REQUEST
    })

    setTimeout(() => {
      dispatch({
        type: types.COUNT_INCREASE_SUCCESS,
        payload: 'Increased Count'
      })
    }, timeoutLength)
  }
}

export const countDown = () => {
  return dispatch => {
    dispatch({
      type: types.COUNT_REQUEST
    })

    setTimeout(() => {
      dispatch({
        type: types.COUNT_DECREASE_SUCCESS,
        payload: 'Decreased Count'
      })
    }, timeoutLength)
  }
}
