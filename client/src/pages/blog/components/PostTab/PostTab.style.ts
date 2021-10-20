import { flexCenter, makeGradient } from '@styles/styleUtill'
import styled from 'styled-components'

export const Container = styled.ul`
  ${flexCenter}
`

export const TabItem = styled.li`
  padding: 1rem 1.5rem;
  border-radius: 1rem;
  box-shadow: 0 0 0.6rem rgba(0, 0, 0, 0.4);
  font-size: 2rem;
  color: #fff;
  background-image: ${makeGradient('#2cdb93', '#36c6ff', '180deg')};
  cursor: pointer;
  letter-spacing: 0.1rem;

  & + & {
    margin-left: 1rem;
  }
`
