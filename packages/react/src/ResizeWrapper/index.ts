/**
 * ResizeWrapper component
 */

import { jsx } from "@emotion/core";
import React from "react";

namespace ResizeWrapper {
  export interface SizeProps {
    width: number;
    height: number;
  }

  export interface Props extends Partial<SizeProps> {
    component: React.ComponentType<Partial<SizeProps>>;
  }

  // tslint:disable-next-line:no-empty-interface
  export interface State extends SizeProps {}
}

class ResizeWrapper extends React.Component<ResizeWrapper.Props, ResizeWrapper.State> {
  protected ref: React.RefObject<HTMLDivElement>;

  constructor(props: ResizeWrapper.Props) {
    super(props);
    this.ref = React.createRef();
    this.state = {
      height: 0,
      width: 0,
    };
  }

  public componentDidMount() {
    window.addEventListener("resize", this.resetState);
    this.resetState();
  }

  public componentWillUnmount() {
    window.removeEventListener("resize", this.resetState);
  }

  public resetState = () => {
    if (this.ref.current) {
      this.setState({
        height: this.ref.current!.clientHeight,
        width: this.ref.current!.clientWidth,
      });
    }
  }

  public render() {
    return jsx(
      "div",
      { ref: this.ref, style: { position: "absolute", width: "100%", height: "100%", top: "0", left: "0" } },
      jsx(this.props.component, { width: this.state.width, height: this.state.height }),
    );
  }
}

export default ResizeWrapper;
