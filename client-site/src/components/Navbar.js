import React from 'react'

import { Badge } from '@material-ui/core'
import {
  NotificationsNone,
  ShoppingCartOutlined,
  SearchOutlined,
  PersonOutlineOutlined,
} from '@material-ui/icons'

import { ReactComponent as Logo } from '../assets/logo.svg'

import {
  Container,
  Wrapper,
  Left,
  Center,
  MenuNav,
  Right,
  MenuItem,
  Items,
} from './Navbar_elements'

const NavBar = () => {
  return (
    <Container>
      <Wrapper>
        <Left>
          <Logo
            style={{
              width: '150',
              height: '70',
              cursor: 'pointer',
              paddingLeft: '10%',
            }}
          />
        </Left>
        <Center>
          <MenuNav>
            <Items>Home</Items>
          </MenuNav>
          <MenuNav>
            <Items>Product</Items>
          </MenuNav>
          <MenuNav>
            <Items>News</Items>
          </MenuNav>
          <MenuNav>
            <Items>Contact</Items>
          </MenuNav>
        </Center>
        <Right>
          <MenuItem>
            <Badge badgeContent={4} color="primary">
              <NotificationsNone color="action" />
            </Badge>
          </MenuItem>
          <MenuItem>
            <Badge badgeContent={1} color="primary">
              <ShoppingCartOutlined color="action" />
            </Badge>
          </MenuItem>
          <MenuItem>
            <SearchOutlined />
          </MenuItem>
          <MenuItem>
            <PersonOutlineOutlined />
          </MenuItem>
        </Right>
      </Wrapper>
    </Container>
  )
}

export default NavBar
