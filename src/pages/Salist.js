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

import salistBrowserImage from "../images/salist.jpg"
import catMeme from "../images/catMeme.jpg"

const Salist = () => {
  return (
    <>
      <Navigation />
      <ArticleContainer>
        <Title>Salist</Title>
        <Date>June 2020</Date>
        <ExternalLink target="_blank" href="https://salist.netlify.app/">
          Live Demo
        </ExternalLink>
        <Article>
          <Paragraph>
            <strong>A Music App for the starving artist</strong>
          </Paragraph>
          <Paragraph>
            Aside from a few meager (dare I say) applications, Salist was my
            first real dive into the world of React. My goal with Salist was to
            create an engaging, endless feed of randomly queried, undiscovered
            artists and music, that users could easily follow and save to their
            library.
          </Paragraph>
          <Image src={salistBrowserImage} width={"80%"} />
          <Paragraph>
            <strong>Building the API</strong>
          </Paragraph>
          <Paragraph>
            At the turn of the year, I decided I wanted to take a break from the
            glitz and glam of the frontend, and get my hands dirty with some
            backend logic. After a short stint with Django, I found myself
            engulfed with all things node. When building Salist, I was able to
            leverage the (humble) knowledge gained and build an API with data
            storage, and authentication using JWT.
          </Paragraph>
          <Paragraph margin={"2rem 0 0 0 "}>
            <strong>No love from the Like Button</strong>
          </Paragraph>
          <Paragraph>
            When things don't go according to plan, (and I've already refreshed
            the browser) the one phrase that usually helps me uncover the issue
            is this: <strong>it's all my fault.</strong>
          </Paragraph>
          <Image src={catMeme} width={"70%"} alt="cat meme" />
          <Paragraph>
            Where and at one point did I mislead the browser to display such
            incorrect, and disheartening results? It was while trying to get a
            button component to update 'local-state' elsewhere that I realized I
            didn't know the first thing about managing state in React.
          </Paragraph>
          <Paragraph>
            In order to press onward, it was vital to try and get a better grasp
            of state manangement in React. Thanks to the{" "}
            <ExternalLink target="_blank" href="https://www.robinwieruch.de/">
              meticulous writings of Robin Wieruch
            </ExternalLink>
            , I felt comfortable enough to restructure my app from local state
            management with the useState hook, to global state management
            through React's useContext, and useReducer hooks.
          </Paragraph>
          <Paragraph margin={"2rem 0 0 0 "}>
            <strong>Current State of Salist and Setbacks</strong>
          </Paragraph>
          <Paragraph>
            As is stands, Salist is not currently the app I envision it will one
            day become. Still, however, I want to showcase it here publicly to
            document the roadblocks I am facing.
          </Paragraph>
          <UnorderedList>
            <ListItem>
              <strong>Uploading Files</strong>: I knew I would run into some
              grey areas when dealing with the storage of large uploads such as
              images and audio files, from my understanding GridFS can resolve
              these issues, however, I have not yet fully grasped it.
            </ListItem>
            <ListItem>
              <strong>Security For Users</strong>: While the algorithms and
              techniques currently in place to securely store user data do work,
              they are not professional. In the future, I would like to look
              into potentially outsourcing this task to a 3rd party product such
              as{" "}
              <ExternalLink target="_blank" href="https://auth0.com/">
                Auth0
              </ExternalLink>{" "}
              to instill a better sense of security to the end user.
            </ListItem>
          </UnorderedList>
          <Paragraph margin={"2rem 0 0 0 "}>
            <strong>Final Thoughts</strong>
          </Paragraph>
          <Paragraph>
            While currently more of a button pressing simulator, once file
            uploading is implemented, I hope to have Salist serve as a revolving
            door of new music discovery to its users.
          </Paragraph>
          <Paragraph>That's all for now!</Paragraph>
          <Paragraph>
            If you have any suggestions or thougts please feel free to reach
            out.
          </Paragraph>
          <ExternalLink href="mailto:satchellalex@gmail.com">
            Email
          </ExternalLink>
        </Article>
      </ArticleContainer>
    </>
  )
}

export default Salist
