import React, { Component } from 'react'
import _ from 'lodash'
import { CardContent, CardMedia } from 'material-ui/Card'
import Typography from 'material-ui/Typography'
import { decodeUri } from '../../utils/decoders'
import { slugString } from '../../utils/formatters'

import PostCardHeader from './PostCardHeader'
import { PostCard, Container, Thumbnail, Details, Content, PreviewImage } from './styles'

class PostItem extends Component {
  constructor(){
    super()
    this.state = {
      preview: false
    }

    this.togglePreview = this.togglePreview.bind(this)
    this.handleOnItemClick = this.handleOnItemClick.bind(this)
  }

  togglePreview = () => {
    this.setState({
      preview: !this.state.preview && true
    })
  }

  handleOnItemClick = () => {
    this.props.onItemSelect(this.props.post.data.id)
    this.props.navigateTo(`details/${slugString(this.props.post.data.title)}`)
  }

  render() {
    const { post, onItemSelect } = this.props

    return (
      <PostCard>
        <Container>
          {post.data.thumbnail && post.data.thumbnail_height &&
            <Thumbnail
              image={post.data.thumbnail}
              title="Live from space album cover" onClick={this.togglePreview} />
          }

          <Details>
            <PostCardHeader data={post.data} />
            <div>
              <Typography
                variant='subheading'
                align='left'
                onClick={this.handleOnItemClick}
                dangerouslySetInnerHTML={{ __html: post.data.title }} />
            </div>
          </Details>
        </Container>
        <Container>
          {post.data.preview && this.state.preview &&
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
