import React from "react"
import { ArticleContainer } from "../components/Article/Container"
import { Title } from "../components/Article/Title"
import { Date } from "../components/Article/Date"
import { ExternalLink } from "../components/Article/ExternalLink"
import { Article } from "../components/Article/ArticleContainer"
import { Paragraph } from "../components/Article/Paragraph"
import { Image } from "../components/Article/Image"
import Navigation from "../components/Article/Navigation"

import dangerMeme from "../images/dangerMeme.jpg"
import { UnorderedList, ListItem } from "../components/Article/UnorderedList"
// import { InternalLink } from "../components/Article/InternalLink"

const Asteroids = () => {
  return (
    <>
      <Navigation />
      <ArticleContainer>
        <Title>Asteroids</Title>
        <Date>July 2020</Date>
        <ExternalLink target="_blank" href="https://asteroidsneo.netlify.app/">
          Live Demo
        </ExternalLink>
        <Article>
          <Paragraph>
            <strong>STOP! Meteors Crossing... </strong>
          </Paragraph>
          <Paragraph>
            Earlier this year I came across a fantastic read written by Bill
            Bryson called{" "}
            <ExternalLink
              target="blank"
              href="https://en.wikipedia.org/wiki/A_Short_History_of_Nearly_Everything"
            >
              <i style={{ cursor: "pointer" }}>
                A Short History of Nearly Everything
              </i>
            </ExternalLink>
            . The book covers the different branches of Science and their
            respective origins including Biology, Chemistry, Physics, and
            Astronomy, in a manner that is consumable by the general public.
          </Paragraph>
          <Paragraph>
            One of my favorite chapters in this book is focused on asteroids and
            their violent history with our home planet. Ultimately, the
            information here founded the inspiration behind my Asteroids app.
          </Paragraph>
          <Paragraph>
            <strong>One last space fact</strong>
          </Paragraph>
          <Paragraph>
            "Suppose that there was a button you could push and you could light
            up all the Earth-crossing asteroids larger than about ten metres,
            there would be over a hundred million of these objects in the sky" -
            Steve Ostro
          </Paragraph>
          <Paragraph>
            In essence, you wouldn't just see the usual stars shining off in the
            distance, joining them would be an additional million nearer
            randomly moving objects all capable of colliding with Earth.
            Yikes...
          </Paragraph>
          <Image src={dangerMeme} width={"80%"} />
          <Paragraph margin={"2rem 0 0 0 "}>
            <strong>Data Powered by NASA</strong>
          </Paragraph>
          <Paragraph>
            So if you weren't already aware, NASA has a bunch of free open API's
            filled with awesome data you can use right now. Some of my favorites
            include:
          </Paragraph>
          <UnorderedList>
            <ListItem>
              <strong>Insight</strong>: A Mars Weather Service API
            </ListItem>
            <ListItem>
              <strong>Mars Rover Photos</strong>: Daily updated image data
              gathered by NASA's Curiosity, Opportunity, and Spirit rovers.
            </ListItem>
            <ListItem>
              <strong>NeoW</strong>: The Near-Earth Object Web Service API
              tracks asteroids in our solar system that are nearing Earth. This
              API is powering my Asteroids application.
            </ListItem>
          </UnorderedList>
          <Paragraph margin={"2rem 0 0 0 "}>
            <strong>Project Goals</strong>
          </Paragraph>
          <Paragraph>
            Coming into this project, I wanted to build upon my understanding of
            React hooks. I was able to get a better grasp of React's useReducer
            and useContext hooks by providing an 'asteroid state' to multiple
            different components throughout my application. From a learning
            perspective, the useContext hook's method of providing state to
            those that need it instead of trying to prop drill and pass
            information from one component to another made things a lot easier.
          </Paragraph>
          <Paragraph margin={"2rem 0 0 0 "}>
            <strong>Final Thoughts</strong>
          </Paragraph>
          <Paragraph>
            Building Asteroids introduced me to a couple of new JS libraries and
            helped me solve issues I had not yet faced. One of the libraries I
            got to use on this project is{" "}
            <ExternalLink target="_blank" href="https://momentjs.com/">
              MomentJS
            </ExternalLink>
            . Using Moment allowed me to easily parse, validate, and format the
            dates in my application. Overall building this application was a
            very rewarding experience as I got to work with some awesome data
            and even experiment with some 3D. Next up, I am looking to build out
            a React 'game of things' clone using firebase on the backend for
            real-time synchronization of the game state.
          </Paragraph>
          <Paragraph>Until next time,</Paragraph>
          <ExternalLink href="mailto:satchellalex@gmail.com">
            Email
          </ExternalLink>
        </Article>
      </ArticleContainer>
    </>
  )
}

export default Asteroids
