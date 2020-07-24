import React from "react"
import styled from "styled-components"
import moment from "moment"

const FooterContainer = styled.div`
  grid-column: center-start / center-end;
  grid-row: 4;
  /* border: 1px solid black; */
  display: flex;
  align-items: center;
`

const Footer = () => {
  let year = new moment(new Date()).format("YYYY")

  return <FooterContainer>{year}</FooterContainer>
}

export default Footer
