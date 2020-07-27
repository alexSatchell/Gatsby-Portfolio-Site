import styled from "styled-components"
import { FONTS, COLORS } from "../../styling/styles"

export const UnorderedList = styled.ul`
  margin: 2rem 0;
  font-family: ${FONTS.secondary};
  color: ${COLORS.articleFont};
  font-weight: 300;
`

export const ListItem = styled.li`
  font-size: 1.6rem;
  line-height: 130%;
  margin-top: 1.2rem;
  margin-left: 4rem;
`
