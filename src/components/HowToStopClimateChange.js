import React, { useState } from "react";
import {
  Link,
  useRouteMatch,
  Switch,
  Route,
  useParams,
  useHistory,
  Router,
} from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import LazyLoad from "react-lazyload";
import SaveTheWorldClimateChange from "./SaveTheWorldClimateChange";

// document.querySelector(".toggle-embed").addEventListener("click", function () {
//   embedCode.classList.remove("hidden");
// });

const HowToStopClimateChange = () => {
  // const { path, url } = useRouteMatch();
  const [buttonPopup, setButtonPopup] = useState(false);
  return (
 
    <main className="article campaign climate-change">
      <header className="entry-header high-impact-viewport x">
        <div className="text c l6">
          <h1>How to Stop Climate Change</h1>
          <p>
            You might think you can't stop climate change. But after reading
            this you might see that you really can.
          </p>
          <p>It starts with you.</p>

          <p class="cta with-icon with-pulsing-icon">
            <HashLink to="#play-animation">Play the animation</HashLink>
          </p>
          <div className="mouse_scroll">
            <div className="mouse">
              <div className="wheel"></div>
            </div>
            <div>
              <span className="m_scroll_arrows unu"></span>
              <span className="m_scroll_arrows doi"></span>
              <span className="m_scroll_arrows trei"></span>
            </div>
          </div>
        </div>
      </header>
      <div className="entry-content">

      </div>
      <SaveTheWorldClimateChange />
    </main>
  );
};

export default HowToStopClimateChange;
