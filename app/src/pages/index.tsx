import type { NextPage } from "next"
import LandingPage from "../components/templates/LandingPage/LandingPage"
import React from "react"
import TicTacToeContainer from "../components/templates/TicTacToe/TicTacToeContainer"
import MathToWin from "../components/templates/MathToWin/MathToWin"

const Home: NextPage = () => {
  return (
    <>
      <TicTacToeContainer />
    </>
  )
}

export default Home
