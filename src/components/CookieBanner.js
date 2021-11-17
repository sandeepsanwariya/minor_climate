import React from "react";
//import { CookieBanner } from "@palmabit/react-cookie-law";

class CookieBanner extends React.Component {
  render() {
    return (
      <div>
        <CookieBanner
          message="Cookie banner message"
          wholeDomain={true}
          onAccept={() => {}}
          onAcceptPreferences={() => {}}
          onAcceptStatistics={() => {}}
          onAcceptMarketing={() => {}}
        />
      </div>
    );
  }
}
export default CookieBanner;
