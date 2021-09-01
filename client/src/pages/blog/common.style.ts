import styled from 'styled-components'
import { flexCenter } from 'styles/styleUtill'

export const Section = styled.section`
  max-width: 100rem;
  padding-top: 5rem;
  margin: 0 auto;
`

export const FlexWrapper = styled.div`
  ${flexCenter};
  padding: 0 2rem;

  button {
    margin-left: 2rem;
  }
`
