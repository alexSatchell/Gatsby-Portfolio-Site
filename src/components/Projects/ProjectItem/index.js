import React from "react"
import { Link } from "gatsby"
import {
  ProjectContainer,
  ProjectTitle,
  NameDateContainer,
  Description,
  Date,
} from "./styles"
import { Paragraph } from "../../Typography/Paragraph"

const ProjectItem = ({ project }) => {
  const { name, description, date, photo } = project

  return (
    <ProjectContainer>
      <NameDateContainer>
        <ProjectTitle to={name}>{name}</ProjectTitle>
        <Date>{date}</Date>
      </NameDateContainer>
      <Description>{description}</Description>
    </ProjectContainer>
  )
}

export default ProjectItem
