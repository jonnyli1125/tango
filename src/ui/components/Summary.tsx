import * as React from "react";
import { connect } from "react-redux";

import { State } from "../redux";

import "./Summary.scss";

interface ProvidedProps {
  compiler: string;
  framework: string;
}

interface ReduxProps {
  userName: string;
}

function mapStateToProps(state: State): ReduxProps {
  return {
    userName: state.user.name
  };
}

type ComponentProps = ProvidedProps & ReduxProps;

class Summary extends React.Component<ComponentProps> {
  public render() {
    const { compiler, framework, userName } = this.props;
    return (
      <div className="summary">
        <h1>
          Hello <strong>{userName}</strong>, this is from {compiler} and{" "}
          {framework}!
        </h1>
      </div>
    );
  }
}

export default connect(mapStateToProps)(Summary);
