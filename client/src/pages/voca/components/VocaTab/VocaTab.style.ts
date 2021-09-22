import styled, { css } from 'styled-components'

export const Container = styled.div`
  display: flex;
  align-items: center;
  width: fit-content;
  border-radius: 1rem;
  overflow: hidden;
  box-shadow: 0 0px 5px rgba(0, 0, 0, 0.3);
`

export const TabItem = styled.div<{ active: boolean }>`
  padding: 2rem 4rem;
  font-size: 1.5rem;
  font-weight: bold;
  background-color: #ccc;
  cursor: pointer;

  & + & {
    border-left: 1px solid #ccc;
  }

  ${({ active }) =>
    active &&
    css`
      background-color: #eee;
    `}
`
