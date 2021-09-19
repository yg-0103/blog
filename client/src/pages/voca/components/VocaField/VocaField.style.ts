import styled from 'styled-components'

export const VocaField = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 2rem;
  column-gap: 5rem;

  div {
    flex: 1;

    input {
      height: 2rem;
      max-width: 100%;
      border-bottom: 1px solid #aaa;
      font-size: 1.6rem;
    }
  }
`

export const Vocabulary = styled.h3`
  font-size: 2rem;
`
