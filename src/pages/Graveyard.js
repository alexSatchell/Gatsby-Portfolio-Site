import React from "react"
import { ArticleContainer } from "../components/Article/Container"
import { Title } from "../components/Article/Title"
import { Date } from "../components/Article/Date"
import { ExternalLink } from "../components/Article/ExternalLink"
import { Article } from "../components/Article/ArticleContainer"
import { Paragraph } from "../components/Article/Paragraph"
import { Image } from "../components/Article/Image"
import { UnorderedList, ListItem } from "../components/Article/UnorderedList"
import Navigation from "../components/Article/Navigation"

import coffeeRoasters from "../images/coffeeRoasters.jpg"

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
          inevitable 'imposter syndrome' we all face.
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

          <Paragraph margin={"3rem 0 0 0 "}>
            <strong>Thinkful Online Journal</strong>
          </Paragraph>
          <Date>September 2019</Date>
          <Paragraph>
            "Thinkful" was a fun little project I built after getting a solid
            understanding of flexbox. Nothing too much is going on here, You
            write a note, and it gets stored in local storage.
          </Paragraph>
        </Article>
      </ArticleContainer>
    </>
  )
}

export default Graveyard
