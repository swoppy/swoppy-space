import React from "react"
import { Theme, ThemedStyles, useStyles } from "../../ui/themes"
import { ThemeSwitcher } from ".."
import { ThemeStore } from "../../store/theme_store"
import text from "./text/home_text"
import { Isometric } from "../isometric_art/intro_isometric"
import { observer } from "mobx-react"
const baseStyles = require("../../css/intro.module.css")

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
      <section className={styles.greetingsContainer}>
        <h1>{text.intro1}</h1>
        <h2>
          <p>{text.intro2}</p>
        </h2>
      </section>
      <div className={styles.square}>
        <Isometric />
      </div>
    </div>
  )
}

type IntroProps = {
  store: ThemeStore
}

export const Intro = observer(({ store }: IntroProps) => {
  const styles = useStyles(themedStyles)
  return (
    <div className={styles.indexContainer}>
      <ThemeSection store={store} />
      <IntroSection />
    </div>
  )
})
