import React from 'react'
import _ from 'lodash'
import InfiniteScroll from 'react-infinite-scroller'
import debounce from '../../utils/debounce'

import PostItem from './PostItem'

const PostList = props => {
  const debouncedLoadMorePosts = debounce(props.loadMorePosts, 500)

  return (
    <InfiniteScroll
      hasMore={props.morePosts}
      loadMore={debouncedLoadMorePosts}>
      {_.map(props.items, (post, i) => (
        <PostItem post={post}
          key={post.data.id}
          itemIndex={i}
          onItemSelect={props.onPostSelect}
          navigateTo={props.navigateTo} />
      ))}
    </InfiniteScroll>
  )
}

export default PostList
