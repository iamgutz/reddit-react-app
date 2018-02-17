import React from 'react'
import { Separator, HeaderCaption, Header } from './styles'

const PostCardHeader = props => {
  const { data } = props

  return (
    <Header>
      <HeaderCaption variant='caption' align='left'>
        {`r/${data.subreddit}`}
      </HeaderCaption>
      <Separator />
      <HeaderCaption variant='caption' align='left'>
        {data.domain}
      </HeaderCaption>
      <Separator />
      <HeaderCaption variant='caption' align='left'>
        {`${data.created}h`}
      </HeaderCaption>
      <Separator />
      <HeaderCaption variant='caption' align='left'>
        {`u/${data.author}`}
      </HeaderCaption>
    </Header>
  )
}

export default PostCardHeader
