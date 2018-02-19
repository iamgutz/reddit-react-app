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
    this.props.onItemSelect(this.props.itemIndex)
    this.props.navigateTo(`details/${slugString(this.props.post.data.title)}`)
  }

  render() {
    const { post, onItemSelect } = this.props
    const previewSmallest = _.get(post, 'data.preview.images[0].resolutions', []).length - 1
    const postPreviewUrl = _.get(post, `data.preview.images[0].resolutions[${previewSmallest}].url`)
    const protocolRegexp = /http|https/g
    const postThumbnail = post.data.thumbnail && protocolRegexp.test(post.data.thumbnail) && post.data.thumbnail

    return (
      <PostCard className={post.data.visited && 'visited'}>
        <Container>
          {postThumbnail && post.data.thumbnail_height &&
            <Thumbnail
              image={postThumbnail}
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
          {postPreviewUrl && this.state.preview &&
            <PreviewImage
              image={decodeUri(postPreviewUrl)} />
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
