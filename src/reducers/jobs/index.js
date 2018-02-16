import createReducer from 'redux-createreducer'
import { fetchedJobsSuccess } from './handlers'
import * as types from '../../constants/actionTypes'

const initialState = {
  list: [],
  fetched: false
}

const handlers = {
  [types.FETCH_JOBS_SUCCESS]: fetchedJobsSuccess
}

export default createReducer(initialState, handlers)
