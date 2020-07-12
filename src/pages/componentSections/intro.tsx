import React from "react"
import { Theme, ThemedStyles, useStyles } from "../../ui/themes"
import { ThemeSwitcher } from "../../components"
import { ThemeStore } from "../store/theme_store"
import text from "./text/home_text"
import { IntroIsometric } from "../../components/isometric_art/intro_isometric"
// vscode unable to recognize import path for some reason, so ended up using require
const baseStyles = require("../css/intro.module.css")

type IntroStyles = {
  pageWrapper: string
  indexContainer: string
  knobContainer: string
  wrapper: string
  greetingsContainer: string
  square: string
}

const themedStyles: ThemedStyles<IntroStyles> = {
  [Theme.LIGHT]: {
    indexContainer: baseStyles.indexContainer,
    knobContainer: baseStyles.knobContainer,
    pageWrapper: baseStyles.pageWrapper,
    wrapper: baseStyles.wrapper,
    greetingsContainer: baseStyles.lightGreetingsContainer,
    square: baseStyles.square,
  },
  [Theme.DARK]: {
    indexContainer: baseStyles.indexContainer,
    knobContainer: baseStyles.knobContainer,
    pageWrapper: baseStyles.pageWrapper,
    wrapper: baseStyles.wrapper,
    greetingsContainer: baseStyles.darkGreetingsContainer,
    square: baseStyles.square,
  },
}

type ThemeSectionProps = {
  store: ThemeStore
}

const ThemeSection = ({ store }: ThemeSectionProps) => {
  const styles = useStyles(themedStyles)
  return (
    <div className={styles.knobContainer}>
      <ThemeSwitcher store={store.theme} />
    </div>
  )
}

const IntroSection = () => {
  const styles = useStyles(themedStyles)
  return (
    <div className={styles.wrapper}>
      <div className={styles.greetingsContainer}>
        <h1>{text.intro1}</h1>
        <h4>
          <p>{text.intro2}</p>
        </h4>
      </div>
      <div className={styles.square}>
        <IntroIsometric />
      </div>
    </div>
  )
}

type IntroProps = {
  store: ThemeStore
}

export const Intro = ({ store }: IntroProps) => {
  const styles = useStyles(themedStyles)
  return (
    <div className={styles.indexContainer}>
      <ThemeSection store={store} />
      <IntroSection />
    </div>
  )
}
