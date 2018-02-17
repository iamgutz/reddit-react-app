import React from 'react'
import _ from 'lodash'
import Card, { CardContent, CardMedia } from 'material-ui/Card';

const PostList = props => _.map(props.items, job => (
  <Card>
    <CardMedia
      image={job.data.thumbnail}
      title="Live from space album cover" />
  </Card>
))

export default PostList
