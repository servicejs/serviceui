/**
 * Then component
 */

import { Component } from "react";
import If from "../If";

class Then extends Component<{}, {}, If.ContextType> {
  public static contextType = If.Context;

  public render() {
    if (typeof this.context === "undefined") {
      // tslint:disable-next-line:no-console
      console.error("Then used without a corresponding If.");
      return null;
    }

    return this.context ? this.props.children : null;
  }
}

namespace Then {
  // tslint:disable-next-line:no-empty-interface
  export interface Props {}
}

export default Then;
