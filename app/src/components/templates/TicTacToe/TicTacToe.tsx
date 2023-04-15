import React, { useState } from "react"
import Board from "../../organisms/TicTacToe/Board"
import styled from "styled-components"

import { calculateWinner } from "../../../utils/ticTacToe/calculateWinner"
import { TicTacToeContainer } from "./styles"
import Button from "../../atoms/Button/Button"

interface TicTacToeProps {
  squares: any[]
  onClick: (i: any) => void
  onReset: () => void
  xIsNext: boolean
}

const TicTacToe: React.FC<TicTacToeProps> = () => {
  const [history, setHistory] = useState([{ squares: Array(9).fill(null) }])
  const [stepNumber, setStepNumber] = useState(0)
  const [xIsNext, setXIsNext] = useState(true)

  const current = history[stepNumber]
  const winner = calculateWinner(current.squares)

  const handleClick = (i: number) => {
    const newHistory = history.slice(0, stepNumber + 1)
    const squares = [...current.squares]

    if (winner || squares[i]) {
      return
    }

    squares[i] = xIsNext ? "X" : "O"

    setHistory([...newHistory, { squares }])
    setStepNumber(newHistory.length)
    setXIsNext(!xIsNext)
  }

  const jumpTo = (step: number) => {
    setStepNumber(step)
    setXIsNext(step % 2 === 0)
  }

  const resetGame = () => {
    setHistory([{ squares: Array(9).fill(null) }])
    setStepNumber(0)
    setXIsNext(true)
  }

  const moves = history.map((step, move) => {
    const desc = move ? `Go to move #${move}` : "Go to game start"

    return (
      <li key={move}>
        <Button onClick={() => jumpTo(move)}>{desc}</Button>
      </li>
    )
  })

  let status
  if (winner) {
    status = `Winner: ${winner}`
  } else if (stepNumber === 9) {
    status = "Draw"
  } else {
    status = `Next player: ${xIsNext ? "X" : "O"}`
  }

  return (
    <TicTacToeContainer>
      <Board squares={current.squares} onClick={handleClick} />
      <div>
        <div>{status}</div>
        <ul>{moves}</ul>
        <Button onClick={resetGame}>Reset</Button>
      </div>
    </TicTacToeContainer>
  )
}

export default TicTacToe
