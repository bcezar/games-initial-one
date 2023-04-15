import { useState } from "react"
import TicTacToe from "./TicTacToe"

const TicTacToeContainer = () => {
  const [squares, setSquares] = useState(Array(9).fill(null))
  const [xIsNext, setXIsNext] = useState(true)

  const handleClick = (i) => {
    const squaresCopy = [...squares]
    squaresCopy[i] = xIsNext ? "X" : "O"
    setSquares(squaresCopy)
    setXIsNext(!xIsNext)
  }

  const handleReset = () => {
    setSquares(Array(9).fill(null))
    setXIsNext(true)
  }

  return (
    <TicTacToe
      squares={squares}
      onClick={handleClick}
      onReset={handleReset}
      xIsNext={xIsNext}
    />
  )
}

export default TicTacToeContainer
