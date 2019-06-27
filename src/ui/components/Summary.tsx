import * as React from "react";

import "./Summary.scss";

export interface SummaryProps {
  compiler: string;
  framework: string;
}

export class Summary extends React.Component<SummaryProps> {
  public render() {
    return (
      <div className="summary">
        <h1>
          Hello from {this.props.compiler} and {this.props.framework}!
        </h1>
      </div>
    );
  }
}
