import { action, observable } from "mobx"

export class ModalStore {
  @observable.ref
  visible: boolean

  constructor(visible = false) {
    this.visible = visible
  }

  @action.bound
  showModal() {
    this.visible = true
  }

  @action.bound
  hideModal() {
    this.visible = false
  }

  @action.bound
  toggleModal() {
    this.visible = !this.visible
  }
}
