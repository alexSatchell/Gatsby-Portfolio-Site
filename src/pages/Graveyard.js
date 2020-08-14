import React from "react"
import { ArticleContainer } from "../components/Article/Container"
import { Title } from "../components/Article/Title"
import { Date } from "../components/Article/Date"
import { ExternalLink } from "../components/Article/ExternalLink"
import { Article } from "../components/Article/ArticleContainer"
import { Paragraph } from "../components/Article/Paragraph"
import { Image } from "../components/Article/Image"
import GlobalStyles from "../styling/global"
// import { UnorderedList, ListItem } from "../components/Article/UnorderedList"
import Navigation from "../components/Article/Navigation"
import { Helmet } from "react-helmet"

import coffeeRoasters from "../images/coffeeRoasters.jpg"
import thinkful from "../images/thinkful.png"
import vof from "../images/visionsOfFlight.jpg"

const Graveyard = () => {
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
        <Title>The Graveyard</Title>
        <Date>2018 - Present</Date>
        <Paragraph>
          Though not always the most appealing, every project here has served as
          a monumental stepping stone in my growth as a developer.
        </Paragraph>
        <Article>
          <Paragraph>
            <strong>Coffee Roasters</strong>
          </Paragraph>
          <Date>October 2019</Date>
          <ExternalLink
            target="_blank"
            href="https://alexsatchell.github.io/Coffee-Roasters/"
          >
            Live Demo
          </ExternalLink>
          <Paragraph>
            Coffee Roasters is a mock website I created for a coffee roasting
            company in the Finger Lakes region of NY.
          </Paragraph>
          <Image margin={"4rem 0 8rem 0"} src={coffeeRoasters} width={"100%"} />

          <Paragraph margin={"5rem 0 0 0 "}>
            <strong>Thinkful Online Journal</strong>
          </Paragraph>
          <Date>September 2019</Date>
          <ExternalLink
            target="_blank"
            href="https://alexsatchell.github.io/Thinkful-Online-Journal/"
          >
            Live Demo
          </ExternalLink>
          <Paragraph>
            Thinkful was a fun little project I built after getting a solid
            understanding of flexbox. Thinkful is essentially just a glorified
            'todo-list' that utilizes local storage to save state but does have
            a pretty cool div animation if you ask me.
          </Paragraph>
          <Image margin={"4rem 0 8rem 0"} src={thinkful} width={"100%"} />
          <Paragraph margin={"5rem 0 0 0 "}>
            <strong>Visions Of Flight Music Group</strong>
          </Paragraph>
          <Date>June 2019</Date>
          <ExternalLink
            target="_blank"
            href="https://alexsatchell.github.io/VisionsOfFlight-Website/"
          >
            Live Demo
          </ExternalLink>
          <Paragraph>
            Stumbling across this site is a trip through time, as it was my
            first project done for a client. Despite its shortcomings, it brings
            me a lot of joy to reflect upon the hours spent struggling to
            implement seemingly minute features, knowing the plethora of
            knowledge I walked away with.
          </Paragraph>
          <Image margin={"4rem 0 8rem 0"} src={vof} width={"100%"} />
        </Article>
      </ArticleContainer>
    </>
  )
}

export default Graveyard
