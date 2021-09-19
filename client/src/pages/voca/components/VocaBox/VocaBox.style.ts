import styled from 'styled-components'

export const Container = styled.ul`
  margin: 10rem 0;
  background-color: #eee;
  border-radius: 1rem;
  box-shadow: 0 0px 5px rgba(0, 0, 0, 0.3);

  li + li {
    border-top: 1px solid #ccc;
  }
`
