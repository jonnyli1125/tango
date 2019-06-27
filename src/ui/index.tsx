import * as React from "react";
import * as ReactDOM from "react-dom";

import { Summary } from "./components/Summary";

ReactDOM.render(
  <Summary compiler="TypeScript" framework="React" />,
  document.getElementById("root")
);
