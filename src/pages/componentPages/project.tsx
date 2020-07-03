import React from 'react';
import { Theme, ThemedStyles, useStyles } from '../../ui/themes';
import text from './text/project_text';
import { github } from '../../services/placeholder';
const baseStyles = require('../css/project.module.css');

type ProjectStyles = {
  container: string;
  content: string;
  header: string;
  viewAllLink: string;
  wrapper: string;
  projectContainer: string;
  project: string;
  description: string;
  sub: string;
  name: string;
  projectLink: string;
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
};

export const Project = () => {
  const styles = useStyles(themedStyles);
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.header}>
          <span>{text.project}</span>
          <span>
            <a href={text.viewAllLink}
              rel='noopener noreferrer'
              target='_blank'
              className={styles.viewAllLink}
            >
              {text.viewAll}
            </a>
          </span>
        </div>
        <div className={styles.projectContainer}>
          {github.map((item) => {
            return (
              <div className={styles.project}>
                <div className={styles.description}>
                  <span>{item.description}</span>
                </div>
                <div className={styles.sub}>
                  <span className={styles.name}>{item.name}</span>
                  <span className={styles.projectLink}>{item.projectLink}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};