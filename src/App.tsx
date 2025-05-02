import React from "react";
import logo from "./logo.svg";

import { Main } from "./component/main/main";
import { EuiProvider } from "@elastic/eui";

function App() {
  return (
    <div className="App">
      <EuiProvider colorMode="light">
        <Main />
      </EuiProvider>
    </div>
  );
}

export default App;
