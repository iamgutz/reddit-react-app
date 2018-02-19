import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import _ from 'lodash'
import Button from 'material-ui/Button'
import { fetchPosts, selectPost } from '../../actions/posts'
import { navigateTo } from '../../actions/navigation'
import PostList from '../../components/PostList'

const Home = props => (
  <div>
    <h1>Top scoring links</h1>
    {_.isEmpty(props.posts) && !props.fetched &&
      <Button
        onClick={() => props.fetchPosts()}
        variant="raised"
        color="secondary">
        Load data
      </Button>
    }

    {_.isEmpty(props.posts) && props.fetched &&
      <p>Results not found.</p>
    }

    {!_.isEmpty(props.posts) &&
      <PostList
        items={props.posts}
        onPostSelect={props.selectPost}
        navigateTo={props.navigateTo} />
    }
  </div>
)

const mapStateToProps = state => ({
  posts: state.posts.list,
  fetched: state.posts.fetched
})

const mapDispatchToProps = dispatch => bindActionCreators({
  fetchPosts,
  selectPost,
  navigateTo
}, dispatch)


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home)
