import styled, { css } from 'styled-components'
import { gradientText, makeGradient } from '@styles/styleUtill'

export const Nav = styled.nav`
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex: 1;
  max-width: 60rem;
`

export const NavItem = styled.a<{ active: boolean }>`
  position: relative;
  display: block;
  padding: 0.5rem;
  font-size: 1.6rem;
  font-weight: bold;
  color: rgba(0, 0, 0, 0.5);

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    height: 0.2rem;
    width: 0;
    transition: 0.3s;
    background-image: ${makeGradient('#2cdb93', '#36c6ff', '180deg')};
    box-shadow: 0 0.2rem 0.2rem rgba(0, 0, 0, 0.2);
  }

  &:hover {
    text-shadow: 0.2rem 0.2rem 0.2rem rgba(100, 100, 100, 0.2);
    ${gradientText('#2cdb93', '#36c6ff', '180deg')}

    &::after {
      width: 100%;
    }
  }

  ${({ active }) =>
    active &&
    css`
      text-shadow: 0.2rem 0.2rem 0.2rem rgba(100, 100, 100, 0.2);
      ${gradientText('#2cdb93', '#36c6ff', '180deg')}

      &::after {
        width: 100%;
      }
    `}
`
