import * as React from "react";
import { connect } from "react-redux";

import { State } from "../redux";
import { getLocalization } from "../redux/selectors/settings";

import "./Summary.scss";

interface ProvidedProps {
  compiler: string;
  framework: string;
}

interface ReduxProps {
  displayUserName: string;
}

function mapStateToProps(state: State): ReduxProps {
  return {
    displayUserName: state.user.name || getLocalization(state).defaultUserName
  };
}

type ComponentProps = ProvidedProps & ReduxProps;

class Summary extends React.Component<ComponentProps> {
  public render() {
    const { compiler, framework, displayUserName } = this.props;
    return (
      <div className="summary">
        <h1>
          Hello <strong>{displayUserName}</strong>, this is from {compiler} and{" "}
          {framework}!
        </h1>
      </div>
    );
  }
}

export default connect(mapStateToProps)(Summary);
