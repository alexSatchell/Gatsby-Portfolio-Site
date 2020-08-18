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
import freelancePaymentForm from "../images/MonthUI/freelancePaymentForm.png"
import freelanceHeader from "../images/MonthUI/freelanceHeaeder.png"
import freelancePricing from "../images/MonthUI/freelance-pricing.png"
import aliveHero from "../images/MonthUI/AliveHero.png"

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

          <Paragraph>
            <strong>Day 2 - Freelance Payment Review</strong>
          </Paragraph>
          <Date>08-14</Date>
          <ExternalLink
            target="_blank"
            href="https://freelance-payment.netlify.app/"
          >
            Live Demo
          </ExternalLink>
          <Image
            margin={"4rem 0 8rem 0"}
            src={freelancePaymentForm}
            width={"100%"}
          />

          <Paragraph>
            <strong>Day 3 - Freelance Header Component</strong>
          </Paragraph>
          <Date>08-15</Date>
          <ExternalLink
            target="_blank"
            href="https://freelance-header-component.netlify.app/"
          >
            Live Demo
          </ExternalLink>
          <Image
            margin={"4rem 0 8rem 0"}
            src={freelanceHeader}
            width={"100%"}
          />

          <Paragraph>
            <strong>Day 4 - Freelance Pricing Component</strong>
          </Paragraph>
          <Date>08-16</Date>
          <ExternalLink
            target="_blank"
            href="https://freelance-rateplan.netlify.app/"
          >
            Live Demo
          </ExternalLink>
          <Image
            margin={"4rem 0 8rem 0"}
            src={freelancePricing}
            width={"100%"}
          />
          <Paragraph>
            <strong>Day 5 - Church Hero Section</strong>
          </Paragraph>
          <Date>08-17</Date>
          <ExternalLink
            target="_blank"
            href="https://church-hero-section.netlify.app/"
          >
            Live Demo
          </ExternalLink>
          <Image margin={"4rem 0 8rem 0"} src={aliveHero} width={"100%"} />
        </ArticleContainer>
      </ArticleContainer>
    </>
  )
}

export default MonthOfCode
