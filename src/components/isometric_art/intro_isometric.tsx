import React from "react"
import { useStyles, ThemedStyles, Theme } from "../../ui/themes"
const baseStyles = require("./intro_isometric.module.css")

type IntroIsometricStyles = {
  artContainer: string
  shadow: string
}

const themedStyles: ThemedStyles<IntroIsometricStyles> = {
  [Theme.LIGHT]: {
    artContainer: baseStyles.artContainer,
    shadow: baseStyles.shadow,
  },
  [Theme.DARK]: {
    artContainer: baseStyles.artContainer,
    shadow: baseStyles.shadow,
  },
}

export const IntroIsometric = () => {
  const styles = useStyles(themedStyles)
  return (
    <>
      <span className={styles.shadow}></span>
      <div className={styles.artContainer}>
        <span></span>
      </div>
    </>
  )
}
