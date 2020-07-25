import React from "react"

import {
  ProjectContainer,
  ProjectTitle,
  NameDateContainer,
  Description,
  Date,
} from "./styles"

const ProjectItem = ({ project }) => {
  const { name, description, date } = project

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
