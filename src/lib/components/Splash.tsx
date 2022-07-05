import styled from '@emotion/styled'
import React from 'react';


const SplashBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 30vh;
  background-color: ${({ theme }) => theme.colors.secondary};
`

export default function Splash() {
  return (
    <SplashBox>
      <h1>Invest Today!</h1>
    </SplashBox>
  );
}