import styled, { keyframes } from "styled-components"
import { FONTS } from "../../styling/styles"
import { COLORS } from "../../styling/styles"

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

export const ExternalLink = styled.a`
  font-size: ${props => props.fontSize};
  font-family: ${FONTS.secondary};
  color: ${COLORS.fontColor};
  margin: ${props => props.margin};
  text-decoration: none;
  cursor: pointer;
  position: relative;
  /* animation-name: ${loadInAnimation}; */
  animation-duration: 1.2s;

  &:after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    width: 100%;
    height: 0.15rem;
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
