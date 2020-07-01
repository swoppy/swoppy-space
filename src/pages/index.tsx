import React from "react"
import { Link } from "gatsby"
import SEO from "../components/seo";
import "./css/default.css";
import { Theme, GlobalThemeStore, ThemeProvider } from "../ui/themes";
import { Wrapper } from "../components/wrapper/wrapper";
import { observer } from "mobx-react";
import { HomeStore } from "./store/home_store";
import { Home } from "./componentPages/home";

type IndexPageProps = {
  store: HomeStore;
};

const BaseIndex = ({ store }: IndexPageProps) => {
  return (
  <>
    <SEO title=""/>
    <Wrapper>
      <Home store={store}/>
      {/* <Link to="donate">Go to donate page</Link> <br /> */}
    </Wrapper>
  </>
  );
};

const IndexPage = observer(() => {
  const [store] = React.useState(
    new HomeStore(GlobalThemeStore.get() === Theme.DARK)
  );
  return (
    <ThemeProvider value={GlobalThemeStore.get()}>
      <BaseIndex store={store}/>
    </ThemeProvider>
  );
})

export default IndexPage;
