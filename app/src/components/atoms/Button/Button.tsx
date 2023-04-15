import styled from "styled-components"

interface ButtonProps {
  onClick?: () => void
  children: React.ReactNode
  disabled?: boolean
}

const StyledButton = styled.button`
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  background-color: #222;
  color: #fff;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.2s ease-in-out;
  &:hover {
    background-color: #333;
  }
  &:disabled {
    background-color: #444;
    cursor: not-allowed;
  }
`

const Button = ({ onClick, children, disabled }: ButtonProps) => (
  <StyledButton onClick={onClick} disabled={disabled}>
    {children}
  </StyledButton>
)

export default Button
