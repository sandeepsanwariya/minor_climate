import React from "react";
import {
  Link,
  useRouteMatch,
  Switch,
  Route,
  useParams,
  useHistory,
} from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import ForestfireMap from "./ForestfireMap";
import Embededfire from "./Embededfire";
import SaveTheWorldClimateChange from "./SaveTheWorldClimateChange";
import {
  FacebookShareButton,
  RedditShareButton,
  LinkedinShareButton,
  TwitterShareButton,
} from "react-share";

import LazyLoad from "react-lazyload";
import Aos from 'aos'
import 'aos/dist/aos.css'

import {motion} from  'framer-motion'
const CaliforniaWildfires = () => {
  const { path, url } = useRouteMatch();
  const [buttonPopup, setButtonPopup] = React.useState(false);
  React.useEffect(() => {
    Aos.init({duration:1500});
    window.scrollTo(0, 0);
  }, [])
  return (
    <motion.div
    initial={{x:"50vw",y:'0vh', opacity:0}} 
    animate={{x:"0vw",y:"0vh", opacity:1}}
    exit={{opacity:0}}
    transition={{ type:"spring",stiffness:'120'}}
    >
    <main className="article campaign california-wildfires">
      <header className="entry-header high-impact-viewport x">
        <div className="text c l6">
          <h1 data-aos="fade-up">California Wildfires Map</h1>
          <p data-aos="fade-up">
            The map below shows all reported wildfires since 2013 in an
            animation, where 0.1 seconds equals one day.
          </p>
          <p data-aos="fade-up" class="cta with-icon with-pulsing-icon">
            <HashLink to="#play-animation">Play the animation</HashLink>
          </p>
          <div data-aos="fade-up" className="mouse_scroll">
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
        <div className="play-animation" id="play-animation">
          <h2 data-aos="fade-up" className="headline">Press Play to watch the wildfires burn accross California year after year</h2>
          <div class="x">
            <div className="c t3 buttons">
              <button id="firestart">Play</button>
              <button id="firepause">Pause</button>
            </div>
            <div className="c t9 range-slider">
              <input
                type="range"
            
                defaultChecked='0'
          
                style={{ width: "100%"}}
                className="slider"
                id="firerange"
              />
              <p style={{color:"white"}}>
                Year: <span id="demo"></span>
              </p>
            </div>
          </div>
        </div>
        <div className="chart">
          <ForestfireMap/>
          <div className="x chart-actions">
            <div className="c t6 l6 country-selector">
              <p>Zoom to:</p>
            </div>
            <div className="c t4 l4 embed-chart">
              <button
                className="button with-icon toggle-embed"
                onClick={() => setButtonPopup(true)}
              >
                Embed map
              </button>
              <Embededfire
                trigger={buttonPopup}
                setTrigger={setButtonPopup}
              ></Embededfire>
              <div className="embed-code hidden">
                <p>Paste this code into your web page.</p>
                <textarea placeholder="Embed code here"></textarea>
                <button>Copy</button>
                <div className="close">Close</div>
              </div>
            </div>
            <div className="c t2 l2 logo">
              <a href="https://arevolutionaryact.com/">
                <img
                  src="../assets/img/a_revolutionary_act.png"
                  alt="A Revolutionary Act"
                />
              </a>
            </div>
          </div>
        </div>

        <div data-aos="fade-up" className="share">
          <h3>Share this page:</h3>
          <ul>
            <li className="reddit">
              <RedditShareButton
                url={"https://arevolutionaryact.com/california-wildfires"}
                quote={
                  "California Wildfires Map- The map below shows all reported wildfires since 2014 in an animation, where one millisecond equals one day"
                }
                hashtag="#arevolutionaryact"
              >
                <a>Reddit</a>
              </RedditShareButton>
            </li>
            <li className="twitter">
              <TwitterShareButton
                 url={"https://arevolutionaryact.com/california-wildfires"}
                 quote={
                  "California Wildfires Map- The map below shows all reported wildfires since 2014 in an animation, where one millisecond equals one day"
                }
                hashtag="#arevolutionaryact"
              >
                <a>Twitter</a>
              </TwitterShareButton>
            </li>
            <li className="facebook">
              <FacebookShareButton
                 url={"https://arevolutionaryact.com/california-wildfires"}
                 quote={
                  "California Wildfires Map- The map below shows all reported wildfires since 2014 in an animation, where one millisecond equals one day"
                }
                hashtag="#arevolutionaryact"
              >
                <a>Facebook</a>
              </FacebookShareButton>
            </li>
            <li className="linkedin">
              <LinkedinShareButton
                 url={"https://arevolutionaryact.com/california-wildfires"}
                quote={
                  "California Wildfires Map- The map below shows all reported wildfires since 2014 in an animation, where one millisecond equals one day"
                }
                hashtag="#arevolutionaryact"
              >
                <a>Linkedin</a>
              </LinkedinShareButton>
            </li>
          </ul>
        </div>
      </div>
      <section data-aos="fade-up" className="methodology">
        <div className="x">
          <div className="c l6">
            <h2 class="subhead">How is it calculated?</h2>
            <p>The data for each fire is taken from the <a href="https://www.fire.ca.gov/incidents/">fire.ac.gov website</a>, which reports every observed fire location, duration and dates. Thanks to this incredibly useful online resource we were able to display the exact location and time of every reported fire over the last 14 years.</p>
          </div>
        </div>
      </section>
      <SaveTheWorldClimateChange />

    </main></motion.div>
  );
};

export default CaliforniaWildfires;
