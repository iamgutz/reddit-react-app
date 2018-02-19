import React, { Component } from 'react'
import _ from 'lodash'
import renderHTML from 'react-render-html'
import Typography from 'material-ui/Typography'
import Button from 'material-ui/Button'
import { decodeUri, decodeHtmlTags } from '../../utils/decoders'

import { PostImage } from './styles'

class PostDetails extends Component {


  render() {
    const { props } = this
    const previewLargest = _.get(props.post, 'data.preview.images[0].resolutions', []).length - 1
    const postPreviewUrl = decodeUri(_.get(props.post, `data.preview.images[0].resolutions[${previewLargest}].url`))
    const text = _.get(props.post, 'data.selftext') && decodeHtmlTags(decodeUri(props.post.data.selftext_html))

    return (
      <div>
        {props.post &&
          <div>
            <Typography variant='caption'>
              {`r/${props.post.data.subreddit}`}
            </Typography>
            <Typography variant='title'>
              {props.post.data.title}
            </Typography>
            <Typography variant='caption'>
              {`u/${props.post.data.author}`}
            </Typography>
            {postPreviewUrl && <PostImage src={postPreviewUrl} />}
            {text &&
              <Typography variant='body1' dangerouslySetInnerHTML={{ __html: text }} />
            }
          </div>
        }

        {!props.post &&
          <div>
            <Typography variant='subheading'>
              Sorry, post not found, please go back to home and select another one.
            </Typography>
            <Button
              variant='raised'
              color='secondary'
              onClick={() => props.navigateTo('/')}>
              Go back to home
            </Button>
          </div>
        }
      </div>
    )
  }
}

export default PostDetails
