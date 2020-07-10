import React from "react"
import { useStyles, ThemedStyles, Theme } from "../../ui/themes"
const baseStyles = require("./intro_isometric.module.css")

type IntroIsometricStyles = {
  gridBackLeft: string
  gridFront: string
  gridTop: string
  block: string
  window: string
  roof: string
  background: string
  orangelg: string
}

const themedStyles: ThemedStyles<IntroIsometricStyles> = {
  [Theme.LIGHT]: {
    gridBackLeft: baseStyles.lightGridBackLeft,
    gridFront: baseStyles.gridFront,
    gridTop: baseStyles.gridTop,
    block: baseStyles.block,
    window: baseStyles.window,
    roof: baseStyles.roof,
    background: baseStyles.background,
    orangelg: baseStyles.orangelg,
  },
  [Theme.DARK]: {
    gridBackLeft: baseStyles.darkGridBackLeft,
    gridFront: baseStyles.gridFront,
    gridTop: baseStyles.gridTop,
    block: baseStyles.block,
    window: baseStyles.window,
    roof: baseStyles.roof,
    background: baseStyles.background,
    orangelg: baseStyles.orangelg,
  },
}

type FillerProps = {
  length: Number
}

const Filler = ({ length }: FillerProps) => {
  let fillers = []
  for (let x = 0; x < length; x++) {
    fillers.push(<div>{x}</div>)
  }
  return <>{fillers}</>
}

export const IntroIsometric = () => {
  const styles = useStyles(themedStyles)
  return (
    <>
      <div className={styles.gridBackLeft}>
        <Filler length={11} /> {/*Generates 11 divs*/}
        <div className={styles.window}>window</div>
        <Filler length={22} /> {/*Generates 22 divs*/}
        <div className={styles.window}>window</div>
        <Filler length={6} />
        <div className={styles.orangelg}>orange</div>
        <Filler length={23} />
        <div className={styles.orangelg}>66</div>
        <Filler length={34} />
      </div>
      <div className={styles.gridFront}>
        <Filler length={43} />
        <div className={styles.window}>window</div>
        <Filler length={6} />
        <div className={styles.block}>block</div>
        <Filler length={13} />
        <div className={styles.window}>window</div>
        <Filler length={15} />
        <div className={styles.window}>window</div>
        <Filler length={22} />
      </div>
      <div className={styles.gridTop}>
        <Filler length={50} />
        <div className={styles.block}>block</div>
        <Filler length={120} />
        <div className={styles.block}>block</div>
        <Filler length={36} />
        <div className={styles.block}>block</div>
        <Filler length={18} />
        <div className={styles.block}>block</div>
        <Filler length={121} />
        <div className={styles.block}>50</div>
        <Filler length={101} />
      </div>
    </>
  )
}
