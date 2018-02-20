import React from 'react'
import moment from 'moment'
import { Separator, HeaderCaption, Header } from './styles'

const PostCardHeader = props => {
  const { data } = props
  const timestamp = moment(moment.unix(data.created_utc).utc().format()).fromNow()

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
        {timestamp}
      </HeaderCaption>
      <Separator />
      <HeaderCaption variant='caption' align='left'>
        {`u/${data.author}`}
      </HeaderCaption>
    </Header>
  )
}

export default PostCardHeader
