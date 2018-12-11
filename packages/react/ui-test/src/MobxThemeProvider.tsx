/** @jsx jsx */

import { jsx, ThemeContext } from "@emotion/core";
import { inject, observer } from "mobx-react";
import { Component } from "react";

export interface MobxThemeProviderProps<ThemeType> {
  theme?: ThemeType;
}

export interface MobxThemeProviderState<ThemeType>
  extends MobxThemeProviderProps<ThemeType> {
  theme?: ThemeType;
}

// tslint:disable-next-line:max-classes-per-file
@inject("theme")
@observer
export class MobxThemeProvider extends Component<
  MobxThemeProviderProps<any>,
  MobxThemeProviderState<any>
> {
  constructor(props: MobxThemeProviderProps<any>) {
    super(props);
    this.state = {
      theme: this.props.theme,
    };
  }

  public render() {
    const themeObj = { ...this.state.theme! };

    return (
      <ThemeContext.Provider value={themeObj}>
        {this.props.children}
      </ThemeContext.Provider>
    );
  }
}
