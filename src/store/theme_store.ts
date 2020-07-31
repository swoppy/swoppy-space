import { reaction } from "mobx"
import { GlobalThemeStore, Theme, setTheme } from "../ui/themes"
import { BooleanStore } from "../ui/generic_store"

export class ThemeStore {
  readonly theme: BooleanStore

  constructor(theme: boolean) {
    this.theme = new BooleanStore(theme)
    reaction(
      () => this.theme.value,
      () => {
        console.log(this.theme.value)
        GlobalThemeStore.set(this.theme.value ? Theme.DARK : Theme.LIGHT)
        setTheme(GlobalThemeStore.get())
      }
    )
  }
}
