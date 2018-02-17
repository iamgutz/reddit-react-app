import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import _ from 'lodash'
import Button from 'material-ui/Button'
import { fetchPosts } from '../../actions/posts'
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
      <PostList items={props.posts} />
    }
  </div>
)

const mapStateToProps = state => ({
  posts: state.posts.list,
  fetched: state.posts.fetched
})

const mapDispatchToProps = dispatch => bindActionCreators({
  fetchPosts
}, dispatch)


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home)
