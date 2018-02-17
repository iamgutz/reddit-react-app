import React, { Component } from 'react'
import _ from 'lodash'
import { CardContent, CardMedia } from 'material-ui/Card'
import Typography from 'material-ui/Typography'
import { decodeUri } from '../../utils/decoders'

import PostCardHeader from './PostCardHeader'
import { PostCard, Container, Thumbnail, Details, Content, PreviewImage } from './styles'

class PostItem extends Component {
  render() {
    const { post } = this.props

    return (
      <PostCard>
        <Container>
          {post.data.thumbnail && post.data.thumbnail_height &&
            <Thumbnail
              image={post.data.thumbnail}
              title="Live from space album cover" />
          }

          <Details>
            <PostCardHeader data={post.data} />
            <div>
              <Typography
                variant='subheading'
                align='left'
                dangerouslySetInnerHTML={{ __html: post.data.title }} />
            </div>
          </Details>
        </Container>
        <Container>
          {post.data.preview &&
            <PreviewImage
              image={decodeUri(post.data.preview.images[0].resolutions[3].url)} />
          }
        </Container>
        <div>
          <Content>
            <Typography variant='caption' align='left'>
              {post.data.num_comments}
            </Typography>
          </Content>
        </div>
      </PostCard>
    )
  }
}

export default PostItem
