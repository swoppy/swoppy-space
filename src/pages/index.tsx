import React, { useState, useEffect } from "react"
import "../css/default.css"
import { GlobalThemeStore, ThemeProvider, Theme } from "../ui/themes"
import { Wrapper, ScrollableArea } from "../components"
import { observer } from "mobx-react"
import { Contact, Projects, Intro } from "../components/componentSections"
import SEO from "../components/seo/seo"
import { PerformanceLink } from "../components/performance_link/performance_link"
import { ThemeStore } from "../store/theme_store"

type BaseIndexProps = {
  store: ThemeStore
}

const BaseIndex = ({ store }: BaseIndexProps) => {
  return (
    <>
      <SEO />
      <PerformanceLink />
      <ScrollableArea>
        <Wrapper>
          <Intro store={store} />
        </Wrapper>
        <Wrapper>
          <Projects />
        </Wrapper>
        <Wrapper>
          <Contact />
        </Wrapper>
      </ScrollableArea>
    </>
  )
}

const Index = observer(() => {
  const [store, setStore] = useState(new ThemeStore(true))
  const [theme, setTheme] = useState(Theme.DARK)

  useEffect(() => {
    setTheme(GlobalThemeStore.get())
    setStore(new ThemeStore(GlobalThemeStore.get() === Theme.DARK))
  }, [GlobalThemeStore.get()])

  return (
    <ThemeProvider value={theme}>
      <BaseIndex store={store} />
    </ThemeProvider>
  )
})

export default Index
