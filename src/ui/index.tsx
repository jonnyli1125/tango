import * as React from "react";
import * as ReactDOM from "react-dom";
import { Provider } from "react-redux";

import { createReduxStore } from "./redux/store";

import Summary from "./components/Summary";

const store = createReduxStore();

ReactDOM.render(
  <Provider store={store}>
    <Summary compiler="TypeScript" framework="React" />
  </Provider>,
  document.getElementById("root")
);
