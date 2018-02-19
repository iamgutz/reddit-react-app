import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import _ from 'lodash'
import Button from 'material-ui/Button'
import { navigateTo } from '../../actions/navigation'
import PostDetails from '../../components/PostDetails'

const Details = props => (
  <PostDetails post={props.selectedPost} navigateTo={props.navigateTo} />
)

const mapStateToProps = state => ({
  selectedPost: state.posts.selected
})

const mapDispatchToProps = dispatch => bindActionCreators({
  navigateTo
}, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Details)
