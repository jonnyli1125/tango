import * as React from "react";
import * as ReactDOM from "react-dom";
import { Provider } from "react-redux";

import { createReduxStore } from "./redux/store";

import Summary from "./components/Summary";
import UserForm from "./components/UserForm";

const store = createReduxStore();

ReactDOM.render(
  <Provider store={store}>
    <React.Fragment>
      <Summary compiler="TypeScript" framework="React" />
      <UserForm />
    </React.Fragment>
  </Provider>,
  document.getElementById("root")
);
