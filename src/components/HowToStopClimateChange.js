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
import {motion} from  'framer-motion'
// document.querySelector(".toggle-embed").addEventListener("click", function () {
//   embedCode.classList.remove("hidden");
// });

const HowToStopClimateChange = () => {
  // const { path, url } = useRouteMatch();
  const [buttonPopup, setButtonPopup] = useState(false);
  return (
    <motion.div
    initial={{x:"10vw",y:'100vh', opacity:0.0}} 
    animate={{x:"0vw",y:"0vh", opacity:1}}
    exit={{opacity:0}}
    transition={{type:"spring",stiffness:'120'}}
    >
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
    </main></motion.div>
  );
};

export default HowToStopClimateChange;
