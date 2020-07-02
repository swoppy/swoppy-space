import React from 'react';
import { Theme, ThemedStyles, useStyles } from '../../ui/themes';
const baseStyles = require('../css/project.module.css');

type ProjectStyles = {
  container: string;
}

const themedStyles: ThemedStyles<ProjectStyles> = {
  [Theme.LIGHT]: {
    container: baseStyles.container,
  },
  [Theme.DARK]: {
    container: baseStyles.container,
  },
};

export const Project = () => {
  const styles = useStyles(themedStyles);
  return (
    <div className={styles.container}>
      <h1>This is projects</h1>
    </div>
  );
};