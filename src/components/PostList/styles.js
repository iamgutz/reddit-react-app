import styled from 'styled-components'
import Card, { CardMedia, CardContent } from 'material-ui/Card'
import Typography from 'material-ui/Typography'

export const PostCard = styled(Card)`
  margin-bottom: 5px;

  &.visited {
    h3 {
      color: #ccc;
    }
  }
`
export const Thumbnail = styled(CardMedia)`
  width: 150px;
  height: 150px;
  flex: 1 0 auto;
  flex-basis: 25%;
  min-width: 112px;
  max-width: 140px;
  max-height: 93px;
  margin-right: 16px;
`
export const Header = styled.div`
  text-align: left;
  font-size: 11px;
`
export const Container = styled.div`
  display: flex;
  flex-direction: row;
  padding: 16px;
`
export const Details = styled.div``
export const Content = styled(CardContent)`
  flex: 3 3 auto;
  text-align: left;
`
export const HeaderCaption = styled.span`
  display: inline-block !important;
  color: rgba(0, 0, 0, 0.54);
  font-weight: 400;
  font-family: "Roboto", "Helvetica", "Arial", sans-serif;
  line-height: 1.375em;
`
export const Separator = styled.span`
  display: inline-block;
  position: relative;
  top: -1px;
  margin: 0px 5px;

  &:after {
    content: ' ';
    display: inline-block;
    background: #ccccca;
    width: 4px;
    height: 4px;
    border-radius: 50px;
    margin-top: -1px;
  }
`
export const PreviewImage = styled(CardMedia)`
  width: 100%;
  padding-top: 50%;
  background-size: contain !important;
`

export const Footer = styled.div`
  padding: 0px 16px 8px 16px;
  text-align: left;
`
