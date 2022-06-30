import styled, { Theme } from '@emotion/react'
import { cx, css } from '@emotion/css'


const headerFont = css`
    @font-face {
        font-family: 'roboto';
        src: url('https://fonts.googleapis.com/css2?family=Roboto:wght@500&display=swap');;
    }
`
const textFont = css`
    @font-face {
        font-family: 'Inconsolata';
        src: url('https://fonts.googleapis.com/css2?family=Inconsolata:wght@300&display=swap');
    }
`

export const darkTheme: Theme = {
    colors: {
        background: '#2B2B40',
        secondary: '#575373',
        bold: '#F25CD9',
        darkBold: '#A62679',
        light: '#A68AA1',
        text: '#04BFAD',
    },
}

export const lightTheme: Theme = {
    colors: {
        background: '#2B2B40',
        secondary: '#575373',
        bold: '#F25CD9',
        darkBold: '#A62679',
        light: '#A68AA1',
        text: '#04BFAD',
    },
}