import classnames from "classnames";
import * as React from "react";
import { connect } from "react-redux";

import { KEYCODE_ENTER } from "../constants/keycodes";
import Localization from "../localization";

import { State } from "../redux";
import { setUserName } from "../redux/actions";
import { getLocalization } from "../redux/selectors/settings";
import { Dispatch } from "../redux/store";

import "./UserForm.scss";

interface ReduxProps {
  localization: Localization;
  userName: string | null;
}

function mapStateToProps(state: State): ReduxProps {
  return {
    localization: getLocalization(state),
    userName: state.user.name
  };
}

type ComponentProps = ReduxProps & { dispatch: Dispatch };

interface ComponentState {
  currentValue: string | null;
}

class UserForm extends React.PureComponent<ComponentProps, ComponentState> {
  public constructor(props: ComponentProps) {
    super(props);

    this.state = {
      currentValue: props.userName
    };
  }

  public render() {
    const { localization, userName } = this.props;
    const { currentValue } = this.state;
    const dirty = currentValue !== userName;
    return (
      <div className={classnames("UserForm", dirty && "dirty")}>
        Your Name:
        <input
          type="text"
          onChange={this.handleTextChanged}
          onKeyDown={this.handleKeyDown}
          placeholder={localization.defaultUserName}
          value={currentValue || ""}
        />
        <button onClick={this.handleClickSave} disabled={!dirty}>
          {localization.buttonSave}
        </button>
      </div>
    );
  }

  private handleTextChanged = (event: React.ChangeEvent<HTMLInputElement>) => {
    // Empty string should be null instead of empty string
    const newValue = event.target.value ? event.target.value : null;
    if (newValue === this.state.currentValue) {
      return;
    }

    this.setState({
      currentValue: newValue
    });
  };

  private handleKeyDown = (event: React.KeyboardEvent) => {
    if (
      event.keyCode === KEYCODE_ENTER &&
      this.state.currentValue !== this.props.userName
    ) {
      this.submitNameChange();
    }
  };

  private handleClickSave = () => this.submitNameChange();

  private submitNameChange() {
    const { dispatch } = this.props;
    const { currentValue } = this.state;
    dispatch(setUserName(currentValue));
  }
}

export default connect(mapStateToProps)(UserForm);
