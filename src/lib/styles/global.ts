import { css } from "@emotion/react";

export const GlobalStyles = css`
  @font-face {
    font-family: 'Roboto', sans-serif;
    src: url("https://fonts.googleapis.com/css2?family=Roboto:wght@500&display=swap");
  }
  * {
    box-sizing: border-box;
  }
  :root {
    margin: 0;
    padding: 0;
  }
  body {
    margin: 0;
    padding: 0;
  }

  h1 {
    font-family: 'Roboto', sans-serif;
  }

  p {
    font-family: 'Inconsolata', monospace;
  }

  li {
    font-family: 'Inconsolata', monospace;
  }
  
`;
