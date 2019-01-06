/**
 * CSS resets
 */

// tslint:disable:max-line-length

/** Imports */

import { css } from "@emotion/core";

import { FontList } from "./util/css-value-helpers";

/** Declarations */

/**
 * Global CSS reset
 * Adapted from http://meyerweb.com/eric/tools/css/reset/
 * v2.0 | 20110126
 * License: none (public domain)
 */
// prettier-ignore
export const cssReset = css`
  html, body, div, span, applet, object, iframe, h1, h2, h3, h4, h5, h6, p,
  blockquote, pre, a, abbr, acronym, address, big, button, cite, code, del,
  dfn, em, img, ins, kbd, q, s, samp, small, strike, strong, sub, sup, tt,
  var, b, u, i, center, dl, dt, dd, ol, ul, li, fieldset, form, input,
  textarea, select, progress, label, legend, table, caption, tbody, tfoot,
  thead, tr, th, td, article, aside, canvas, details, embed, figure,
  figcaption, footer, header, hgroup, menu, nav, output, ruby, section,
  summary, time, mark, audio, video {
    box-sizing: inherit;

    margin: 0;
    padding: 0;
    border: 0;
    outline: 0;

    background: transparent;

    color: inherit;
    font-size: 100%;
    font-family: inherit;
    font: inherit;
    font-weight: inherit;
    line-height: inherit;
    vertical-align: baseline;
  }
  * {
    box-sizing: inherit;

    margin: 0;
    padding: 0;
    border: 0;
    outline: 0;

    background: transparent;

    color: inherit;
    font-size: 100%;
    font-family: inherit;
    font: inherit;
    font-weight: inherit;
    line-height: inherit;
    vertical-align: baseline;
  }
  html {
    box-sizing: border-box;
  }
  article, aside, details, figcaption, figure, footer, header, hgroup, menu,
  nav, section {
    display: block;
  }
  body {
    line-height: 1;
  }
  ol, ul {
    list-style: none;
  }
  blockquote, q {
    quotes: none;
  }
  blockquote:before, blockquote:after, q:before, q:after {
    content: '';
    content: none;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }
  ins {
    background-color: #ff9;
    color: #000;
    text-decoration: none;
  }
  mark {
    background-color: #ff9;
    color: #000;
    font-style: italic;
    font-weight: 700;
  }
  del {
    text-decoration: line-through;
  }
  abbr[title], dfn[title] {
    border-bottom: 1px dotted;
    cursor: help;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }
  hr {
    display: block;
    height: 1px;
    border: 0;
    border-top: 1px solid #ccc;
    margin: 1em 0;
    padding: 0;
  }
  input, select {
    vertical-align: middle;
  }
`;

export const fillScreenReset = (rootElementSelector = "#root") => css`
  html {
    height: 100%;
  }

  body {
    min-height: 100%;
  }

  ${rootElementSelector} {
    min-height: 100vh;
  }
`;

export const fillScreenFlexReset = (rootElementSelector = "#root") => css`
  body {
    display: flex;
    flex-direction: column;
    width: 100%;
  }

  ${rootElementSelector} {
    display: flex;
    flex: 1;
    flex-direction: column;
    width: 100%;
  }
`;

export const systemFonts = [
  "-apple-system",
  "system-ui",
  "BlinkMacSystemFont",
  "Segoe UI",
  "Roboto",
  "Helvetica Neue",
  "Oxygen-Sans",
  "Ubuntu",
  "Cantarell",
  "Helvetica",
  "Arial",
  "sans-serif",
  "Apple Color Emoji",
  "Segoe UI Emoji",
  "Segoe UI Symbol",
];

export const systemFontReset = (fonts: string = FontList(systemFonts)) => css`
  body {
    font-family: ${fonts};
  }
`;
