import styled, { css } from 'styled-components'

export const VocaField = styled.li`
  position: relative;
  display: flex;
  align-items: center;
  padding: 2rem;
  column-gap: 2rem;

  div {
    flex: 1;

    input {
      height: 2rem;
      max-width: 100%;
      margin-left: 2rem;
      border-bottom: 1px solid #aaa;
      font-size: 1.6rem;
    }
  }

  h3:last-of-type {
    ::after {
      content: '';
    }
  }
`

export const Vocabulary = styled.h3`
  font-size: 2rem;
  ::after {
    content: ',';
  }
`

export const AnswerBox = styled.div<{ show: boolean }>`
  position: absolute;
  top: -3rem;
  right: 2rem;
  padding: 2rem;
  background-color: rgba(0, 0, 0, 0.8);
  font-size: 1.4rem;
  font-weight: bold;
  color: #fff;
  border-radius: 1rem;
  transition: 0.3s;
  opacity: 0;
  z-index: -1000;

  ${({ show }) =>
    show &&
    css`
      opacity: 1;
      z-index: 1000;
    `}
`

export const Answer = styled.div`
  & + & {
    margin-top: 0.5rem;
  }
`
