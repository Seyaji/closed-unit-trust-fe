import React from 'react';
import { ThemeProvider, withTheme, Theme, useTheme } from '@emotion/react'
import { Global } from "@emotion/react";
import { GlobalStyles } from './styles/global'
import { darkTheme, lightTheme } from './styles/theme'

import { Nav } from './components/Nav';
import { Main } from './styles/Main';
import { HomePage } from './pages/HomePage';



export default function App() {
  const [currentTheme, setCurrentTheme] = React.useState<Theme>(darkTheme)
  const theme = currentTheme === darkTheme ? darkTheme : lightTheme;
  return (
    <ThemeProvider theme={theme}>
      <Main>
        <Nav />
        <Global styles={GlobalStyles} />
        <HomePage />
      </Main>
    </ThemeProvider>
  );
}
