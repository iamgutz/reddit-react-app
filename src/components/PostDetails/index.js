import React from 'react'
import _ from 'lodash'
import Typography from 'material-ui/Typography'
import Button from 'material-ui/Button'

import { decodeUri, decodeHtmlTags } from '../../utils/decoders'

import PostCommentsCount from '../PostCommentsCount'
import { PostContent, PostImage, PostTitle, PostSubreddit, PostAuthor, PostCard, PostFooter } from './styles'

const PostDetails = (props) => {
  const previewLargest = _.get(props.post, 'data.preview.images[0].resolutions', []).length - 1
  const postPreviewUrl = decodeUri(_.get(props.post, `data.preview.images[0].resolutions[${previewLargest}].url`))
  const text = _.get(props.post, 'data.selftext') && decodeHtmlTags(decodeUri(props.post.data.selftext_html))
  const postEmbeddedMedia = _.get(props.post, 'data.media_embed.content') && decodeHtmlTags(decodeUri(props.post.data.media_embed.content))

  return (
    <div>
      {props.post &&
        <PostContent>
          <PostSubreddit variant='caption'>
            <span role='link' tabIndex={0} onClick={() => { props.navigateBack() }}>
              {`r/${props.post.data.subreddit}`}
            </span>
          </PostSubreddit>


          <PostTitle variant='title'>
            {props.post.data.title}
          </PostTitle>
          <PostAuthor variant='caption'>
            {`u/${props.post.data.author}`}
          </PostAuthor>
          {postPreviewUrl &&
            <PostCard>
              {postEmbeddedMedia &&
                <div dangerouslySetInnerHTML={{ __html: postEmbeddedMedia }} />
              }
              {!postEmbeddedMedia &&
                <PostImage src={postPreviewUrl} />
              }
            </PostCard>
          }
          {text &&
            <Typography variant='body1' dangerouslySetInnerHTML={{ __html: text }} />
          }

          <PostFooter>
            <PostCommentsCount count={props.post.data.num_comments} />
          </PostFooter>
        </PostContent>
      }

      {!props.post &&
        <div>
          <Typography variant='subheading'>
            Sorry, post not found, please go back to home and select another one.
          </Typography>
          <Button
            variant='raised'
            color='secondary'
            onClick={() => props.navigateTo('/')}
          >
            Go back to home
          </Button>
        </div>
      }
    </div>
  )
}

export default PostDetails
