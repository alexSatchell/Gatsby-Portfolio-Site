import styled from "styled-components"
import { Link } from "gatsby"
import { COLORS } from "../../styling/styles"

export const InternalLink = styled(Link)`
  color: ${COLORS.fontColor};
  font-size: 1.4rem;
  padding: 1rem;
  display: flex;
  width: max-content;
`
