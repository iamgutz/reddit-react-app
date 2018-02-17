import createReducer from 'redux-createreducer'
import { fetchedPostsSuccess } from './handlers'
import * as types from '../../constants/actionTypes'

const initialState = {
  list: [],
  fetched: false
}

const handlers = {
  [types.FETCH_POSTS_SUCCESS]: fetchedPostsSuccess
}

export default createReducer(initialState, handlers)
