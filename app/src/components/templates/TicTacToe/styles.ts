import styled from "styled-components"

export const TicTacToeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`

export const ScoreContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  width: 300px;
`

export const ResetButton = styled.button`
  background-color: #fff;
  color: #000;
  font-size: 16px;
  padding: 8px 16px;
  border-radius: 4px;
  border: none;
  cursor: pointer;

  &:hover {
    background-color: #ddd;
  }
`
