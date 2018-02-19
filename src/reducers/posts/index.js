import createReducer from 'redux-createreducer'
import { fetchedPostsSuccess, selectPostSuccess } from './handlers'
import * as types from '../../constants/actionTypes'

const initialState = {
  list: [],
  fetched: false,
  selected: null
}

const handlers = {
  [types.FETCH_POSTS_SUCCESS]: fetchedPostsSuccess,
  [types.SELECT_POST_SUCCESS]: selectPostSuccess
}

export default createReducer(initialState, handlers)
