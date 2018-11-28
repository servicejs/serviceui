/**
 * ViewModel
 */

/** Imports */

import { action, computed, observable } from "mobx";

/**
 * View model
 */
export class ViewModel {
  @observable
  protected state: {
    dark: boolean;
  } = {
    dark: false,
  };

  @computed
  public get darkMode() {
    return this.state.dark;
  }

  @action.bound
  public toggleDarkMode() {
    this.state.dark = !this.state.dark;
  }
}

export interface ViewModelInjectionProps {
  viewModel?: ViewModel;
}
