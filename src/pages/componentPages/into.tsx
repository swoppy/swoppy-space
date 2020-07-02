import React from 'react';
import { Theme, ThemedStyles, useStyles } from "../../ui/themes";
import { ThemeSwitcher } from "../../components/theme_switcher/theme_switcher";
import { HomeStore } from '../store/home_store';
import text from './text/home_text';
// vscode unable to recognize import path for some reason, so ended up using require
const baseStyles = require("../css/home.module.css");

type HomeStyles = {
  pageWrapper: string;
  indexContainer: string;
  knobContainer: string;
  greetingsContainer: string;
}

const themedStyles: ThemedStyles<HomeStyles> = {
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
  store: HomeStore;
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
      <div>
      <h1>{text.intro1}</h1>
      <h2>{text.intro2}</h2>
      </div>
    </div>
  );
};

type IntroProps = {
  store: HomeStore
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

