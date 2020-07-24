import styled, { keyframes } from "styled-components"
import { FONTS, COLORS } from "../../styling/styles"

export const AboutContainer = styled.div`
  grid-column: center-start / center-end;
  grid-row: 2;
  display: flex;
  flex-direction: column;
  /* align-items: flex-start; */
  align-items: flex-end;
  justify-content: center;
  padding-right: 20%;

  /* border: 1px solid black; */
`

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

export const InfoPanel = styled.div`
  /* border: 1px solid black; */
  padding: 1rem;
  width: 42rem;
`

export const Name = styled.h1`
  font-family: ${FONTS.main};
  font-size: 3.8rem;
  font-weight: 400;
  animation-name: ${loadInAnimation};
  animation-duration: 1.2s;
`

export const Title = styled.h3`
  font-family: ${FONTS.secondary};
  font-size: 2rem;
  font-weight: 300;
  margin-top: 0.2rem;
  animation-name: ${loadInAnimation};
  animation-duration: 1.2s;
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
`

export const SummaryContainer = styled.div`
  width: 100%;
  animation-name: ${loadInAnimation};
  animation-duration: 1.2s;
`
