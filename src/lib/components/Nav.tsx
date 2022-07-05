import React from 'react'
import styled from '@emotion/styled'
import Metamask from './metamask/MetamaskConnect'


const NavStyle = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.colors.background};
  padding-left: 3rem;
  padding-right: 3rem;
  align-items: center;
  color: ${({ theme }) => theme.colors.text};
  border-bottom: 1px solid ${({ theme }) => theme.colors.text};

  nav ul {
    margin: 0;
    padding: 1rem;
    list-style-type: none;
    display: flex;
    align-items: center;
    flex-flow: row wrap;
    justify-content: center;
    column-gap: 2rem;

    li {
      font-family: 'Inconsolata', monospace;
      font-weight: 500;
      :hover {
        color: ${({ theme }) => theme.colors.bold};
        text-decoration: underline;
        cursor: pointer;
      }
    }
  }
`


export const Nav: React.FC = () => {
  return (
    <NavStyle>
      <nav id="NavMenu">
        <ul>
          <li><a>Home</a></li>
          <li><a>Buy Units</a></li>
          <li><a>Fund Breakdown</a></li>
        </ul>
      </nav>
      <Metamask />
    </NavStyle>
  )
}