        <Article
          css={{ margin: "0 auto", width: "max-content", maxWidth: "100%" }}
        >
          <FlexRow />
          <FlexColumn />
          <WrappingFlexRow />

          <Container>
            <H1 css={{}}>Components</H1>
            <H2 css={{}}>Base</H2>

            {/* Box */}


            {/* Typographic components */}

            <H2 css={{}}>Typographic components</H2>

            {/* Text */}

          </Container>
          <Box
            css={{
              ...this.props.theme!.colors.gray.background(),
              "@media (min-width: 43rem)": {
                borderRadius: this.props.theme!.blh(1 / 4),
              },
            }}
          >
            <Container>
              Something
              <br />
              Something
              <br />
              Something
            </Container>
          </Box>
          <Container>
            {/* PreFormattedText */}

            <H3 css={{}}>PreFormattedText</H3>
          </Container>
          <Container as={PreFormattedText}>
            A block of pre-formatted text
          </Container>
          <Container>
            {Object.keys(this.props.theme!.colors).map((key, index) => (
              <Box
                key={index}
                css={{
                  ...this.props.theme!.colors[key].background(),
                  borderRadius: this.props.theme!.blh(1 / 4),
                  padding: this.props.theme!.blh(1),
                  width: "100%",
                }}
              >
                {key}
              </Box>
            ))}
          </Container>
        </Article>
      </Box>
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
