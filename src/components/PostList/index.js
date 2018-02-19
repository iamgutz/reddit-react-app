import React from 'react'
import _ from 'lodash'
import PostItem from './PostItem'

const PostList = props => _.map(props.items, (post, i) => (
  <PostItem post={post}
    key={post.data.id}
    itemIndex={i}
    onItemSelect={props.onPostSelect}
    navigateTo={props.navigateTo} />
))

export default PostList
