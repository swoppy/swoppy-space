import React from "react"
import "../../css/default.css"
import { Theme, GlobalThemeStore, ThemeProvider } from "../../ui/themes"
import { Wrapper, ScrollableArea } from "../../components"
import { observer } from "mobx-react"
import { ThemeStore } from "../../store/theme_store"
import { Contact, Intro, Projects } from "../componentSections"
import SEO from "../seo/seo"
import { PerformanceLink } from "../performance_link/performance_link"

type IndexPageProps = {
  store: ThemeStore
}

const BaseIndex = ({ store }: IndexPageProps) => {
  return (
    <>
      <SEO title="" />
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

const IndexPage = observer(() => {
  const [store] = React.useState(
    new ThemeStore(GlobalThemeStore.get() === Theme.DARK)
  )
  return (
    <ThemeProvider value={GlobalThemeStore.get()}>
      <BaseIndex store={store} />
    </ThemeProvider>
  )
})

export default IndexPage
