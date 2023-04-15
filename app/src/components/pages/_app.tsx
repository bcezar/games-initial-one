import React from "react"
import type { AppProps } from "next/app"
import { createGlobalStyle } from "styled-components"
import LandingPage from "../templates/LandingPage/LandingPage"

const GlobalStyle = createGlobalStyle`
  /* Coloque aqui as suas estilizações globais */
`

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle />
      <LandingPage />
    </>
  )
}

export default MyApp
