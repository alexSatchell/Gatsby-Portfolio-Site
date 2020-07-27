import React from "react"
import styled from "styled-components"
import { InternalLink } from "../../components/Article/InternalLink"

const NavigationContainer = styled.div``

const Navigation = () => {
  return (
    <NavigationContainer>
      <InternalLink
        margin={"auto 2rem"}
        fontSize={"1.6rem"}
        fontWeight={"300"}
        to="/"
      >
        &larr; alexmsatchell
      </InternalLink>
    </NavigationContainer>
  )
}

export default Navigation
