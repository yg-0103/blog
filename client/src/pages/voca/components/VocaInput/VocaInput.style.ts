import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const Input = styled.input<{ success: boolean }>`
  padding: 2rem 1rem;
  width: 70%;

  border-bottom: 1px solid ${({ success }) => (success ? '#2cdb93' : '#f40101')};
`

export const Lable = styled.label``
