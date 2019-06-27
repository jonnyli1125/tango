import * as React from "react";

export interface SummaryProps {
  compiler: string;
  framework: string;
}

export class Summary extends React.Component<SummaryProps, {}> {
  render() {
    return (
      <h1>
        Hello from {this.props.compiler} and {this.props.framework}!
      </h1>
    );
  }
}
