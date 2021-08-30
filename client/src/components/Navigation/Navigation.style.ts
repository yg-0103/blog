import styled from 'styled-components'

export const Nav = styled.nav`
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex: 1;
  max-width: 60rem;
`

export const NavItem = styled.a`
  position: relative;
  display: block;
  padding: 0.5rem;
  font-size: 2rem;
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
    background-color: #36c6ff;
    transition: 0.3s;
  }

  &:hover {
    text-shadow: 0 0 0.2rem rgba(0, 0, 0, 0.1);
    color: #36c6ff;
    &::after {
      width: 100%;
    }
  }
`
