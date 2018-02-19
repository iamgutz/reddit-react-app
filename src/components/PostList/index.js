import React from 'react'
import _ from 'lodash'
import PostItem from './PostItem'

const PostList = props => _.map(props.items, post => (
  <PostItem post={post}
    onItemSelect={props.onPostSelect}
    navigateTo={props.navigateTo} />
))

export default PostList
