import React from "react"
import { useStyles, ThemedStyles, Theme } from "../../ui/themes"
import { Bitcoin_qr } from "../image/btc_qr"
import { Monero_qr } from "../image/xmr_qr"
const baseStyles = require("./intro_isometric.module.css")

type IntroIsometricStyles = {
  gridSide: string
  gridFront: string
  gridTop: string
  block: string
  window: string
  roof: string
  wallA: string
  orangelg: string
  btc: string
  floor: string
}

const themedStyles: ThemedStyles<IntroIsometricStyles> = {
  [Theme.LIGHT]: {
    gridSide: baseStyles.gridSide,
    gridFront: baseStyles.gridFront,
    gridTop: baseStyles.gridTop,
    block: baseStyles.block,
    window: baseStyles.window,
    roof: baseStyles.roof,
    wallA: baseStyles.wallA,
    orangelg: baseStyles.orangelg,
    btc: baseStyles.btc,
    floor: baseStyles.floor,
  },
  [Theme.DARK]: {
    gridSide: baseStyles.gridSide,
    gridFront: baseStyles.gridFront,
    gridTop: baseStyles.gridTop,
    block: baseStyles.block,
    window: baseStyles.window,
    roof: baseStyles.roof,
    wallA: baseStyles.wallA,
    orangelg: baseStyles.orangelg,
    btc: baseStyles.btc,
    floor: baseStyles.floor,
  },
}

type FillerProps = {
  length: Number
  content?: string //debugging purpose
}

const Filler = ({ length, content = "" }: FillerProps) => {
  let fillers = []
  for (let x = 0; x < length; x++) {
    fillers.push(<div key={x}>{`${content}`}</div>)
  }
  return <>{fillers}</>
}

export const IntroIsometric = () => {
  const styles = useStyles(themedStyles)
  return (
    <>
      <div className={styles.gridSide}>
        <Filler length={11} /> {/*Generates 11 divs*/}
        <div className={styles.window}></div>
        <Filler length={22} /> {/*Generates 22 divs*/}
        <div className={styles.wallA}></div>
        <Filler length={6} />
        <div className={styles.wallA}></div>
        <Filler length={5} />
        <div className={styles.window}></div>
        <Filler length={17} />
        <div className={styles.window}></div>
        <Filler length={7} />
        <div className={styles.wallA}></div>
        <Filler length={15} />
        <div className={styles.wallA}></div>
        <Filler length={7} />
        <div className={styles.wallA}></div>
        <Filler length={10} />
      </div>
      <div className={styles.gridFront}>
        <Filler length={26} />
        <div className={styles.wallA}></div>
        <Filler length={16} />
        <div>
          <Bitcoin_qr />
        </div>
        <Filler length={4} />
        <div className={styles.window}></div>
        <Filler length={1} />
        <div className={styles.wallA}></div>
        <Filler length={13} />
        <div className={styles.wallA}></div>
        <Filler length={11} />
        <div className={styles.window}></div>
        <Filler length={3} />
        <div className={styles.window}></div>
        <Filler length={11} />
        <div className={styles.window}></div>
        <Filler length={50} />
      </div>
      <div className={styles.gridTop}>
        <Filler length={50} />
        <div className={styles.roof}></div>
        <Filler length={120} />
        <div className={styles.roof}></div>
        <Filler length={55} />
        <div>
          <Monero_qr />
        </div>
        <Filler length={1} />
        <div className={styles.floor}></div>
        <Filler length={3} />
        <div className={styles.roof}></div>
        <Filler length={115} />
        <div className={styles.roof}></div>
        <Filler length={2} />
        <div className={styles.floor}></div>
        <Filler length={53} />
        <div className={styles.roof}></div>
        <Filler length={64} />
        <div className={styles.roof}></div>
        <Filler length={56} />
        <div className={styles.roof}></div>
        <Filler length={56} />
      </div>
    </>
  )
}
