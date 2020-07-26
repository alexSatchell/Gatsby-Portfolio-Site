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

const Blog = () => {
  return (
    <>
      <Navigation />
      <ArticleContainer>
        <Title>Blog Coming Soon</Title>
        <Date>July 25th, 2020</Date>
        <Paragraph>
          Thank you for you're intrest in my blog! I promise to have this
          portion of the site updated soon enough.
        </Paragraph>
        <Article></Article>
      </ArticleContainer>
    </>
  )
}

export default Blog
