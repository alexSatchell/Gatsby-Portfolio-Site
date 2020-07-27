import styled from "styled-components"
import { FONTS, COLORS } from "../../styling/styles"

export const ExternalLink = styled.a`
  font-family: ${FONTS.secondary};
  font-size: 1.6rem;
  color: ${COLORS.accentBlue};
  text-decoration: none;
  border-bottom: 0.15rem solid ${COLORS.accentPeach};
  transition: 0.2s ease-in-out;
  margin: ${props => props.margin};
  display: inline-block;

  &:hover {
    color: ${COLORS.articleFont};
  }
`
