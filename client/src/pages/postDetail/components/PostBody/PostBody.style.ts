import ReactMarkdown from 'react-markdown'
import styled from 'styled-components'

export const Container = styled.div`
  margin-top: 7rem;
`

export const Content = styled(ReactMarkdown)`
  * {
    all: revert;
    font-size: 1.8rem;
    line-height: 1.7;
  }

  h1 {
    font-size: 3rem;
  }

  h2 {
    font-size: 2.8rem;
  }

  h3 {
    font-size: 2.6rem;
  }
`
