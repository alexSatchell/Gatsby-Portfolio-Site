import React from "react"
import { HeaderContainer, LinkPanel, Logo, Dot } from "./styles"
import { Subtitle } from "../Typography/Subtitle"
import { ExternalLink } from "../Links/ExternalLink"
import { LinkSpan } from "../Links/LinkSpan"
import { InteralLink } from "../Links/GatsbyLink"

const Header = () => {
  return (
    <HeaderContainer>
      <LinkPanel>
        <ExternalLink fontSize={"1.5rem"}>Github</ExternalLink>
        <InteralLink margin={"auto 2rem"} fontSize={"1.5rem"} to="/">
          Blog
        </InteralLink>
      </LinkPanel>
      <Logo>
        A<Dot>.</Dot>S
      </Logo>
    </HeaderContainer>
  )
}

export default Header
