import styled from '@emotion/styled'
import { css } from '@emotion/react'

// const Button = css`
//   height: '30px';
//   padding: '1rem';
//   width: 'auto';
// `

interface Button {
  Large?: boolean;
  Small?: boolean;
}


export const Button = styled.div<Button>`
  display: flex;
  justify-content: center;
  align-content: center;
  flex-direction: column;
  height: ${(props) =>props.Large ? '50px' : props.Small ? '30px' : '40px' };
  padding: ${(props) =>props.Large ? '1.5rem' : props.Small ? '.5rem' : '1rem' };
  border: 1px solid ${({ theme }) => theme.colors.text};
  background-color: ${({ theme }) => theme.colors.background};
  width: fit-content;
  border-radius: 10px;
  :hover {
    background-color: ${({ theme }) => theme.colors.text};
    color: ${({ theme }) => theme.colors.background};
  }
  `
