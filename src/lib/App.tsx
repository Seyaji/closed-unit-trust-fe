import React from 'react';
import { ThemeProvider, Theme } from '@emotion/react'
import { Global } from "@emotion/react";
import { GlobalStyles } from './styles/global'
import { darkTheme, lightTheme } from './styles/theme'

import { Nav } from './components/Nav';
import Page from './styles/Page';
import HomePage from './pages/HomePage';
import InvestorPage from './pages/Investor';
import Contract from './components/contract/Contract';


export default function App() {
  const [currentTheme, setCurrentTheme] = React.useState<Theme>(darkTheme)
  const theme = currentTheme === darkTheme ? darkTheme : lightTheme;
  return (
    <ThemeProvider theme={theme}>
      <Nav />
      <Global styles={theme => GlobalStyles} />
        <InvestorPage />
        <Page>
          <Contract />
        </Page>
    </ThemeProvider>
  );
}
