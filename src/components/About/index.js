import React from "react"
import {
  AboutContainer,
  InfoPanel,
  Name,
  Title,
  TitleUnderline,
  SummaryContainer,
  Dot,
} from "./styles"

// import { Subtitle } from "../Typography/Subtitle"
import { Paragraph } from "../Typography/Paragraph"
// import { FaCode } from "react-icons/fa"

const About = () => {
  console.log("rendered")
  return (
    <AboutContainer>
      <InfoPanel>
        <Name>Alexander Satchell</Name>
        <Title>
          {/* <FaCode/> */}
          Developer <Dot>&middot;</Dot> Optimist <Dot>&middot;</Dot> Purpose
          Driven
        </Title>
        <TitleUnderline></TitleUnderline>
        <SummaryContainer>
          <Paragraph width={" 100%"} lineHeight={"150%"}>
            At my core, I have always sought after and worked to improve the
            lives of others, whether it be professional, volunteering, or
            lending a hand to those in need. With technology, I try to place
            those same ideologies at the forefront of my work.
          </Paragraph>
        </SummaryContainer>
      </InfoPanel>
    </AboutContainer>
  )
}

export default About
