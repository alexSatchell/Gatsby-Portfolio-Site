import styled from "styled-components"
import { QUERIES } from "../../../styling/styles"

export const ProjectListContainer = styled.div`
  grid-column: center-start / center-end;
  grid-row: 3;
  padding: 1rem;

  display: flex;
  align-items: flex-start;
  justify-content: flex-start;

  @media (${QUERIES.small}) {
    align-items: center;
    justify-content: center;
    width: 100%;
  }

  @media (${QUERIES.xsmall}) {
    grid-column: 3 / -3;
  }
`

export const List = styled.div`
  /* border: 1px solid black; */
`
