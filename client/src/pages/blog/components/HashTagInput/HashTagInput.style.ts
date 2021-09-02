import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  margin-bottom: 2rem;
  align-items: flex-end;
`

export const Input = styled.input`
  flex: 1;
  height: 3rem;
  padding: 0 1rem;
  margin-left: 2rem;
  font-size: 1.6rem;
  color: #aaa;
  border-bottom: 1px solid #2cdbbb;
  outline: none;
`

export const HashTag = styled.div`
  padding: 1rem;
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
