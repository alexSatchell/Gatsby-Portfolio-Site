import React from "react"
import { ArticleContainer } from "../components/Article/Container"
import { Title } from "../components/Article/Title"
import { Date } from "../components/Article/Date"
import { ExternalLink } from "../components/Article/ExternalLink"
import { Article } from "../components/Article/ArticleContainer"
import { Paragraph } from "../components/Article/Paragraph"
import { Image } from "../components/Article/Image"
// import { UnorderedList, ListItem } from "../components/Article/UnorderedList"
import Navigation from "../components/Article/Navigation"

import coffeeRoasters from "../images/coffeeRoasters.jpg"
import thinkful from "../images/thinkful.png"

const Graveyard = () => {
  return (
    <>
      <Navigation />
      <ArticleContainer>
        <Title>The Graveyard</Title>
        <Date>2018 - Present</Date>
        <Paragraph>
          Though not always the most appealing, every project here has served as
          a monumental stepping stone in my growth as a developer. I believe it
          is vital to document your programming journey and can help prevent the
          inevitable "imposter syndrome" we all face.
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
          <Image src={coffeeRoasters} width={"100%"} />

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
            understanding of flexbox. Thinkful is essentially a glorified
            'todo-list' that utilizes local storage to save state but does have
            a cool div animation if you ask me.
          </Paragraph>
          <Image src={thinkful} width={"100%"} />
          <Paragraph margin={"5rem 0 0 0 "}>
            <strong>Visions Of Flight Music Group</strong>
          </Paragraph>
          <Date>June 2019</Date>
          <ExternalLink
            target="_blank"
            href="https://alexsatchell.github.io/Coffee-Roasters/"
          >
            Live Demo
          </ExternalLink>
          <Paragraph>
            Stumbling across this project is a trip through time as it was my
            first web design project for a client. Despite it's obvious
            shortcomings, It brings me alot of joy to reflect upon the hours
            spent struggling to implement seemingly minute features, knowing the
            plethura of knowledge I walked away with in the end. Visions Of
            Flight without a doubt was a without a doubt the moment I knew I
            wanted spend the rest of my life creating.
          </Paragraph>
        </Article>
      </ArticleContainer>
    </>
  )
}

export default Graveyard
