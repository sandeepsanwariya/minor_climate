import React, { useState ,useEffect} from "react";
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
import Aos from 'aos'
import 'aos/dist/aos.css'
import {
  FacebookShareButton,
  RedditShareButton,
  LinkedinShareButton,
  TwitterShareButton,
} from "react-share";


const ClimateChange = () => {
  // const { path, url } = useRouteMatch();
  React.useEffect(() => {
    Aos.init({duration:1500});
    window.scrollTo(0, 0);
  }, [])
  const [buttonPopup, setButtonPopup] = useState(false);
  return (
  
    <main className="article campaign climate-change">
      <header className="entry-header high-impact-viewport x">
        <div className="text c l6" data-aos="fade-up">
          <h1>Climate Change: Sea Level Rise World Map Animation</h1>
          <p data-aos="fade-up">
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
        <div data-aos="fade-up" className="chart" data-aos="fade-up" >
     <World />
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

        <div className="share" data-aos="fade-up-left" >
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
      <SaveTheWorldClimateChange data-aos="fade-up-left" />
      <div className="entry-content" data-aos="fade-up-right" >
        <h2 className="mega-headline">What will happen if we fail?</h2>
        <div className="grid-container-narrow major-incidents story">
          <section className="x decade-1">
            <div   className="c l6">
              <div data-aos="fade-up-right"     className="text">
                <h2 className="headline">
                  <time>2030</time> Climate Change becomes 'irreversible'
                </h2>
                <p data-aos="fade-up-right" >
                  The IPCC predicts the effects of the warming planet will
                  become irreversable without significant technological
                  innovation -- innovations we do not yet have. We are already
                  feeling some effects of a changing climate, but if the world
                  continues with its half-hearted commitments to emission
                  reduction, the events in this list may occur faster, before
                  we're able to plan.
                </p>
              </div>
            </div>
            <picture data-aos="fade-up-right"   className="c l6">
              <LazyLoad>
                <img src="../assets/img/climate-change/polar-bear-from-above-large.jpg" />
              </LazyLoad>
            </picture>
          </section>
          <section className="x decade-2">
            <picture   className="c l6">
              <LazyLoad>
                <img src="../assets/img/climate-change/flood-large.jpg" />
              </LazyLoad>
            </picture>
            <div    className="c l6">
              <div data-aos="fade-up-right"    className="text">
                <h2 className="headline">
                  <time>2040</time> Hundreds of billions of dollars to be spent
                  on flood defences
                </h2>
                <p data-aos="fade-up-right" >
                  In the United States, 40% of the population lives in high
                  population-density coastal areas, and globally, 8 of the
                  world’s 10 largest cities are near a coast. The US will have
                  to spend around $10 billion to protect each coastal city,
                  replenishing defences every 20 years, or facing the
                  consequences of billions of dollars in flood damages. It is
                  the same around the world, and it is unclear where the money
                  will come from.
                </p>
              </div>
            </div>
          </section>
          <section className="x decade-3">
            <div     className="c l6">
              <div  data-aos="fade-up-right"   className="text">
                <h2 className="headline">
                  <time>2050</time> The climate refugee crisis – 1 billion
                  migrants
                </h2>
                <p data-aos="fade-up-right" >
                  The intense heat and increased flooding will play havoc with
                  farming and crops, long before large coastal regions are
                  completely flooded. Large parts of Africa will simply become
                  desert, where growing food becomes impossible. In parts of
                  Asia, heavier rainfall and constant floods will destroy crops.
                  Farmable land will signifcantly decrease leading to the
                  displacement of 'climate refugees', who will arrive in Europe
                  and the United States in their millions or perhaps hundreds of
                  millions.
                </p>
              </div>
            </div>
            <picture     className="c l6">
              <LazyLoad>
                <img src="../assets/img/climate-change/refugees-large.jpg" />
              </LazyLoad>
            </picture>
          </section>
          <section className="x decade-4">
            <picture   className="c l6">
              <LazyLoad>
                <img src="../assets/img/climate-change/turtle_large.jpg" />
              </LazyLoad>
            </picture>
            <div     className="c l6">
              <div data-aos="fade-up-left"    className="text">
                <h2 className="headline">
                  <time>2060</time> The Great Barrier Reef dies
                </h2>
                <p data-aos="fade-up-right" >
                  Multiple consecutive summers of 'bleaching events' will result
                  in the death of one of the world's most famous and beautiful
                  ecosystems. Reefs will die across the globe, and it’s not just
                  a lost tourist attraction, its death means further devastation
                  of marine eco-systems, causing huge numbers of species to
                  become extinct. By this point, due to overfishing, it’s likely
                  you won’t be able to pick up seafood for dinner in your local
                  supermarket.
                </p>
              </div>
            </div>
          </section>
          <section className="x decade-5">
            <div   className="c l6">
              <div  data-aos="fade-up-right"   className="text">
                <h2 className="headline">
                  <time>2070</time> One third of plant and animal species
                  extinct
                </h2>
                <p data-aos="fade-up-right" >
                  Just 50 years from today, one third of every species on this
                  planet could be gone. The domino effect of rising temperatures
                  will eradicate large eco-systems, starting with the oceans
                  before eventually impacting land animals. Polar bears,
                  penguins and koalas become even more endangered and their
                  extinction is now almost guaranteed before the end of the
                  century.
                </p>
              </div>
            </div>
            <picture   className="c l6">
              <LazyLoad>
                <img src="../assets/img/climate-change/baby_snow_leapard.jpg" />
              </LazyLoad>
            </picture>
          </section>
          <section className="x decade-6">
            <picture   className="c l6">
              <LazyLoad>
                <img src="../assets/img/climate-change/venice_flooded_large.jpg" />
              </LazyLoad>
            </picture>
            <div   className="c l6">
              <div data-aos="fade-up-left"    className="text">
                <h2 className="headline">
                  <time>2080</time> Venice, Fiji and Bangkok lost to the sea
                </h2>
                <p data-aos="fade-up-right" >
                  Rising sea levels will mean that Venice will be completely
                  submerged by 2100. Groups of islands like The Maldives and
                  Fiji will disappear too, so forget that tropical island
                  holiday. Hugely populated cities like Jakarta and Bangkok will
                  have been long gone by now.
                </p>
              </div>
            </div>
          </section>
          <section className="x decade-7">
            <div   className="c l6">
              <div data-aos="fade-up-right"    className="text">
                <h2 className="headline">
                  <time>2100</time> Climate related death becomes the world's
                  biggest killer
                </h2>
                <p data-aos="fade-up-right" >
                  By 2100, deaths related to heat will be higher than all deaths
                  from infectious diseases. But it’s not only heat; the changing
                  climate will cause poverty and starvation, as well as increase
                  danger and transferability of number of diseases that spread
                  in warmer conditions. Natural disasters will also kill, as
                  well as reduced water quality in developing countries, and the
                  inevitable economic collapse of many economies.
                </p>
              </div>
            </div>
            <picture   className="c l6">
              <LazyLoad>
                <img src="../assets/img/climate-change/dead_cows_large.jpg" />
              </LazyLoad>
            </picture>
          </section>
        </div>
      </div>
    </main>
  );
};

export default ClimateChange;
