import React from 'react'
import styled from '@emotion/styled'


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
    padding: 0;
    list-style-type: none;
    display: flex;
    align-items: center;
    flex-flow: row wrap;
    justify-content: center;
    column-gap: 2rem;
  }
`


export const Nav: React.FC = () => {
  return (
    <NavStyle>
      <nav id="NavMenu">
        <ul>
          <li><a>Home</a></li>
          <li><a>Market</a></li>
          <li><a>Fund Breakdown</a></li>
        </ul>
      </nav>
      <div id="Profile">
        <p>connect metamask</p>
      </div>
    </NavStyle>
  )
}