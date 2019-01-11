import React from "react";

// tslint:disable-next-line:no-var-requires
const { ArcSeries, XYPlot } = require("react-vis");
// tslint:disable-next-line:no-var-requires
const { EXTENDED_DISCRETE_COLOR_RANGE } = require("react-vis/dist/theme");

const PI = Math.PI;

function getSeconds() {
  return Math.floor(new Date().getTime() / 1000);
}

namespace ExampleChart {
  export interface Props {
    width?: number;
    height?: number;
  }

  export interface State {
    time: number;
  }
}

class ExampleChart extends React.Component<ExampleChart.Props, ExampleChart.State> {
  public state = {
    time: 0,
  };
  protected timerId: any;

  public componentDidMount() {
    this.timerId = setInterval(() => this.setState({ time: getSeconds() }), 100);
  }

  public componentWillUnmount() {
    clearInterval(this.timerId);
  }

  public render() {
    const { time } = this.state;
    const seconds = time % 60;
    const minutes = (time / 60) % 60;
    const hours = (time / (60 * 24)) % 24;
    return (
      <XYPlot
        xDomain={[-3, 3]}
        yDomain={[-3, 3]}
        width={this.props.width}
        getAngle={(d: ExampleChart.State) => d.time}
        getAngle0={(d: ExampleChart.State) => 0}
        height={this.props.height}
      >
        <ArcSeries
          animation={{
            damping: 9,
            stiffness: 300,
          }}
          radiusDomain={[0, 3]}
          data={[
            { time: (seconds / 60) * 2 * PI, radius0: 1, radius: 1.5, color: 0 },
            { time: (minutes / 60) * 2 * PI, radius0: 1.6, radius: 2.1, color: 1 },
            { time: (hours / 24) * 2 * PI, radius0: 2.2, radius: 2.7, color: 2 },
          ]}
          colorRange={EXTENDED_DISCRETE_COLOR_RANGE}
        />
      </XYPlot>
    );
  }
}

export default ExampleChart;
