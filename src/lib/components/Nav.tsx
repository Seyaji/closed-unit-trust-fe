import React from 'react'
import { Link } from 'react-router-dom'
import styled from '@emotion/styled'
import Metamask from './metamask/MetamaskConnect'


const NavStyle = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.colors.background};
  width: 100vw !important;
  padding-left: 3rem;
  padding-right: 3rem;
  align-items: center;
  color: ${({ theme }) => theme.colors.text};
  border-bottom: 1px solid ${({ theme }) => theme.colors.text};
  position: fixed;
  z-index: 100;

  nav ul {
    margin: 0;
    padding: 1rem;
    list-style-type: none;
    display: flex;
    align-items: center;
    flex-flow: row wrap;
    justify-content: center;
    column-gap: 2rem;

    #li {
      font-family: 'Inconsolata', monospace;
      font-size: ${({ theme }) => theme.font.size.medium};
      font-weight: 500;
      text-decoration: none;
      color: ${({ theme }) => theme.colors.text};
      :hover {
        color: ${({ theme }) => theme.colors.bold};
        text-decoration: underline;
        cursor: pointer;
      }
    }
  }

  #balance {
    @media screen and (max-width: 480px) {
      display: none;
    }
  }
`


export const Nav: React.FC = () => {
  return (
    <NavStyle>
      <nav id="NavMenu">
        <ul>
          <li>
            <Link id="li" to="/">Home</Link>
          </li>
          <li>
            <Link id="li" to="/investor">Account</Link>
          </li>
        </ul>
      </nav>
      <Metamask />
    </NavStyle>
  )
}