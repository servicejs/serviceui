/**
 * Else component
 */

import { Component } from "react";
import If from "../If";

class Else extends Component<{}, {}, If.ContextType> {
  public static contextType = If.Context;

  public render() {
    if (typeof this.context === "undefined") {
      // tslint:disable-next-line:no-console
      console.error("Then used without a corresponding If.");
      return null;
    }

    return this.context ? null : this.props.children;
  }
}

namespace Else {
  // tslint:disable-next-line:no-empty-interface
  export interface Props {}
}

export default Else;
