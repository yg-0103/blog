import { flexCenter, makeGradient } from '@styles/styleUtill'
import styled, { css } from 'styled-components'

export const Container = styled.ul`
  ${flexCenter};
  flex-wrap: wrap;
  padding: 0 2rem;
  row-gap: 1rem;
`

export const TabItem = styled.li<{ active: boolean }>`
  padding: 1rem 1.5rem;
  border-radius: 1rem;
  font-size: 1.2rem;
  color: #fff;
  cursor: pointer;
  letter-spacing: 0.1rem;
  background-color: #ddd;

  & + & {
    margin-left: 1rem;
  }

  ${({ active }) =>
    active &&
    css`
      box-shadow: 0 0 0.6rem rgba(0, 0, 0, 0.4);
      background-image: ${makeGradient('#2cdb93', '#36c6ff', '180deg')};
    `}
`
