import { onSmall } from '@styles/mediaQuery'
import { flexCenter } from '@styles/styleUtill'
import styled, { css } from 'styled-components'

export const VocaField = styled.li`
  position: relative;
  display: flex;
  align-items: center;
  padding: 2rem;
  column-gap: 0.5rem;

  ${onSmall} {
    flex-wrap: wrap;
    padding: 3rem 2rem;
  }
`

export const QuizWrapper = styled.div`
  ${flexCenter};
  width: fit-content;
  white-space: nowrap;
  column-gap: 0.5rem;

  h3:last-of-type {
    ::after {
      content: '';
    }
  }

  ${onSmall} {
    width: 100%;
  }
`

export const Quiz = styled.h3`
  font-size: 1.6rem;
  ::after {
    content: ',';
  }
`

export const AnswerWrapper = styled.div`
  position: relative;
  display: flex;
  width: 100%;
  column-gap: 1rem;

  div {
    flex: 1;
  }

  input {
    flex: 1;
    width: 100%;
    height: 1.6rem;
    margin-left: 2rem;
    padding: 1.5rem 1rem;
    font-size: 1.4rem;
    outline: none;
  }

  ${onSmall} {
    ${flexCenter};
    flex-direction: column;
    margin-top: 2rem;
    row-gap: 1.5rem;
  }
`

export const AnswerBox = styled.div<{ show: boolean }>`
  position: absolute;
  bottom: 0;
  right: 0;
  padding: 1rem 1.5rem;
  background-color: rgba(0, 0, 0, 0.8);
  font-size: 1.2rem;
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
