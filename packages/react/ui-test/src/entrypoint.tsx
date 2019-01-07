/* @jsx jsx */

import { Global, jsx } from "@emotion/core";
import * as mobx from "mobx";
import MobxThemeProvider from "mobx-emotion-theme-provider";
import { Provider } from "mobx-react";
import ReactDOM from "react-dom";
import ErrorBoundary from "react-error-boundary";

import { cssReset, fillScreenFlexReset, fillScreenReset, systemFontReset } from "@service-ui/mixins";
import App from "./App";
import SampleTheme from "./SampleTheme";

const theme = new SampleTheme();
console.log(theme);

mobx.configure({
  enforceActions: "always",
});

const randomHex = () => ("0" + Math.round(Math.random() * 256).toString(16)).slice(-2);
const randomColor = () => `#${randomHex()}${randomHex()}${randomHex()}`;

setInterval(
  mobx.action(() => {
    theme.colors.black = randomColor();
    theme.colors.white = randomColor();
    // theme.baseFontSize = Math.round(16 + Math.random() * 32);
    // console.log(theme);
  }),
  1000,
);

ReactDOM.render(
  <ErrorBoundary>
    <Provider theme={theme}>
      <MobxThemeProvider>
        <Global styles={cssReset} />
        <Global styles={fillScreenReset()} />
        <Global styles={fillScreenFlexReset()} />
        <Global styles={systemFontReset()} />
        <Global styles={(t) => t.global} />
        <App />
      </MobxThemeProvider>
    </Provider>
  </ErrorBoundary>,
  document.getElementById("root"),
);
