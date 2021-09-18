import { makeGradient, multipleLineEllipsis } from '@styles/styleUtill'
import ReactMarkdown from 'react-markdown'
import styled from 'styled-components'

export const Container = styled.li`
  display: flex;
  flex-direction: column;
  height: 30rem;
  cursor: pointer;
  box-shadow: 0 0 0.5rem rgba(0, 0, 0, 0.4);
  border-radius: 0.5rem;
  transition: 0.3s;
  overflow: hidden;

  &:hover {
    box-shadow: 0 0 1rem rgba(0, 0, 0, 0.4);
    transform: translateY(-1rem);
  }
`

export const ImageWrapper = styled.div`
  flex: 1;
  background-image: ${makeGradient('#2cdb93', '#36c6ff', '180deg')};
`

export const ContentWrapper = styled.div`
  position: relative;
  flex: 1;
  padding: 1rem;
  margin-top: 1rem;
`
export const PostTitle = styled.h3`
  font-size: 2rem;
`

export const PostContent = styled(ReactMarkdown)`
  * {
    display: inline;
  }

  h1,
  h2,
  h3 {
    font-size: 1.6rem;
    font-weight: normal;
  }
  margin-top: 1rem;
  font-size: 1.6rem;

  ${multipleLineEllipsis(3)}
`

export const TimeStemp = styled.span`
  position: absolute;
  bottom: 1rem;
  right: 1rem;
  font-size: 1.2rem;
`
