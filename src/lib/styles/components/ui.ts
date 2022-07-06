import styled from '@emotion/styled'

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
    cursor: pointer;
  }
`

export const Action = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1.5rem;
  border: 1px solid ${({ theme }) => theme.colors.text};
  justify-content: start;
  border-radius: 5px;
  margin: 1rem;
  width: 300px;
  height: 360px;

  :hover {
    box-shadow: 0 0 10px ${({ theme }) => theme.colors.text};
  }

  #actionHeading {
    font-family: 'Roboto';
    font-size: ${({ theme }) => theme.font.size.large};
  }

  .accountDetails {
    width: 70%;
  }

  .highlight {
    color: ${({ theme }) => theme.colors.bold}
  }

  #heading {
    align-self: flex-start;
  }

  .controls {
    display: flex;
    flex-direction: row;
    margin-top: auto;
    justify-content: space-between;
  }

  p {
    margin-top: .5rem ;
    margin-bottom: .5rem ;
  }

  input {
    margin-bottom: 1rem;
    font-size: 1rem;
    padding: .5rem;
    background-color: ${({ theme }) => theme.colors.secondary};
    border: 1px solid ${({ theme }) => theme.colors.text};
    border-radius: 5px;
    color: ${({ theme }) => theme.colors.text};
    width: 100%;

    ::placeholder {
    opacity: .5;
    color: ${({ theme }) => theme.colors.text};
    }
  }
`
