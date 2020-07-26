import styled, { keyframes } from "styled-components"
import { FONTS, COLORS, QUERIES } from "../../styling/styles"

export const AboutContainer = styled.div`
  grid-column: center-start / center-end;
  grid-row: 2;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: center;
  padding-right: 20%;

  @media (${QUERIES.medium}) {
    align-items: center;
    padding: 0;
  }

  @media (${QUERIES.small}) {
    width: 100%;
    margin: 0 auto;
  }
`

const loadInAnimation = keyframes`
  0% {
    ${"" /* -webkit-transform: translateZ(-80px); */}
            transform: translateZ(-80px);
    opacity: 0;
  }
  100% {
    ${"" /* -webkit-transform: translateZ(0); */}
            transform: translateZ(0);
    opacity: 1;
  }
`

export const InfoPanel = styled.div`
  padding: 1rem;
  width: 42rem;
  /* border: 1px solid black; */
  @media (${QUERIES.small}) {
    width: 35rem;
    margin: 0 auto;
    padding: 3rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`

export const Name = styled.h1`
  font-family: ${FONTS.main};
  font-size: 3.8rem;
  font-weight: 400;
  animation-name: ${loadInAnimation};
  animation-duration: 1.2s;

  @media (${QUERIES.small}) {
    font-size: 3rem;
  }
`

export const Title = styled.h3`
  font-family: ${FONTS.secondary};
  font-size: 2rem;
  font-weight: 300;
  margin-top: 0.2rem;
  animation-name: ${loadInAnimation};
  animation-duration: 1.2s;

  @media (${QUERIES.small}) {
    font-size: 1.6rem;
  }
`

export const Dot = styled.span`
  color: ${COLORS.accentBlue};
  animation-name: ${loadInAnimation};
  animation-duration: 1.2s;
`

export const TitleUnderline = styled.hr`
  width: 100%;
  margin: 0.5rem auto;
  border: 0.08rem solid ${COLORS.accentColor};
  animation-name: ${loadInAnimation};
  animation-duration: 1.2s;

  @media (${QUERIES.small}) {
    display: none;
  }
`

export const SummaryContainer = styled.div`
  width: 100%;
  animation-name: ${loadInAnimation};
  animation-duration: 1.2s;

  @media (${QUERIES.small}) {
    margin-top: 2rem;
    padding: 0 1rem;
  }
`
