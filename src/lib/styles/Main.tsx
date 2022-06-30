import React from 'react';
import styled from '@emotion/styled'

export const Main = styled.div`
    background-color: ${({ theme }) => theme.colors.background };
    color: ${({ theme }) => theme.colors.text };
    height: 100vh;

    h1, h2, h3, h4, h5, h6 {
        color: ${({ theme }) => theme.colors.bold };
    }
    `
