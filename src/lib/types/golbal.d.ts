import '@emotion/react'; // it's important to use ThemeProvider
import { MetaMaskInpageProvider } from "@metamask/providers";
import { ethers } from 'ethers'

declare module '@emotion/react' {
  export interface Theme {
    colors: {
        background: string;
        secondary: string;
        highlight: string;
        bold: string;
        darkBold: string;
        light: string;
        text: string;
    }
    font: {
      size: {
          small: string;
          medium: string;
          large: string;
      }
  }
  }
}
declare global {
  interface Window {
    ethereum: MetaMaskInpageProvider;
  }
  interface Investor {
    authorized: boolean;
    balance: {
      _hex: string;
      _isBigNumber: boolean;
    };
    ownedUnits: 0;
    salePrice: {
      _hex: string;
      _isBigNumber: boolean;
    };
    saleUnits: number;
  }
  
}