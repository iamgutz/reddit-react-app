import React from 'react'
import { NavLink } from 'react-router-dom'
import { MenuList, MenuItem } from './styles'

const Menu = () => (
  <nav>
    <MenuList>
      <MenuItem>
        <NavLink exact to='/' activeClassName='active'>Home</NavLink>
      </MenuItem>
      <MenuItem>
        <NavLink exact to='/jobs' activeClassName='active'>Jobs</NavLink>
      </MenuItem>
      <MenuItem>
        <NavLink exact to='/counter' activeClassName='active'>Counter</NavLink>
      </MenuItem>
    </MenuList>
  </nav>
)

export default Menu
