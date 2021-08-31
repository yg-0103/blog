import styled, { css } from 'styled-components'

export const Header = styled.header`
  box-shadow: 0 5px 5px rgba(0, 0, 0, 0.1);
`

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  max-width: 100rem;
  width: 100%;
  height: 8rem;
  margin: 0 auto;
  padding: 0 2rem;
`

export const CenterBar = styled.div``

export const HamburgerButton = styled.button<{ active: boolean }>`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 3rem;
  height: 3rem;

  &::before,
  &::after,
  ${CenterBar} {
    content: '';
    display: block;
    width: 100%;
    height: 0.7rem;
    background: #36c6ff;
    border-radius: 0.2rem;
    transition: 0.3s;
  }

  ${({ active }) =>
    active &&
    css`
      ${CenterBar} {
        display: none;
      }
      &::after,
      &::before {
        position: absolute;
        top: 40%;
      }

      &::after {
        transform: rotate(220deg);
      }

      &::before {
        transform: rotate(140deg);
      }
    `}
`
