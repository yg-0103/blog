import styled, { css } from 'styled-components'
import { gradientText } from '@styles/styleUtill'

export const Nav = styled.nav<{ active: boolean }>`
  position: fixed;
  top: 5.2rem;
  right: 0;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
  background: #fff;
  transition: 0.3s;
  transform: ${({ active }) => `translateX(${active ? 0 : '100%'})`};
  z-index: 1000;
`

export const NavItem = styled.a<{ active: boolean }>`
  width: 100%;
  padding: 1.5rem 2rem;
  font-size: 1.6rem;
  font-weight: bold;
  color: rgba(0, 0, 0, 0.5);

  & + & {
    border-top: 1px solid rgba(0, 0, 0, 0.2);
  }

  ${({ active }) =>
    active &&
    css`
      transition: 0.3s;
      ${gradientText('#2cdb93', '#36c6ff', '180deg')}
    `}
`
