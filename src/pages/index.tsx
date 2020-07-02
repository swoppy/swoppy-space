import React from "react"
import { Link } from "gatsby"
import SEO from "../components/seo";
import "./css/default.css";
import { Theme, GlobalThemeStore, ThemeProvider } from "../ui/themes";
import { Wrapper, ScrollableArea } from "../components";
import { observer } from "mobx-react";
import { ThemeStore } from "./store/theme_store";
import { Intro, Project } from "./componentPages";

type IndexPageProps = {
  store: ThemeStore;
};

const BaseIndex = ({ store }: IndexPageProps) => {
  return (
  <>
    <SEO title=""/>
    <ScrollableArea>
      <Wrapper>
        <Intro store={store}/>
      </Wrapper>
      <Wrapper>
        <Project/>
      </Wrapper>
    </ScrollableArea>
  </>
  );
};

const IndexPage = observer(() => {
  const [store] = React.useState(
    new ThemeStore(GlobalThemeStore.get() === Theme.DARK)
  );
  return (
    <ThemeProvider value={GlobalThemeStore.get()}>
      <BaseIndex store={store}/>
    </ThemeProvider>
  );
})

export default IndexPage;
