import Square from "../../molecules/Square/Square"
import styled from "styled-components"

const BoardWrapper = styled.div`
  display: grid;
  grid-template-rows: repeat(3, 1fr);
  grid-template-columns: repeat(3, 1fr);
  gap: 5px;
  margin: 20px auto;
  max-width: 600px;
`

interface BoardProps {
  squares: (string | null)[]
  onClick: (i: number) => void
}

const Board = ({ squares, onClick }: BoardProps) => (
  <BoardWrapper>
    {squares.map((square, i) => (
      <Square key={i} value={square} onClick={() => onClick(i)} />
    ))}
  </BoardWrapper>
)

export default Board
