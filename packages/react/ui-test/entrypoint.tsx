/**
 * UI test entrypoint
 */

import { ThemeProvider } from "emotion-theming";
import * as React from "react";
import * as ReactDOM from "react-dom";
import { defaultTheme } from "../src";
import App from "./app";

defaultTheme.injectGlobal();

ReactDOM.render(
  <ThemeProvider theme={defaultTheme}>
    <App />
  </ThemeProvider>,
  document.getElementById("root"),
);
