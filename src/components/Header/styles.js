import styled, { keyframes } from "styled-components"
import { FONTS, COLORS, QUERIES } from "../../styling/styles"

export const HeaderContainer = styled.div`
  /* border: 1px solid black; */
  grid-column: center-start / center-end;

  width: 100%;
  height: 10rem;
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (${QUERIES.small}) {
    width: 100%;
  }

  @media (${QUERIES.xsmall}) {
    width: 80%;
    /* border: 1px solid black; */
    margin: 0 auto;
  }
`

export const LinkPanel = styled.div``

const loadInAnimation = keyframes`
  0% {
    -webkit-transform: translateZ(-80px);
            transform: translateZ(-80px);
    opacity: 0;
  }
  100% {
    -webkit-transform: translateZ(0);
            transform: translateZ(0);
    opacity: 1;
  }
`

export const Logo = styled.h1`
  font-size: 4rem;
  font-family: ${FONTS.main};
  letter-spacing: 0.2rem;
  animation-name: ${loadInAnimation};
  animation-duration: 0.8s;

  @media (${QUERIES.small}) {
  }
`

export const Dot = styled.span`
  /* color: ${COLORS.accentPeach}; */
`
