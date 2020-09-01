import React from "react"
import styled from "styled-components"
import { QUERIES } from "../styling/styles"
import { Helmet } from "react-helmet"
import Layout from "../components/Layout"
import GlobalStyles from "../styling/global"
import ProjectState from "../context/projects/ProjectState"

import Header from "../components/Header"
import About from "../components/About"
import ProjectList from "../components/Projects/ProjectList"
import Footer from "../components/Footer"

const Container = styled.div`
  padding: 5rem 1rem 1rem 1rem;
  min-height: 100vh;

  display: grid;
  grid-template-columns:
    1fr [center-start] repeat(8, minmax(min-content, 14rem))
    [center-end] 1fr;
  grid-template-rows: repeat(4, auto);
  grid-row-gap: 10rem;
  margin: 0 auto;
  max-width: 1200px;
  @media (${QUERIES.large}) {
    padding: 5rem 10rem 1rem 10rem;
  }

  @media (${QUERIES.small}) {
    padding: 1rem;
    grid-row-gap: 2rem;
  }
`

export default function Home() {
  return (
    <ProjectState>
      <Layout>
        <Helmet>
          <title>Alexander Satchell | Frontend Developer</title>
          <meta
            name="title"
            content="Alexander Satchell | Front End Developer"
          />
          <meta
            name="decscription"
            content="At my core, I have always sought after and worked to improve the lives of others, whether it be professional, volunteering, or lending a hand to those in need. With technology, I try to place those same ideologies at the forefront of my work."
          />
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://alexmsatchell.com" />
          <meta
            property="og:title"
            content="Alexander Satchell | Front End Developer"
          />
          <meta
            property="og:description"
            content="At my core, I have always sought after and worked to improve the lives of others, whether it be professional, volunteering, or lending a hand to those in need. With technology, I try to place those same ideologies at the forefront of my work."
          />
          <meta />
        </Helmet>
        <GlobalStyles />
        <Container>
          <Header />
          <About />
          <ProjectList />
          <Footer />
        </Container>
      </Layout>
    </ProjectState>
  )
}
