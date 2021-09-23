import styled from 'styled-components'
import { flexCenter, gradientText } from '@styles/styleUtill'

export const Container = styled.div`
  ${flexCenter}
`

export const Title = styled.h1`
  font-size: 2.5rem;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  font-weight: 900;
  color: #747474;
  letter-spacing: 0.1rem;
  ${gradientText('#2cdb93', '#36c6ff', '180deg')}
`
