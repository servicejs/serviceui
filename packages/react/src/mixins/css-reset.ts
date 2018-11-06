/**
 * CSS resets
 */

/** Imports */

import { injectGlobal } from "emotion";

/** Declarations */

/**
 * Global CSS reset
 * Adapted from http://meyerweb.com/eric/tools/css/reset/
 * v2.0 | 20110126
 * License: none (public domain)
 */
export const cssReset = () => injectGlobal`

html,
body,
div,
span,
applet,
object,
iframe,
h1,
h2,
h3,
h4,
h5,
h6,
p,
blockquote,
pre,
a,
abbr,
acronym,
address,
big,
button,
cite,
code,
del,
dfn,
em,
img,
ins,
kbd,
q,
s,
samp,
small,
strike,
strong,
sub,
sup,
tt,
var,
b,
u,
i,
center,
dl,
dt,
dd,
ol,
ul,
li,
fieldset,
form,
input,
textarea,
select,
progress,
label,
legend,
table,
caption,
tbody,
tfoot,
thead,
tr,
th,
td,
article,
aside,
canvas,
details,
embed,
figure,
figcaption,
footer,
header,
hgroup,
menu,
nav,
output,
ruby,
section,
summary,
time,
mark,
audio,
video {
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
article,
aside,
details,
figcaption,
figure,
footer,
header,
hgroup,
menu,
nav,
section {
  display: block;
}
body {
  line-height: 1;
ol,
ul {
  list-style: none;
}
blockquote,
q {
  quotes: none;
}
blv,
section {
  display: block;
}
body {
  before,
q:after {
  content: "";
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
abbr[title],
dfn[title] {
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
input,
select {
  vertical-align: middle;
}
`;

export const fillScreenReset = (rootElementSelector = "#root") =>
  injectGlobal({
    html: {
      height: "100%",
    },

    body: {
      minHeight: "100%",
    },

    [rootElementSelector]: {
      minHeight: "100vh",
    },
  });

export const fillScreenFlexReset = (rootElementSelector = "#root") =>
  injectGlobal({
    body: {
      display: "flex",
      flexDirection: "column",
      width: "100%",
    },

    [rootElementSelector]: {
      display: "flex",
      flex: 1,
      flexDirection: "column",
      width: "100%",
    },
  });
