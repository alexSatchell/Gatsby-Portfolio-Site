import React from "react"
import { QUERIES } from "../styling/styles"
import styled from "styled-components"
import moment from "moment"

const FooterContainer = styled.div`
  grid-column: center-start / center-end;
  grid-row: 4;
  display: flex;
  align-items: center;
  padding-left: 1rem;

  @media (${QUERIES.medium}) {
    width: 100%;
  }
`

const Footer = () => {
  let year = new moment(new Date()).format("YYYY")

  return <FooterContainer>{year}</FooterContainer>
}

export default Footer
