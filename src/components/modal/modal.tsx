import React from "react"
import { observer } from "mobx-react"
import { ModalStore } from "./modal_store"
const baseStyles = require("./modal.module.css")

export type ModalProps = {
  store: ModalStore
  showBackdrop?: boolean
  children: React.ReactNode
}

// The children of the modal needs to implement their own classes!
export const Modal = observer(
  ({ store, showBackdrop = true, children }: ModalProps) => {
    return (
      <div
        className={`${baseStyles.modal} ${store.visible && baseStyles.visible}`}
      >
        {showBackdrop && (
          <div className={baseStyles.backdrop} onClick={store.hideModal} />
        )}
        {children}
      </div>
    )
  }
)
