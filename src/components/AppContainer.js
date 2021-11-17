import React from "react";
import SiteHeader from "./SiteHeader";
import SiteMain from "./SiteMain";
import SiteFooter from "./SiteFooter";
import { BrowserRouter as Router } from "react-router-dom";
import CookieConsent from "react-cookie-consent";
import ReactGA from 'react-ga';
const TRACKING_ID = "UA-1657996-34"; 
ReactGA.initialize(TRACKING_ID);
class AppContainer extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Router>
          <SiteHeader />
            <SiteMain />
          <SiteFooter />
        </Router>
          <CookieConsent
            location="bottom"
            buttonText="Sure man!!"
            cookieName="arevolutionaryactcookie"
            style={{ background: "#2B373B" }}
            buttonStyle={{ color: "#4e503b", fontSize: "13px" }}
            expires={150}
          >
            This website uses cookies to enhance the user experience.{" "}
            <span style={{ fontSize: "10px" }}></span>
        </CookieConsent>
      </React.Fragment>
    );
  }
}
export default AppContainer;
