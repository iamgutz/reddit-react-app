import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import _ from 'lodash'
import Button from 'material-ui/Button'
import { fetchPosts, selectPost } from '../../actions/posts'
import PostDetails from '../../components/PostDetails'

const Details = props => (
  <PostDetails post={props.selectedPost} />
)

const mapStateToProps = state => ({
  selectedPost: state.posts.selected
})

const mapDispatchToProps = dispatch => bindActionCreators({
  fetchPosts,
  selectPost
}, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Details)
