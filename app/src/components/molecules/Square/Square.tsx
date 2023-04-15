import React from "react"
import styled from "styled-components"

interface SquareProps {
  value: string
  onClick: () => void
}

const StyledButton = styled.button`
  background: #fff;
  border: 2px solid #999;
  font-size: 24px;
  font-weight: bold;
  line-height: 34px;
  padding: 0;
  text-align: center;
  cursor: pointer;
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
`

const Square: React.FC<SquareProps> = ({ value, onClick }) => {
  return <StyledButton onClick={onClick}>{value}</StyledButton>
}

export default Square
