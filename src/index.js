import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import theme from "./theme";
import App from "./App";
import { MuiThemeProvider } from "@material-ui/core";
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter } from "react-router-dom";
import CssBaseline from "@material-ui/core/CssBaseline";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter basename='/'>
      <MuiThemeProvider theme={theme}>
        <CssBaseline/>
        <App />
      </MuiThemeProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
