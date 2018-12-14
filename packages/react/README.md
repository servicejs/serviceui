# @service-ui/react

A React UI component framework & design system written in TypeScript using
`emotion`.

## Usage

```tsx
/* @jsx jsx */

import { Global, jsx } from "@emotion/core";
import {
    Box,
    cssReset,
    fillScreenFlexReset,
    fillScreenReset,
    rem,
    systemFontReset,
    Text,
} from "@service-ui/react";
import { ThemeProvider, withTheme } from "emotion-theming";
import ReactDOM from "react-dom";

/**
 * An example theme
 */
class ExampleTheme {
    /** Theme variables */
    public baseLineHeight = 1.5;
    public colors = {
        red: "#ff4136",
        green: "#2ecc40",
        black: "#111111",
        white: "#ffffff",
    };

    /** A basic length scale */
    public scale = (n: number) => rem(n * this.baseLineHeight);

    /** Styles for named elements, based on their props */
    public themed = (name: string) => {
        switch (name) {
            // Styles for `Text`
            case "Text":
                return (props: any) => {
                    if (props.dir === "rtl") {
                        return { color: this.colors.green };
                    }
                    if (props.dir === "ltr") {
                        return { color: this.colors.red };
                    }
                    return {};
                };
            // Default styles applied to each element that doesn't match (here: none)
            default:
                return (props: any) => ({});
        }
    };
}

const exampleTheme = new ExampleTheme();

/**
 * Our main application component
 * `withTheme`injects the theme from the React context
 */
const App = ({ theme }: { theme?: ExampleTheme }) => (
    <Box bg={theme!.colors.black} c={theme!.colors.white}>
        <Text dir="ltr">Hello World with direction LTR in red</Text>
        <Text dir="rtl">Hello World with direction RTL in green</Text>
    </Box>
);

/**
 * Render the app with ReactDOM
 */
ReactDOM.render(
    // Injects the theme into the context
    <ThemeProvider theme={exampleTheme}>
        {/* Global CSS resets and styles */}
        <Global styles={cssReset} />
        <Global styles={fillScreenReset()} />
        <Global styles={fillScreenFlexReset()} />
        <Global styles={systemFontReset()} />
        <App />
    </ThemeProvider>,
    document.getElementById("root"),
);
```

The entire project is written in TypeScript, so you get type definitions for all
components and functions.

## Install

```sh
// If you use yarn
yarn add @service-ui/react

// If you use NPM
npm install @service-ui/react
```

## License: MIT

MIT License

Copyright 2018 Frédérique Mittelstaedt

Permission is hereby granted, free of charge, to any person obtaining a copy of
this software and associated documentation files (the "Software"), to deal in
the Software without restriction, including without limitation the rights to
use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of
the Software, and to permit persons to whom the Software is furnished to do so,
subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
