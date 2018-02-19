import styled from 'styled-components'
import Typography from 'material-ui/Typography'
import Card from 'material-ui/Card'

export const PostContent = styled.div`
  text-align: left;
`
export const PostTitle = styled(Typography)`
  color: #a5a4a4 !important;
  padding-bottom: 8px;
`
export const PostCard = styled(Card)`
  padding: 10px;
`
export const PostImage = styled.img`
  width: 100%;
`
export const PostSubreddit = styled(Typography)`
  color: #0079d3 !important;
  padding: 8px 0px;
`
export const PostAuthor = styled(Typography)`
  padding: 8px 0px;
`
export const PostFooter = styled.div`
  padding: 16px 0px;
  text-align: left;
`
