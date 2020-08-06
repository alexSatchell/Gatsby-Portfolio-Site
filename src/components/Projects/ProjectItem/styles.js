import styled, { keyframes } from "styled-components"
import { FONTS, COLORS, QUERIES } from "../../../styling/styles"
import { Link } from "gatsby"

export const ProjectContainer = styled.div`
  margin: 3rem 0;
  display: flex;
  flex-direction: column;
  width: max-content;
  color: ${COLORS.fontColor};

  @media (${QUERIES.small}) {
    width: 100%;
    justify-content: center;
  }
`

const loadInAnimation = keyframes` 
  0% {
    -webkit-transform: scaleY(0);
            transform: scaleY(0);
    -webkit-transform-origin: 100% 0%;
            transform-origin: 100% 0%;
    opacity: 1;
  }
  100% {
    -webkit-transform: scaleY(1);
            transform: scaleY(1);
    -webkit-transform-origin: 100% 0%;
            transform-origin: 100% 0%;
    opacity: 1;
  }
`

export const ProjectTitle = styled(Link)`
  font-family: ${FONTS.secondary};
  font-size: 1.6rem;
  font-weight: 400;
  cursor: pointer;
  position: relative;
  animation-name: ${loadInAnimation};
  animation-duration: 0.6s;

  text-decoration: none;
  color: ${COLORS.fontColor};

  &:after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    width: 100%;
    height: 0.2rem;
    transform: scaleX(0);
    background-color: ${COLORS.accentBlue};
    transition: transform 0.3s;
  }

  &:hover {
    color: ${COLORS.fontHighlight};
    &:after {
      transform: scaleX(1);
    }
  }
`

export const NameDateContainer = styled.div`
  display: flex;
  justify-content: space-between;

  @media (${QUERIES.small}) {
    justify-content: flex-start;
    align-items: center;
  }
`

export const Description = styled.p`
  font-family: ${FONTS.secondary};
  font-size: 1.4rem;
  font-weight: 300;
  animation-name: ${loadInAnimation};
  animation-duration: 0.6s;

  @media (${QUERIES.small}) {
    width: 100%;
  }

  @media (${QUERIES.xsmall}) {
    width: 80%;
  }
`

export const Date = styled.p`
  font-family: ${FONTS.secondary};
  font-weight: 400;
  font-size: 1.2rem;
  color: ${COLORS.date};
  display: inline-block;

  animation-name: ${loadInAnimation};
  animation-duration: 0.6s;

  @media (${QUERIES.small}) {
    margin-left: 0.2rem;

    &::before {
      content: "- ";
    }
  }
`
