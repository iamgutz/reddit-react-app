import _ from 'lodash'
import * as types from '../constants/actionTypes'
import request from '../utils/request'

export const fetchPosts = () => {
  return dispatch => {
    dispatch({
      type: types.FETCH_POSTS_REQUEST
    })

    request({
      method: 'GET',
      url: 'https://www.reddit.com/r/movies/top.json',
      errorMessage: 'An error occured while processing the request.',
      onSuccess ({ data }) {
        const posts = _.get(data, 'data.children', [])

        dispatch({
          type: types.FETCH_POSTS_SUCCESS,
          payload: {
            posts: posts,
            nextPage: _.get(data, 'data.after', null)
          }
        })
      },
      onFailure () {
        dispatch({
          type: types.FETCH_POSTS_FAILURE
        })
      }
    })
  }
}

export const fetchMorePosts = (nextPage) => {
  return dispatch => {
    request({
      method: 'GET',
      url: `https://www.reddit.com/r/movies/top.json?after=${nextPage}`,
      errorMessage: 'An error occured while processing the request.',
      onSuccess ({ data }) {
        const posts = _.get(data, 'data.children', [])

        dispatch({
          type: types.FETCH_MORE_POSTS_SUCCESS,
          payload: {
            posts: posts,
            nextPage: _.get(data, 'data.after', null)
          }
        })
      },
      onFailure () {
        dispatch({
          type: types.FETCH_MORE_POSTS_FAILURE
        })
      }
    })
  }
}

export const selectPost = (itemIndex) => {
  return dispatch => {
    dispatch({
      type: types.SELECT_POST_SUCCESS,
      payload: itemIndex
    })
  }
}
