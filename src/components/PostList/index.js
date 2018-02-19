import React from 'react'
import _ from 'lodash'
import InfiniteScroll from 'react-infinite-scroller'
import PostItem from './PostItem'

const PostList = props => (
  <InfiniteScroll
    hasMore={props.morePosts}
    loadMore={props.loadMorePosts}>
    {_.map(props.items, (post, i) => (
      <PostItem post={post}
        key={post.data.id}
        itemIndex={i}
        onItemSelect={props.onPostSelect}
        navigateTo={props.navigateTo} />
    ))}
  </InfiniteScroll>
)

export default PostList
