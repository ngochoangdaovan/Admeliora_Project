import React from 'react'
import styled from 'styled-components'

import { Badge } from '@material-ui/core'
import {
  Search,
  NotificationsNone,
  ShoppingCartOutlined,
  SearchOutlined,
  PersonOutlineOutlined,
} from '@material-ui/icons'

import { ReactComponent as Logo } from '../assets/logo.svg'

const Container = styled.div`
  height: auto;
  /* position: relative; */
`

const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #f1f1f1;
`

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`

const Center = styled.div`
  flex: 1;
  text-align: center;
  justify-content: space-between;
  align-items: center;
  display: flex;
`

const MenuNav = styled.a`
  text-transform: uppercase;
  padding: 15px 20px;
  cursor: pointer;
  text-decoration: underline 0.15em rgba(0, 0, 0, 0);
  transition: text-decoration-color 300ms;
  &:hover {
    text-decoration-color: rgba(0, 0, 0, 1);
  }
`

const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding-right: 20px;
`

const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 20px;
`

const NavBar = () => {
  return (
    <Container>
      <Wrapper>
        <Left>
          <Logo
            style={{
              width: '40%',
              height: '40%',
              cursor: 'pointer',
              paddingLeft: '10%',
            }}
          />
        </Left>
        <Center>
          <MenuNav>Home</MenuNav>
          <MenuNav>Product</MenuNav>
          <MenuNav>News</MenuNav>
          <MenuNav>Contact</MenuNav>
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
