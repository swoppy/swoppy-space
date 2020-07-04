import React from 'react';
import { Theme, ThemedStyles, useStyles } from "../../ui/themes";
import { ThemeSwitcher } from "../../components";
import { ThemeStore } from '../store/theme_store';
import text from './text/home_text';
// vscode unable to recognize import path for some reason, so ended up using require
const baseStyles = require("../css/intro.module.css");

type IntroStyles = {
  pageWrapper: string;
  indexContainer: string;
  knobContainer: string;
  greetingsContainer: string;
}

const themedStyles: ThemedStyles<IntroStyles> = {
  [Theme.LIGHT]: {
    indexContainer: baseStyles.indexContainer,
    knobContainer: baseStyles.knobContainer,
    pageWrapper: baseStyles.pageWrapper,
    greetingsContainer: baseStyles.lightGreetingsContainer,
  },
  [Theme.DARK]: {
    indexContainer: baseStyles.indexContainer,
    knobContainer: baseStyles.knobContainer,
    pageWrapper: baseStyles.pageWrapper,
    greetingsContainer: baseStyles.darkGreetingsContainer,
  },
};

type ThemeSectionProps = {
  store: ThemeStore;
};

const ThemeSection = ({ store }: ThemeSectionProps) => {
  const styles = useStyles(themedStyles);
  return (
    <div className={styles.knobContainer}>
      <ThemeSwitcher store={store.theme}/>
    </div>
  );
};

const IntroText = () => {
  const styles = useStyles(themedStyles);
  return (
    <div className={styles.greetingsContainer}>
      <h1>{text.intro1}</h1>
      <h4><p>{text.intro2}</p></h4>
    </div>
  );
};

type IntroProps = {
  store: ThemeStore
};

export const Intro = ({ store }: IntroProps) => {
  const styles = useStyles(themedStyles);
  return (
    <div className={styles.indexContainer}>
      <ThemeSection store={store}/>
      <IntroText/>
    </div>
  );
};
