import React from "react"
import { Link } from "gatsby"
import SEO from "../seo"
import "../../css/default.css"
import { Theme, GlobalThemeStore, ThemeProvider } from "../../ui/themes"
import { Wrapper, ScrollableArea } from "../../components"
import { observer } from "mobx-react"
import { ThemeStore } from "../../store/theme_store"
import { Intro, Projects } from "../../components/componentSections"

type IndexPageProps = {
  store: ThemeStore
}

const BaseIndex = ({ store }: IndexPageProps) => {
  return (
    <>
      <SEO title="" />
      <ScrollableArea>
        <Wrapper>
          <Intro store={store} />
        </Wrapper>
        <Wrapper>
          <Projects />
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