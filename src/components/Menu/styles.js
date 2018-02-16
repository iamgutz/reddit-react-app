import styled from 'styled-components'

export const MenuList = styled.ul`
  list-style: none;
`

export const MenuItem = styled.li`
  display: inline-block;
  padding: 0px 5px;
  color: #fff;

  > a {
    color: inherit;
    text-decoration: none;

    &.active { color: #83D8F7; }

    :hover {
      color: #8ba8b2;
    }
  }
`
