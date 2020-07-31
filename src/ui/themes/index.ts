import React from "react"
import { observable } from "mobx"

export enum Theme {
  LIGHT = "light",
  DARK = "dark",
}

export enum ThemeLocalKey {
  SST = "swoppy-space-theme",
}

export const getTheme = (key: ThemeLocalKey) => {
  let theme
  if (typeof window !== "undefined") {
    theme = window.localStorage.getItem(key)
  }

  if (theme === Theme.LIGHT) {
    return Theme.LIGHT
  } else if (theme === Theme.DARK) {
    return Theme.DARK
  } else {
    return Theme.DARK
  }
}

export const GlobalThemeStore = observable.box(getTheme(ThemeLocalKey.SST))
export const ThemeContext = React.createContext(getTheme(ThemeLocalKey.SST))
export const ThemeProvider = ThemeContext.Provider
export const ThemeConsumer = ThemeContext.Consumer

export const setTheme = (theme: Theme) => {
  if (typeof window !== "undefined") {
    window.localStorage.setItem(ThemeLocalKey.SST, theme)
  }
}

export type ThemedStyles<K extends {}> = Record<Theme, K>

export function useStyles<K>(themedStyles: ThemedStyles<K>): K {
  const theme = React.useContext(ThemeContext)
  return themedStyles[theme]
}
