import * as React from "react";
import * as ReactDOM from "react-dom";

import { Index } from "./components/Summary";

ReactDOM.render(
    <Summary compiler="TypeScript" framework="React" />,
    document.getElementById("root")
);
