/**
 * Window stats component
 */

/* @jsx jsx */

import { jsx } from "@emotion/core";
import React from "react";

import { Fixed } from "../../../src";

class Stats extends React.Component {
  public componentDidMount() {
    window.addEventListener("resize", this.onWindowResize);
    this.onWindowResize();
  }

  public render() {
    return (
      <Fixed bottom={0} left={0} bg="rgba(255,255,255,0.1)" css={{ fontSize: `0.8rem`, lineHeight: `1.5rem` }}>
        Width: {window.innerWidth}
        <br />
        Height: {window.innerHeight}
        <br />
        Font size: {window.getComputedStyle(document.body, null).fontSize}
        <br />
        Line height: {window.getComputedStyle(document.body, null).lineHeight}
        <br />
        Characters:{" "}
        {((window.innerWidth / parseFloat(window.getComputedStyle(document.body, null).fontSize!)) * 2).toFixed(2)}
        <br />
        Lines: {(window.innerHeight / parseFloat(window.getComputedStyle(document.body, null).lineHeight!)).toFixed(2)}
      </Fixed>
    );
  }

  public componentWillUnmount() {
    window.removeEventListener("resize", this.onWindowResize);
  }

  protected onWindowResize() {
    this.forceUpdate();
  }
}

export default Stats;
