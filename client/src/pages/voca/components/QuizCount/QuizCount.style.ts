import { flexCenter } from '@styles/styleUtill'
import styled from 'styled-components'

export const Container = styled.div`
  ${flexCenter};
  column-gap: 1rem;
`

export const NumberInput = styled.input`
  width: 7rem;
  height: 100%;
  padding: 1rem 0.2rem 1rem 1rem;
  border-radius: 1rem;
  font-size: 2rem;
  border: 1px solid #aaa;
`
