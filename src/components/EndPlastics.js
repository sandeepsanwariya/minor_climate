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
import Countries from "./Countries";
import World from "../pages/World";
import SaveTheWorldClimateChange from "./SaveTheWorldClimateChange";
import ClimateChangeMethodology from "./ClimateChangeMethodology";
import Embeded from "./Embeded";
import {
  FacebookShareButton,
  RedditShareButton,
  LinkedinShareButton,
  TwitterShareButton,
} from "react-share";
import Aos from 'aos'
import 'aos/dist/aos.css'
const EndPlastics = () => {
  // const { path, url } = useRouteMatch();
  React.useEffect(() => {
    Aos.init({duration:1500});
  }, [])
  const [buttonPopup, setButtonPopup] = useState(false);
  return (
    <main className="article campaign climate-change">
      <header className="entry-header high-impact-viewport x">
        <div data-aos="fade-up"className="text c l6">
          <h1>End Plastics in Consumables</h1>
          <p>
            Scroll down to see how sea level rise is going to devastate the
            coastal regions in the coming years.
          </p>
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
      <div></div>
      <div className="feature-chart" id="play">
        <div className="chart">
          <World data-aos="fade-up"/>
          <div className="x chart-actions">
            <div className="c t6 l6 country-selector">
              <p>Select a location to zoom in to:</p>
              <Countries />
            </div>
            <div className="c p6 t4 l4 embed-chart">
              <button
                className="button with-icon toggle-embed"
                onClick={() => setButtonPopup(true)}
              >
                Embed map
              </button>
              <Embeded
                trigger={buttonPopup}
                setTrigger={setButtonPopup}
              ></Embeded>
              <div className="embed-code hidden">
                <p>Paste this code into your web page.</p>
                <textarea placeholder="Embed code here"></textarea>
                <button>Copy</button>
                <div className="close">Close</div>
              </div>
            </div>
            <div className="c p6 t2 l2 logo">
              <a href="https://arevolutionaryact.com/">
                <img
                  src="https://arevolutionaryact.com/assets/img/a_revolutionary_act.png"
                  alt="A Revolutionary Act"
                />
              </a>
            </div>
          </div>
        </div>

        <div className="share">
          <h3>Share this page:</h3>
          <ul>
            <li className="reddit">
              <RedditShareButton
                url={"https://arevolutionaryact.com/climate-change"}
                quote={
                  "See how Sea Level Rise Will Devastate Coastal Parts of World"
                }
                hashtag="#arevolutionaryact"
              >
                <a>Reddit</a>
              </RedditShareButton>
            </li>
            <li className="twitter">
              <TwitterShareButton
                url={"https://arevolutionaryact.com/climate-change"}
                quote={
                  "See how Sea Level Rise Will Devastate Coastal Parts of World"
                }
                hashtag="#arevolutionaryact"
              >
                <a>Twitter</a>
              </TwitterShareButton>
            </li>
            <li className="facebook">
              <FacebookShareButton
                url={"https://arevolutionaryact.com/climate-change"}
                quote={
                  "See how Sea Level Rise Will Devastate Coastal Parts of World"
                }
                hashtag="#arevolutionaryact"
              >
                <a>Facebook</a>
              </FacebookShareButton>
            </li>
            <li className="linkedin">
              <LinkedinShareButton
                url={"https://arevolutionaryact.com/climate-change"}
                quote={
                  "See how Sea Level Rise Will Devastate Coastal Parts of World"
                }
                hashtag="#arevolutionaryact"
              >
                <a>Linkedin</a>
              </LinkedinShareButton>
            </li>
          </ul>
        </div>
      </div>
      <ClimateChangeMethodology data-aos="fade-up-right" />
      <div className="save-the-world-components">
        <div className="grid">
          <header className="x">
            <div className="c l6">
              <h2 class="mega-headline">How to stop climate change</h2>
              <p>short nice text here.</p>
              <h3>Change your life, change the world. Start here...</h3>
            </div>
          </header>
        </div>
        <SaveTheWorldClimateChange data-aos="fade-up-left"/>
      </div>
    </main>
  );
};

export default EndPlastics;
