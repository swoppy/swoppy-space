import React, { useState, useEffect } from "react"
import { Theme, ThemedStyles, useStyles } from "../../ui/themes"
import text from "./text/project_text"
import {
  githubFetchRepo,
  allowedRepo,
  RepoName,
  RepoProps,
  RepoKey,
} from "../../services/project_resource"
import { ExternalLink } from ".."
import { abbvTech, LangString, Tech } from "../../ui/helpers/section_helpers"
const baseStyles = require("../../css/project.module.css")

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
  language: string
  jsBall: string
  tsBall: string
  neverBall: string
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
    language: baseStyles.language,
    jsBall: baseStyles.jsBall,
    tsBall: baseStyles.tsBall,
    neverBall: baseStyles.neverBall,
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
    language: baseStyles.language,
    jsBall: baseStyles.jsBall,
    tsBall: baseStyles.tsBall,
    neverBall: baseStyles.neverBall,
  },
}

const getLangStyle = (styles: ProjectStyles, lang: LangString | null) => {
  switch (lang) {
    case Tech.JavaScript:
      return styles.jsBall
    case Tech.TypeScript:
      return styles.tsBall
    default:
      return styles.neverBall
  }
}

const ProjectBox = () => {
  const styles = useStyles(themedStyles)
  const [isLoaded, setIsLoaded] = useState(false)
  const [error, setError] = useState(null)
  const [resource, setResource] = useState([])

  useEffect(() => {
    githubFetchRepo().then(
      item => {
        setIsLoaded(true)
        setResource(
          item.filter((prop: Record<RepoKey, RepoName>) => {
            if (allowedRepo.includes(prop.name)) {
              return prop
            }
          })
        )
      },
      error => {
        setIsLoaded(true)
        setError(error)
      }
    )
  }, [])
  return (
    <>
      {resource.map((item: RepoProps, key: number) => {
        return (
          <div className={styles.project} key={key}>
            <ExternalLink to={item.html_url!} className={styles.description}>
              <span>{item.description}</span>
            </ExternalLink>
            <div className={styles.sub}>
              <span className={styles.name}>{item.name}</span>
              <div className={styles.language}>
                <span className={getLangStyle(styles, item.language)}></span>
                <span>{abbvTech(item.language)}</span>
              </div>
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
