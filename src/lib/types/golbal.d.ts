import '@emotion/react'; // it's important to use ThemeProvider

declare module '@emotion/react' {
  export interface Theme {
    colors: {
        background: string;
        secondary: string;
        bold: string;
        darkBold: string;
        light: string;
        text: string;
    }
  }
}