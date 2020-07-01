import React from "react"
import { Link } from "gatsby"
import SEO from "../components/seo";
import "./css/default.css";
import { IndexStore } from "./store/index_store";
import { Theme, ThemedStyles, GlobalThemeStore, useStyles, ThemeProvider } from "../ui/themes";
import { ThemeSwitcher } from "../components/theme_switcher/theme_switcher";
import { Wrapper } from "../components/wrapper/wrapper";
import { observer } from "mobx-react";

// vscode unable to recognize import path for some reason, so ended up using require
const baseStyles = require("./css/index.module.css");

type IndexStyles = {
  pageWrapper: string;
  knobContainer: string;
}

const themedStyles: ThemedStyles<IndexStyles> = {
  [Theme.LIGHT]: {
    knobContainer: baseStyles.knobContainer,
    pageWrapper: baseStyles.pageWrapper,
  },
  [Theme.DARK]: {
    knobContainer: baseStyles.knobContainer,
    pageWrapper: baseStyles.pageWrapper,
  },
};

type IndexPageProps = {
  store: IndexStore;
};

const BaseIndex = ({ store }: IndexPageProps) => {
  const styles = useStyles(themedStyles);
  return (
  <>
    <SEO title=""/>
    <Wrapper>
      <div className={styles.knobContainer}>
        <ThemeSwitcher store={store.theme}/>
      </div>
      <Link to="donate">Go to donate page</Link> <br />
    </Wrapper>
  </>
  );
};

const IndexPage = observer(() => {
  const [store] = React.useState(
    new IndexStore(GlobalThemeStore.get() === Theme.DARK)
  );
  console.log(GlobalThemeStore.get());
  return (
    <ThemeProvider value={GlobalThemeStore.get()}>
      <BaseIndex store={store}/>
    </ThemeProvider>
  );
})

export default IndexPage;
