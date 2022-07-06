import styled, { Theme } from '@emotion/react'
import { cx, css } from '@emotion/css'



export const darkTheme: Theme = {
    colors: {
        background: '#0A0613',
        secondary: '#301E6B',
        highlight: '#17688A',
        bold: '#F25CD9',
        darkBold: '#A62679',
        light: '#A68AA1',
        text: '#04BFAD',
    },
    font: {
        size: {
            small: '1rem',
            medium: '1.2rem',
            large: "1.5rem",
        }
    }
}

export const lightTheme: Theme = {
    colors: {
        background: '#2B2B40',
        secondary: '#575373',
        highlight: '#17688A',
        bold: '#F25CD9',
        darkBold: '#A62679',
        light: '#A68AA1',
        text: '#04BFAD',
    },
    font: {
        size: {
            small: '1rem',
            medium: '1.2rem',
            large: "1.5rem",
        }
    }
}


