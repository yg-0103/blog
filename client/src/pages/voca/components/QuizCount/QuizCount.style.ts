import { flexCenter } from '@styles/styleUtill'
import styled from 'styled-components'

export const Container = styled.div`
  ${flexCenter};
  column-gap: 1rem;
`

export const Input = styled.input`
  width: 5rem;
  height: 3rem;
  padding: 1rem 0.2rem 1rem 1rem;
  border-radius: 1rem;
  font-size: 1.3rem;
  border: 1px solid #aaa;
`

export const Label = styled.label`
  font-size: 1.3rem;
  font-weight: bold;
`
