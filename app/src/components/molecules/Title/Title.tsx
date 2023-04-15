// Title.tsx
import React from "react"
import Text from "../../atoms/Text/Text"
import { StyledTitle } from "./styles"

interface TitleProps {
  children: React.ReactNode
}

const Title: React.FC<TitleProps> = ({ children }) => {
  return (
    <StyledTitle>
      <Text>{children}</Text>
    </StyledTitle>
  )
}

export default Title
