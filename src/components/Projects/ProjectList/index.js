import React, { useContext } from "react"
import ProjectContext from "../../../context/projects/projectContext"
import { ProjectListContainer, List } from "./styles"
import ProjectItem from "../ProjectItem/"

const ProjectList = () => {
  const projectContext = useContext(ProjectContext)
  const { projects } = projectContext

  return (
    <ProjectListContainer>
      <List>
        {projects.map(project => (
          <ProjectItem key={project.id} project={project} />
        ))}
      </List>
    </ProjectListContainer>
  )
}

export default ProjectList
