/* @jsx jsx */

import { hot } from "react-hot-loader";

import { jsx } from "@emotion/core";
import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import { Flex } from "../../src";

import SampleTheme from "./SampleTheme";

import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./components/Home";
import NotFound from "./components/NotFound";
import SampleArticle from "./components/SampleArticle";
import Stats from "./components/Stats";

/**
 * Main Application component
 */
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
          <Flex.Column flex={1}>
            <Switch>
              <Route path="/" exact={true} component={Home} />
              <Route path="/article" component={SampleArticle} />
              <Route path="*" component={NotFound} />
            </Switch>
          </Flex.Column>
          <Footer />
          <Stats />
        </Flex.Column>
      </BrowserRouter>
    );
  }
}

export default hot(module)(App);
