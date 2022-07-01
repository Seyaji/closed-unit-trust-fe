import '@emotion/react'; // it's important to use ThemeProvider
import { MetaMaskInpageProvider } from "@metamask/providers";
import { ethers } from 'ethers'

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
declare global {
  interface Window {
    ethereum: MetaMaskInpageProvider;
  }
  
}