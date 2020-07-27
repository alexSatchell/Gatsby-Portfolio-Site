import styled from "styled-components"
import { FONTS } from "../../styling/styles"

export const Paragraph = styled.p`
  font-family: ${FONTS.secondary};
  font-size: 1.6rem;
  font-weight: 300;
  width: ${props => props.width};
  line-height: ${props => props.lineHeight};
  word-spacing: 60%;
  width: 100%;
`
