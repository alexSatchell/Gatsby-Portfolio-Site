import styled from "styled-components"
import { QUERIES } from "../../styling/styles"

export const ArticleContainer = styled.div`
  width: 55rem;
  margin: 6rem auto;

  @media (${QUERIES.small}) {
    width: 100%;
    margin: 6 0;
    padding: 2rem;
  }
`
