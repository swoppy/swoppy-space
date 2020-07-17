import React, { useState, useEffect } from "react"
import { observable, set } from "mobx"

export enum Theme {
  LIGHT = "light",
  DARK = "dark",
}

export const getTheme = (localItem: string | null): Theme => {
  if (localItem === Theme.LIGHT) {
    return Theme.LIGHT
  } else if (localItem === Theme.DARK) {
    return Theme.DARK
  } else {
    return Theme.DARK
  }
}

export enum ThemeLocalKey {
  SST = "swoppy-space-theme",
}

export const GlobalThemeStore = observable.box(
  getTheme(localStorage.getItem(ThemeLocalKey.SST))
)
export const ThemeContext = React.createContext(
  getTheme(localStorage.getItem(ThemeLocalKey.SST))
)
export const ThemeProvider = ThemeContext.Provider
export const ThemeConsumer = ThemeContext.Consumer

export type ThemedStyles<K extends {}> = Record<Theme, K>

export function useStyles<K>(themedStyles: ThemedStyles<K>): K {
  const theme = React.useContext(ThemeContext)
  return themedStyles[theme]
}
