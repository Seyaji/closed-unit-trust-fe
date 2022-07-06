import React from 'react';
import { Routes, Route, BrowserRouter, } from "react-router-dom";
import { ThemeProvider, Theme } from '@emotion/react'
import { Global } from "@emotion/react";
import { GlobalStyles } from './styles/global'
import { darkTheme, lightTheme } from './styles/theme'

import { Nav } from './components/Nav';
import HomePage from './pages/HomePage';
import InvestorPage from './pages/Investor';


export default function App() {
  const [currentTheme, setCurrentTheme] = React.useState<Theme>(darkTheme)
  const theme = currentTheme === darkTheme ? darkTheme : lightTheme;
  return (
    <ThemeProvider theme={theme}>
      <Global styles={theme => GlobalStyles} />
      <BrowserRouter>
      <Nav />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/investor" element={<InvestorPage />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}
