import styled from 'styled-components'
import { flexCenter, makeGradient } from '@styles/styleUtill'

export const Button = styled.button`
  ${flexCenter};
  width: 15rem;
  height: 4rem;
  color: #ffffff;
  font-weight: bold;
  font-size: 1.8rem;
  border-radius: 1rem;
  background-image: ${makeGradient('#2cdb93', '#36c6ff', '180deg')};
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.5);

  &:active {
    box-shadow: none;
  }
`
