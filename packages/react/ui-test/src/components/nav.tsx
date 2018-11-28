import { withTheme } from "emotion-theming";
import React from "react";
import { RouteComponentProps, withRouter } from "react-router";
import { Box } from "../../../dist";
import { H2, H3, H6, ThemedProps } from "../../../src";
import { Hr } from "./hr";
import { CustomNavLink } from "./navlink";

export const Nav = withRouter(
  withTheme(({ theme }: ThemedProps & RouteComponentProps) => (
    <Box as="nav">
      <CustomNavLink to="/" exact={true}>
        Home
      </CustomNavLink>
      <CustomNavLink to="/not-found">Not found</CustomNavLink>
      <CustomNavLink to="/colors">Colors</CustomNavLink>
      <Hr
        css={{
          background: theme!.colors.silver.base,
          height: theme!.blh(1 / 16),
          marginBottom: theme!.blh(1 / 2 - 1 / 16 / 2),
          marginTop: theme!.blh(1 / 2 - 1 / 16 / 2),
        }}
      />
      <H2
        css={{
          color: theme!.colors.blue.shade,
          fontSize: "0.8rem",
          lineHeight: theme!.blh(1),
        }}
      >
        Components
      </H2>
      <H3
        css={{
          color: theme!.colors.gray.shade,
          fontSize: "0.8rem",
          lineHeight: theme!.blh(1),
        }}
      >
        Base
      </H3>
      <CustomNavLink to="/components/base">Base</CustomNavLink>
      <CustomNavLink to="/components/box">Box</CustomNavLink>
      <H3
        css={{
          color: theme!.colors.gray.shade,
          fontSize: "0.8rem",
          lineHeight: theme!.blh(1),
        }}
      >
        Layout & Containers
      </H3>
      <H3
        css={{
          color: theme!.colors.gray.shade,
          fontSize: "0.8rem",
          lineHeight: theme!.blh(1),
        }}
      >
        Typographic
      </H3>
      <CustomNavLink to="/components/text">Text</CustomNavLink>
      <CustomNavLink to="/components/paragraph">Paragraph</CustomNavLink>
      <CustomNavLink to="/components/headings">Headings</CustomNavLink>
      <CustomNavLink to="/components/inline">Inline elements</CustomNavLink>
      <CustomNavLink to="/components/blockquote">BlockQuote</CustomNavLink>
      <CustomNavLink to="/components/pre">
        Pre (pre-formatted text)
      </CustomNavLink>
      <CustomNavLink to="/components/code">Code</CustomNavLink>
      <CustomNavLink to="/components/codeblock">CodeBlock</CustomNavLink>
      <CustomNavLink to="/components/emphasis">Emphasis</CustomNavLink>
      <CustomNavLink to="/components/strong-emphasis">
        StrongEmphasis
      </CustomNavLink>
      <H3
        css={{
          color: theme!.colors.gray.shade,
          fontSize: "0.8rem",
          lineHeight: theme!.blh(1),
        }}
      >
        Media
      </H3>
      <CustomNavLink to="/components/image">Image</CustomNavLink>
      <CustomNavLink to="/components/picture">Picture</CustomNavLink>
      <CustomNavLink to="/components/figure">Figure</CustomNavLink>
      <CustomNavLink to="/components/audio">Audio</CustomNavLink>
      <CustomNavLink to="/components/video">Video</CustomNavLink>
      <CustomNavLink to="/components/iframe">iFrame</CustomNavLink>
      <CustomNavLink to="/components/table">Table</CustomNavLink>
      <H3
        css={{
          color: theme!.colors.gray.shade,
          fontSize: "0.8rem",
          lineHeight: theme!.blh(1),
        }}
      >
        Forms
      </H3>
      <CustomNavLink to="/components/form">Form</CustomNavLink>
      <CustomNavLink to="/components/fieldset">FieldSet</CustomNavLink>
      <CustomNavLink to="/components/legend">Legend</CustomNavLink>
      <CustomNavLink to="/components/input">Input</CustomNavLink>
      <H3
        css={{
          color: theme!.colors.gray.shade,
          fontSize: "0.8rem",
          lineHeight: theme!.blh(1),
        }}
      >
        Buttons
      </H3>
      <CustomNavLink to="/components/buttons">Buttons</CustomNavLink>
      <CustomNavLink to="/components/form-buttons">Form buttons</CustomNavLink>
    </Box>
  )),
);
