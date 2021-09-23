import { flexCenter } from '@styles/styleUtill'
import styled from 'styled-components'

export const Section = styled.section`
  max-width: 100rem;
  margin: 0 auto;
  padding: 0 2rem;
`

export const OptionsWrapper = styled.div`
  ${flexCenter};
  flex-wrap: wrap;
  margin: 5rem 0;
  column-gap: 3rem;
  row-gap: 2rem;
`
