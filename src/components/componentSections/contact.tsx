import React from "react"
import { ThemedStyles, Theme, useStyles } from "../../ui/themes"
import text from "./text/contact_text"
import { ExternalLink } from "../external_link/external_link"
const baseStyles = require("../../css/contact.module.css")

type GetInTouchStyles = {
  container: string
  closingSection: string
  getInTouch: string
  footer: string
  link: string
}

const themedStyles: ThemedStyles<GetInTouchStyles> = {
  [Theme.LIGHT]: {
    container: baseStyles.container,
    closingSection: baseStyles.lightClosingSection,
    getInTouch: baseStyles.lightGetInTouch,
    footer: baseStyles.lightFooter,
    link: baseStyles.link,
  },
  [Theme.DARK]: {
    container: baseStyles.container,
    closingSection: baseStyles.darkClosingSection,
    getInTouch: baseStyles.darkGetInTouch,
    footer: baseStyles.darkFooter,
    link: baseStyles.link,
  },
}

export const Contact = () => {
  const styles = useStyles(themedStyles)
  return (
    <div className={styles.container}>
      <div className={styles.closingSection}>
        <section className={styles.getInTouch}>
          <h3>{text.closing}</h3>
          <h4>
            {text.contacts}
            <ExternalLink to={text.emailAddress} className={styles.link}>
              {text.email}
            </ExternalLink>
            {text.or}
            <ExternalLink to={text.twitterAddress} className={styles.link}>
              {text.twitter}
            </ExternalLink>
          </h4>
        </section>
        <footer className={styles.footer}>
          <div>{text.footer.copyRight}</div>
          <div>{text.footer.builtWith}</div>
        </footer>
      </div>
    </div>
  )
}
