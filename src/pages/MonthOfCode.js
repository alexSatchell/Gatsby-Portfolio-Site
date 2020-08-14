import React from "react"
import { ArticleContainer } from "../components/Article/Container"
import { Title } from "../components/Article/Title"
import { Date } from "../components/Article/Date"
import { ExternalLink } from "../components/Article/ExternalLink"
import { Article } from "../components/Article/ArticleContainer"
import { Paragraph } from "../components/Article/Paragraph"
import { Image } from "../components/Article/Image"
import { UnorderedList, ListItem } from "../components/Article/UnorderedList"
import { Helmet } from "react-helmet"
import Navigation from "../components/Article/Navigation"
import GlobalStyles from "../styling/global"

import contactForm from "../images/MonthUI/contactForm.png"

const MonthOfCode = () => {
  return (
    <>
      <GlobalStyles />

      <Navigation />
      <ArticleContainer>
        <Helmet>
          <title>Alex Satchell | 30 Days of UI</title>
          <meta name="title" content="30 Days of UI" />
          <meta
            property="og:title"
            content="Alexander Satchell | Front End Developer"
          />
        </Helmet>
        <Title>30 Days of UI</Title> <Date>August 2020</Date>
        <Paragraph>
          A Month long challenge to build intuitive, stateful, and elegant UI
          elements.
        </Paragraph>
        <ArticleContainer>
          <Paragraph>
            <strong>Day 1 - Form Component</strong>
          </Paragraph>
          <Date>08-13</Date>
          <ExternalLink
            target="_blank"
            href="https://react-form-component.netlify.app/"
          >
            Live Demo
          </ExternalLink>
          <Image margin={"4rem 0 8rem 0"} src={contactForm} width={"100%"} />
        </ArticleContainer>
      </ArticleContainer>
    </>
  )
}

export default MonthOfCode
