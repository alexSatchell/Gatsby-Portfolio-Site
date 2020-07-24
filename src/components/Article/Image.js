import styled from "styled-components"

export const Image = styled.img`
  display: block;
  width: ${props => props.width};
  margin: 2rem auto;
  border-radius: 0.2rem;

  -webkit-box-shadow: 0px 0px 10px 10px rgba(163, 163, 163, 0.08);
  -moz-box-shadow: 0px 0px 10px 10px rgba(163, 163, 163, 0.08);
  box-shadow: 0px 0px 10px 10px rgba(163, 163, 163, 0.08);
`
