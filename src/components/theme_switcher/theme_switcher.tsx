import React, { useCallback, useState, useEffect } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faSun, faMoon } from "@fortawesome/free-regular-svg-icons"
import { ThemedStyles, Theme, useStyles } from "../../ui/themes"
import { observer } from "mobx-react"
import { BooleanStore } from "../../ui/generic_store"
const baseStyles = require("./theme_switcher.module.css")

type ThemeSwitcherStyles = {
  logoContainer: string
  logoContainerAnimation: string
  inputToggle: string
  label: string
}

const themedStyles: ThemedStyles<ThemeSwitcherStyles> = {
  [Theme.LIGHT]: {
    logoContainer: baseStyles.lightLogoContainer,
    logoContainerAnimation: baseStyles.lightAnimation,
    inputToggle: baseStyles.inputToggle,
    label: baseStyles.lightLabel,
  },
  [Theme.DARK]: {
    logoContainer: baseStyles.darkLogoContainer,
    logoContainerAnimation: baseStyles.darkAnimation,
    inputToggle: baseStyles.inputToggle,
    label: baseStyles.darkLabel,
  },
}

type BaseThemeSwitcherProps = {
  store: BooleanStore
}

export const ThemeSwitcher = observer(({ store }: BaseThemeSwitcherProps) => {
  const styles = useStyles(themedStyles)
  const [animate, setAnimate] = useState<string | null>(null)

  const handleToggle = useCallback(() => {
    store.setValue(!store.value)
    setAnimate(styles.logoContainerAnimation)
  }, [store, styles.logoContainerAnimation])

  const onAnimationEnd = useCallback(() => {
    setAnimate(null)
  }, [styles.logoContainer])

  return (
    <>
      <input
        className={styles.inputToggle}
        type="checkbox"
        checked={store.value}
        onChange={handleToggle}
      />
      <label className={styles.label}>
        <div
          className={`${styles.logoContainer} ${animate}`}
          onClick={handleToggle}
          onAnimationEnd={onAnimationEnd}
        >
          <FontAwesomeIcon icon={store.value ? faSun : faMoon} />
        </div>
      </label>
    </>
  )
})
