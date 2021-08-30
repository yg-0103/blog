import { css } from 'styled-components'

export const flexCenter = css`
  display: flex;
  justify-content: center;
  align-items: center;
`

export const makeGradient = (
  gradientFrom: string,
  gradientTo: string,
  direction = '90deg',
  gradientStart = '',
  gradientEnd = ''
) => `linear-gradient(${direction}, ${gradientFrom} ${gradientStart},${gradientTo} ${gradientEnd})`

export const gradientText = (
  gradientFrom: string,
  gradientTo: string,
  direction = '90deg',
  gradientStart = '',
  gradientEnd = ''
) => css`
  color: ${gradientFrom}; /* for IE */
  background: ${makeGradient(gradientFrom, gradientTo, direction, gradientStart, gradientEnd)};
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`
