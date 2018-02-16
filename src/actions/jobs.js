import * as types from '../constants/actionTypes'
import request from '../utils/request'

export const fetchJobs = () => {
  return dispatch => {
    dispatch({
      type: types.FETCH_JOBS_REQUEST
    })

    request({
      method: 'GET',
      url: 'https://crossorigin.me/https://jobs.github.com/positions.json?description=web&location=california',
      errorMessage: 'An error occured while processing the request.',
      onSuccess ({ data }) {
        dispatch({
          type: types.FETCH_JOBS_SUCCESS,
          payload: data
        })
      },
      onFailure () {
        dispatch({
          type: types.FETCH_JOBS_FAILURE
        })
      }
    })
  }
}
