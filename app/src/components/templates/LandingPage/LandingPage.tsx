import React from "react"
import styled from "styled-components"
import Title from "../../molecules/Title/Title"
import Button from "../../atoms/Button/Button"
import Link from "next/link"

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
`

const ButtonWrapper = styled.div`
  display: flex;
  gap: 16px;
  margin-top: 32px;
`

const LandingPage: React.FC = () => {
  return (
    <Wrapper>
      <Title>Welcome to our game center</Title>
      <ButtonWrapper>
        <Link href="/jogo-da-velha">
          <Button>Play Tic Tac Toe</Button>
        </Link>

        <Button>Play Guessing Card</Button>
      </ButtonWrapper>
    </Wrapper>
  )
}

export default LandingPage
