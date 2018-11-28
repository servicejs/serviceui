/**
 * UI test entrypoint
 */

import { ThemeProvider } from "emotion-theming";
import { Provider } from "mobx-react";
import * as React from "react";
import * as ReactDOM from "react-dom";
import { defaultTheme } from "../../src";
import App from "./app";
import { ViewModel } from "./ViewModel";

defaultTheme.injectGlobal();

const viewModel = new ViewModel();

ReactDOM.render(
  <Provider viewModel={viewModel}>
    <ThemeProvider theme={defaultTheme}>
      <App />
    </ThemeProvider>
  </Provider>,
  document.getElementById("root"),
);
