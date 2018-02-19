import React from 'react'
import ModeCommentIcon from 'material-ui-icons/ModeComment'

import { CommentsCounter, Counter } from './styles'

const PostCommentsCount = props => (
  <CommentsCounter>
    <ModeCommentIcon />
    <Counter variant='caption' align='left'>
      {props.count}
    </Counter>
  </CommentsCounter>
)

export default PostCommentsCount
