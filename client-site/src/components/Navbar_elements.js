import styled, { css } from 'styled-components/macro'

export const Container = styled.div`
  height: auto;
`

export const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #f1f1f1;
`

export const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`

export const Center = styled.div`
  flex: 1;
  text-align: center;
  justify-content: space-between;
  align-items: center;
  display: flex;
`

export const MenuNav = styled.div`
  text-transform: uppercase;
  padding: 15px 20px;
  cursor: pointer;
`

export const Items = styled.a`
  text-decoration: none;
  color: #555;
  font-weight: 500;
  border-bottom: 0.3px solid transparent;
  transition: all 0.2s ease-out;

  &:hover {
    border-bottom: 0.3px solid black;
  }
`

export const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding-right: 20px;
`

export const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 20px;
`
