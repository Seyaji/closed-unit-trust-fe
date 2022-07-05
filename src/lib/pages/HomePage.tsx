import React from 'react'
import Page from '../styles/Page'
import Splash from '../components/Splash'

export default function HomePage() {
  return (
    <>
      <Splash />
      <Page>
        <h1>Home Page</h1>
      </Page>
    </>
  );
}