import React, { useState } from "react"
import { Theme, ThemedStyles, useStyles } from "../../ui/themes"
import text from "./text/project_text"
import {
  githubFetchRepo,
  allowedRepo,
  RepoName,
  RepoProps,
  RepoKey,
} from "../../services/project_resource"
import { ExternalLink } from "../../components/"
const baseStyles = require("../css/project.module.css")

type ProjectStyles = {
  container: string
  content: string
  header: string
  viewAllLink: string
  wrapper: string
  projectContainer: string
  project: string
  description: string
  sub: string
  name: string
  projectLink: string
}

const themedStyles: ThemedStyles<ProjectStyles> = {
  [Theme.LIGHT]: {
    container: baseStyles.lightContainer,
    header: baseStyles.header,
    viewAllLink: baseStyles.lightViewAllLink,
    content: baseStyles.content,
    wrapper: baseStyles.wrapper,
    projectContainer: baseStyles.projectContainer,
    project: baseStyles.lighProject,
    description: baseStyles.description,
    sub: baseStyles.sub,
    name: baseStyles.lightName,
    projectLink: baseStyles.projectLink,
  },
  [Theme.DARK]: {
    container: baseStyles.darkContainer,
    header: baseStyles.header,
    viewAllLink: baseStyles.darkViewAllLink,
    content: baseStyles.content,
    wrapper: baseStyles.wrapper,
    projectContainer: baseStyles.projectContainer,
    project: baseStyles.darkProject,
    description: baseStyles.description,
    sub: baseStyles.sub,
    name: baseStyles.darkName,
    projectLink: baseStyles.projectLink,
  },
}

// for lazy loading style pattern, wherin mitigates useEffect race
// can transfer this to useEffect as well, we'll see.
let initialResource: any = []
githubFetchRepo().then(item => {
  return (initialResource = item.filter((prop: Record<RepoKey, RepoName>) => {
    if (allowedRepo.includes(prop.name)) {
      return prop
    }
  }))
})

const ProjectBox = () => {
  const styles = useStyles(themedStyles)
  const [resource] = useState(initialResource)
  return (
    <>
      {resource.map((item: RepoProps, key: number) => {
        return (
          <div className={styles.project} key={key}>
            <div className={styles.description}>
              <span>{item.description}</span>
            </div>
            <div className={styles.sub}>
              <span className={styles.name}>{item.name}</span>
              <span className={styles.projectLink}>
                <ExternalLink to={item.html_url!}>link</ExternalLink>
              </span>
            </div>
          </div>
        )
      })}
    </>
  )
}

const ProjectList = () => {
  const styles = useStyles(themedStyles)
  return (
    <div className={styles.projectContainer}>
      <ProjectBox />
    </div>
  )
}

export const Projects = () => {
  const styles = useStyles(themedStyles)
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.header}>
          <span>{text.project}</span>
          <span>
            <ExternalLink to={text.viewAllLink} className={styles.viewAllLink}>
              {text.viewAll}
            </ExternalLink>
          </span>
        </div>
        <ProjectList />
      </div>
    </div>
  )
}
