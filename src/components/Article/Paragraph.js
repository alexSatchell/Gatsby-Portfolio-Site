import styled from "styled-components"
import { FONTS, COLORS } from "../../styling/styles"

export const Paragraph = styled.p`
  font-family: ${FONTS.secondary};
  color: ${COLORS.articleFont};
  font-weight: 300;
  font-size: 1.6rem;
  line-height: 140%;
  margin: ${props => props.margin};
  margin: 2rem 0 0 0;
`
