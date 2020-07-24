import React, { useReducer } from "react"
import ProjectContext from "./projectContext"
import projectReducer from "./projectReducer"
import { v4 as uuidv4 } from "uuid"

const ProjectState = props => {
  const initialState = {
    projects: [
      {
        id: uuidv4(),
        name: "Asteroids",
        description: "A Near Earth Object tracker built using data from NASA.",
        date: "July 2020",
        githubUrl: "",
        photo: "",
        techStack: [],
        flair: "",
      },
      {
        id: uuidv4(),
        name: "Salist",
        description:
          "A social platform for music sharing, focused on small artist.",
        date: "June 2020",
        githubUrl: "",
        photo: "",
        techStack: ["React", "Node", "Express", "MongoDB"],
      },
      {
        id: uuidv4(),
        name: "Salist",
        description:
          "A social platform for music sharing, focused on small artist.",
        date: "June 2020",
        githubUrl: "",
        photo: "",
        techStack: ["React", "Node", "Express", "MongoDB"],
      },
    ],
  }

  const [state, dispatch] = useReducer(projectReducer, initialState)

  return (
    <ProjectContext.Provider value={{ projects: state.projects }}>
      {props.children}
    </ProjectContext.Provider>
  )
}

export default ProjectState
