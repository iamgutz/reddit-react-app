import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import _ from 'lodash'
import Button from 'material-ui/Button'
import { fetchPosts, fetchMorePosts, selectPost } from '../../actions/posts'
import { navigateTo } from '../../actions/navigation'
import PostList from '../../components/PostList'

class Home extends Component {
  constructor(){
    super()
    this.handleFetchMore = this.handleFetchMore.bind(this)
  }

  handleFetchMore = () => {
    const { fetchMorePosts, nextPage } = this.props
    console.log('handleFetchMore')
    fetchMorePosts(nextPage)
  }

  componentWillMount() {
    if(_.isEmpty(this.props.posts)) this.props.fetchPosts()
  }

  render() {
    const { props } = this

    return (
      <div>
        <h1>Top scoring links</h1>

        {_.isEmpty(props.posts) && props.fetched &&
          <p>Results not found.</p>
        }

        {!_.isEmpty(props.posts) &&
          <PostList
            items={props.posts}
            onPostSelect={props.selectPost}
            loadMorePosts={this.handleFetchMore}
            morePosts={props.morePosts}
            navigateTo={props.navigateTo} />
        }
      </div>
    )
  }
}

const mapStateToProps = state => ({
  posts: state.posts.list,
  fetched: state.posts.fetched,
  nextPage: state.posts.nextPage,
  morePosts: state.posts.morePosts
})

const mapDispatchToProps = dispatch => bindActionCreators({
  fetchPosts,
  fetchMorePosts,
  selectPost,
  navigateTo
}, dispatch)


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home)
