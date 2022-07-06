import styled from '@emotion/styled'
import React from 'react';


const SplashBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 30vh;
  width: 100%;
  overflow: hidden;
  background-color: ${({ theme }) => theme.colors.secondary};
`

export default function Splash() {
  return (
    <SplashBox>
      <h1>Invest Today!</h1>
    </SplashBox>
  );
}