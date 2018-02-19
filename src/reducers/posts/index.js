import createReducer from 'redux-createreducer'
import { fetchedPostsSuccess, selectPostSuccess, fetchedMorePostsSucess } from './handlers'
import * as types from '../../constants/actionTypes'

const initialState = {
  list: [],
  fetched: false,
  selected: null,
  lastItemId: null,
  morePosts: true
}

const handlers = {
  [types.FETCH_POSTS_SUCCESS]: fetchedPostsSuccess,
  [types.FETCH_MORE_POSTS_SUCCESS]: fetchedMorePostsSucess,
  [types.SELECT_POST_SUCCESS]: selectPostSuccess
}

export default createReducer(initialState, handlers)
