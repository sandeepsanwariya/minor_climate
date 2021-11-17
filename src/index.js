import React from "react";
import ReactDOM from "react-dom";

import AppContainer from "./components/AppContainer";
import reportWebVitals from "./reportWebVitals";

//import ReactGA from "react-ga";
//ReactGA.initialize("G-0D7FSJNE8T"); // add your tracking id here.
//ReactGA.pageview(window.location.pathname + window.location.search);

ReactDOM.render(
  <React.StrictMode>
    <AppContainer />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
