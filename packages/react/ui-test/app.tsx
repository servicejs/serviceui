/**
 * UI test app component
 */

/** Imports */

import { hot } from "react-hot-loader";

import { withTheme } from "emotion-theming";
import * as React from "react";
import styled, { css } from "react-emotion";

import { Box, Color, Em, em, rem, Strong, Text, ThemedProps } from "../src";
import { ExpandingFlex, Flex, FlexColumn, FlexRow } from "../src";
// import { objectFlatMap, objectMap } from "../src/util/ObjectFunctor";

/** Declarations */

const Space = ({ c = " " }: { c?: string }) => (
  <React.Fragment>{c}</React.Fragment>
);

/**
 * Main Application component
 */
class App extends React.Component<ThemedProps> {
  public render() {
    return (
      <FlexColumn css={{ transform: `` }}>
        <Box
          css={{
            margin: `0 auto`,
            padding: this.props.theme!.blh(1),
            maxWidth: rem(2 * parseFloat(this.props.theme!.blh(1)) + 33),
            width: "100%",
          }}
        >
          <Box css={{ display: "grid", gridGap: this.props.theme!.blh(1) }}>
            <p>XXX</p>
            {Object.keys(this.props.theme!.colors).map((key, index) => (
              <Box
                key={index}
                css={{
                  ...this.props.theme!.colors[key].background(),
                  padding: this.props.theme!.blh(1),
                  width: "100%",
                  borderRadius: this.props.theme!.blh(1 / 4),
                }}
              >
                {key}
              </Box>
            ))}
          </Box>
        </Box>
      </FlexColumn>
    );
    // return (
    //   <FlexColumn>
    //     <FlexColumn
    //       css={{
    //         background: this.props.theme!.colors.blue.shade,
    //         padding: this.props.theme!.blh(1),
    //         alignItems: "flex-start",
    //         justifyContent: "flex-start",
    //       }}
    //       as={{
    //         component: "article",
    //       }}
    //     >
    //       <ThemeProvider
    //         theme={(theme: any) => {
    //           theme = theme || {};
    //           theme.bgColor = this.props.theme!.colors.blue.shade;
    //           theme.fgColor = this.props.theme!.colors.white;
    //           return theme;
    //         }}
    //       >
    //         <FlexRow css={{ flexWrap: "wrap" }}>
    //           {objectFlatMap((name: string, color: Color) => (
    //             <Simple key={name} c={color}>
    //               {name} {color.toString()}
    //             </Simple>
    //           ))(this.props.theme!.colors)}
    //         </FlexRow>
    //       </ThemeProvider>
    //       Box
    //       <Text
    //         css={{
    //           ...this.props.theme!.colors.yellow.background(),
    //           borderRadius: this.props.theme!.blh(1 / 4),
    //           display: "inline-block",
    //           padding: this.props.theme!.blh(1),
    //         }}
    //       >
    //         Box
    //       </Text>
    //       <Em css={{ color: this.props.theme!.colors.yellow.shade }}>Box</Em>
    //       <Space />
    //       <Strong css={{ color: this.props.theme!.colors.yellow.shade }}>
    //         Box
    //       </Strong>
    //     </FlexColumn>
    //   </FlexColumn>
    // );
    // return <As as={{ component: "a", props: {} }}>App</As>;
  }
}

export default hot(module)(withTheme(App));
