import React, { useState } from "react"

const generateRandomNumber = (max: number) => {
  return Math.floor(Math.random() * max) + 1
}

const generateMathOperation = () => {
  const a = generateRandomNumber(100)
  const b = generateRandomNumber(100)
  const result = a + b
  return { a, b, result }
}

const validateAnswer = (answer: number, result: number) => {
  return answer === result
}

const MathToWin = () => {
  const [mathOperation, setMathOperation] = useState(generateMathOperation())
  const [answer, setAnswer] = useState("")
  const [message, setMessage] = useState("")

  const handleAnswerChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAnswer(e.target.value)
  }

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      handleConfirmClick()
    }
  }

  const handleConfirmClick = () => {
    const isCorrectAnswer = validateAnswer(
      parseFloat(answer),
      mathOperation.result
    )

    if (isCorrectAnswer) {
      const points = 1000 - Math.floor(Math.random() * 500)
      setMessage(`Parabéns, você acertou e ganhou ${points} pontos!`)
    } else {
      setMessage("Ops, você errou, tente novamente.")
    }

    setAnswer("")
    setMathOperation(generateMathOperation())
  }

  return (
    <div>
      <h1>Math to Win</h1>
      <p>
        {mathOperation.a} + {mathOperation.b} = ?
      </p>
      <input
        type="number"
        value={answer}
        onChange={handleAnswerChange}
        onKeyDown={handleKeyDown}
      />
      <button onClick={handleConfirmClick}>Confirmar</button>
      <p>{message}</p>
    </div>
  )
}

export default MathToWin
