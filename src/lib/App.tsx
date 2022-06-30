import React from 'react';
import { Nav } from './components/Nav';
import { Main } from './styles/Main';
import { ThemeProvider, withTheme, Theme, useTheme } from '@emotion/react'
import { Global } from "@emotion/react";
import { GlobalStyles } from './styles/global'
import { darkTheme, lightTheme } from './styles/theme'



export default function App() {
  const [currentTheme, setCurrentTheme] = React.useState<Theme>(darkTheme)
  const theme = currentTheme === darkTheme ? darkTheme : lightTheme;
  return (
    <ThemeProvider theme={theme}>
      <Main>
        <Global styles={GlobalStyles} />
        <Nav />
        <div>
          <h1>Test</h1>
        </div>
      </Main>
    </ThemeProvider>
  );
}
