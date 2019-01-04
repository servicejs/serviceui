/**
 * UI test app component
 */

/* @jsx jsx */

// tslint:disable:max-classes-per-file

/** Imports */

import { hot } from "react-hot-loader";

import { jsx } from "@emotion/core";
import { inject, observer } from "mobx-react";
import React from "react";
import { Route, Switch } from "react-router";
import { BrowserRouter } from "react-router-dom";

import { em } from "@service-ui/mixins";
import { Box, Flex, SafeArea } from "../../src";

import SampleArticle from "./components/SampleArticle";
import Stats from "./components/Stats";
import { SampleTheme } from "./theme";

const Header = () => (
  <React.Fragment>
    {/* Background & minimum padding */}
    <Box bg="#EEE" p={1} as="header">
      {/* SafeArea.X, which also centers the content horizontally & contains the width constraint */}
      <SafeArea.X mx="auto" maxWidth={em(33)}>
        @service-ui/react
      </SafeArea.X>
    </Box>
  </React.Fragment>
);

const Footer = () => (
  <React.Fragment>
    {/* Background & minimum padding */}
    <Box bg="#111" c="#EEE" p={1} as="footer">
      {/* SafeArea.X, which also centers the content horizontally & contains the width constraint */}
      <SafeArea.X mx="auto" maxWidth={em(33)}>
        @service-ui/react by Automorph
      </SafeArea.X>
    </Box>
  </React.Fragment>
);

/**
 * Main Application component
 */
@inject("theme")
@observer
class App extends React.Component<{ theme?: SampleTheme }> {
  public componentDidMount() {
    window.addEventListener("resize", this.onResize);
  }

  public componentWillUnmount() {
    window.removeEventListener("resize", this.onResize);
  }

  public onResize = () => {
    this.forceUpdate();
  }

  public render() {
    return (
      <BrowserRouter>
        <Flex.Column flex={1}>
          <Header />
          <Flex bg="#FFF" flex={1} w="100%">
            <Switch>
              {/* <SampleArticle /> */}
              <Route path="/" exact={true} component={() => <SampleArticle />} />
            </Switch>
          </Flex>
          <Footer />

          {/* Useful stats */}
          <Stats />
        </Flex.Column>
      </BrowserRouter>
    );
  }
}

export default hot(module)(App);
