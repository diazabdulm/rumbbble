import React from "react";
import ReactDOM from "react-dom";

import Root from "Root";
import App from "App";

import * as serviceWorker from "serviceWorker";
import { GlobalStyle } from "utilities/GlobalStyle";

import "utilities/theme.scss";

ReactDOM.render(
  <React.StrictMode>
    <Root>
      <GlobalStyle />
      <App />
    </Root>
  </React.StrictMode>,
  document.getElementById("root")
);

serviceWorker.unregister();
