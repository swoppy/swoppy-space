import React, { useState, useCallback } from "react"
import { useStyles, ThemedStyles, Theme } from "../../ui/themes"
import { ModalStore, Modal } from "../modal"
import { observer } from "mobx-react"
import { DivMouseEvent } from "../../ui/types"
import { QrString, QrBitcoin, QrMonero, QR, QRTEXT } from "../image"
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
  modalContent: string
  qr: string
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
    modalContent: baseStyles.lightModalContent,
    qr: baseStyles.qr,
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
    modalContent: baseStyles.darkModalContent,
    qr: baseStyles.qr,
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

type ModalContentProp = {
  store: ModalStore
  qr: QrString | null
}

const ModalContent = observer(({ store, qr }: ModalContentProp) => {
  const styles = useStyles(themedStyles)
  return (
    <div className={styles.modalContent}>
      <button onClick={store.hideModal}></button>
      <div>{qr === QR.BTC ? <QrBitcoin /> : <QrMonero />}</div>
      <div>{qr === QR.BTC ? QRTEXT.btcAddress : QRTEXT.xmrAddress}</div>
    </div>
  )
})

type IntroIsometricProp = {
  store: ModalStore
}

const BaseIsometric = observer(({ store }: IntroIsometricProp) => {
  const styles = useStyles(themedStyles)
  const [qr, setQr] = useState<QrString | null>(null)

  const onShowQr = useCallback(
    (event: DivMouseEvent) => {
      setQr(event.currentTarget.id === QR.BTC ? QR.BTC : QR.XMR)
      store.showModal()
    },
    [store, qr]
  )

  return (
    <>
      <Modal store={store}>
        <ModalContent store={store} qr={qr} />
      </Modal>
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
        <div className={styles.roof}></div>
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
        <div className={styles.qr} onClick={onShowQr} id={QR.BTC}>
          <QrBitcoin />
        </div>
        <Filler length={55} />
        <div className={styles.qr} onClick={onShowQr} id={QR.XMR}>
          <QrMonero />
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
})

export const Isometric = observer(() => {
  const [store] = useState(new ModalStore())
  return <BaseIsometric store={store} />
})
