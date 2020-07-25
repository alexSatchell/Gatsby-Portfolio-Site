import styled, { keyframes } from "styled-components"

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

export const Image = styled.img`
  display: block;
  width: ${props => props.width};
  margin: 2rem auto;
  border-radius: 0.2rem;

  -webkit-box-shadow: 0px 0px 10px 10px rgba(163, 163, 163, 0.08);
  -moz-box-shadow: 0px 0px 10px 10px rgba(163, 163, 163, 0.08);
  box-shadow: 0px 0px 10px 10px rgba(163, 163, 163, 0.08);
  animation-name: ${loadInAnimation};
  animation-duration: 1.2s;
`
