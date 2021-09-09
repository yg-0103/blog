import { flexCenter } from '@styles/styleUtill'
import styled from 'styled-components'

export const ButtonWrapper = styled.div`
  display: flex;

  button {
    width: 10rem;
  }

  button + button {
    margin-left: 1rem;
  }
`

export const Container = styled.div`
  position: relative;
  margin-top: 10rem;

  ${ButtonWrapper} {
    position: absolute;
    top: 0.5rem;
    right: 0;
  }
`

export const PostTitle = styled.h2`
  font-size: 4rem;
  margin-bottom: 3rem;
  color: rgb(52, 58, 64);
`

export const Author = styled.span`
  font-size: 1.8rem;
  font-weight: bold;
  color: rgb(52, 58, 64);
  margin-right: 1.5rem;
`

export const TimeStemp = styled.span`
  font-size: 1.4rem;
  color: #aaaaaa;
`

export const HashTagWrapper = styled.div`
  display: flex;
  margin-top: 1.3rem;
`

export const HashTag = styled.div`
  ${flexCenter};
  width: fit-content;
  height: 3rem;
  padding: 0 2rem;
  border-radius: 1rem;
  background: #2cdbbb;
  font-size: 1.3rem;
  font-weight: bold;
  color: #fff;
  letter-spacing: 1px;
  & + & {
    margin-left: 1rem;
  }
`
