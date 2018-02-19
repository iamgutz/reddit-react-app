import React, { Component } from 'react'
import _ from 'lodash'
import { CardContent, CardMedia } from 'material-ui/Card'
import Typography from 'material-ui/Typography'
import { decodeUri } from '../../utils/decoders'

//import PostCardHeader from './PostCardHeader'
//import { PostCard, Container, Thumbnail, Details, Content, PreviewImage } from './styles'

const PostDetails = props => {
  return (
    <div>
      {`r/${props.post.data.subreddit}`}
    </div>
  )
}

export default PostDetails
