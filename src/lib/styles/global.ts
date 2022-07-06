import { css } from "@emotion/react";

// @ts-ignore
export const GlobalStyles = (theme) => `
  * {
    box-sizing: border-box;
  }
  #root {
    margin: 0;
    padding: 0;
  }

  body {
    margin: 0;
    padding: 0;
    background-color: ${theme.colors.background};
    color: ${theme.colors.text};
    max-width: 100%;
    overflow-x: hidden;
  }

  h1, h2, h3, h4, h5, h6, button {
    font-family: 'Roboto', sans-serif;
    color: ${theme.colors.bold};
  }

  p {
    font-size: 1rem;
  }

  div {
    font-family: 'Inconsolata', monospace;
  }

  p {
    font-family: 'Inconsolata', monospace;
  }

`;
