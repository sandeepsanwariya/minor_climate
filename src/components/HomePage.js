import React from "react";
import { HashLink as Link } from "react-router-hash-link";
import Aos from 'aos'
import 'aos/dist/aos.css'
import {motion} from  'framer-motion'
export default function HomePage() {
  React.useEffect(() => {
    Aos.init({duration:1500});
    window.scrollTo(0, 0);
  }, [])
  return (
    <motion.div
    initial={{x:"0vw",y:'50vh', opacity:0}} 
    animate={{x:"0vw",y:"0vh", opacity:1}}
    exit={{x:"0vw",y:"0vh",opacity:0}}
    transition={{ type:"spring",stiffness:'120'}}
    >
    <main className="home ">
     
      <div className="high-impact-viewport grid-full single-feature top-feature">
        <section className="x">
          <div className="c l6 text" data-aos="fade-up" >
            <h1 class="headline" data-aos="fade-up">
              It’s not enough to say you want the world to change.{" "}
            </h1>
            
            <p data-aos="fade-up">
              It’s not enough to vote. It's not enough to be kind. It's not
              enough to be a good person. If you want the world to change you
              have to do much more.
            </p>
            <p className="text-cta">
              <Link to="/about">Change the world</Link>
            </p>
          </div>
          <img
            src="./assets/img/home.jpg"
            alt="Woman in double exposure with city"
          />
        </section>
      </div>
      <section className="grid-full latest-features high-impact-viewport">
        <ul className="x article-list horizontal-list">
          <li data-aos="fade-up" className="c t6 d3">
            <article>
              <Link to="./climate-change">
                <img
                  src="./assets/img/climate-change/polar-bear-from-above-thumb.jpg"
                  alt="Polar bear on ice"
                />
                <span>
                  Climate Change: Sea Level Rise Map
                  <small>
                    See how the world will be defestated by floods over the
                    next 100 years
                  </small>
                </span>
              </Link>
            </article>
          </li>
          <li data-aos="fade-up"  className="c t6 d3">
            <article>
              <Link to="./amazon-deforestation">
                <img
                  src="../assets/img/amazon/amazon-rainforest-deforestation-thumb.jpg"
                  alt="Amazon rainforest deforestation"
                />
                <span>
                  Amazonian Rainforest Deforestation Map
                  <small>
                    See how the rainforest will vanish in the coming years
                  </small>
                </span>
              </Link>
            </article>
          </li>
          <li data-aos="fade-up" className="c t6 d3">
            <article>
              <Link to="/california-wildfires">
                <img
                  src="./assets/img/climate-change/webp/helicopter-768.webp"
                  alt="Helictoper over wildfire"
                />
                <span>
                  California Wildfires Map
                  <small>
                    Watch wildfires spread across California in 60 seconds
                  </small>
                </span>
              </Link>
            </article>
          </li>
          <li data-aos="fade-up"  className="c t6 d3">
            <article>
              <Link to="/sustainable-businesses">
                <img
                  src="./assets/img/businesses/beer-thumb.jpg"
                  alt="Beer"
                />
                <span>
                  Sustainable Businesses
                  <small>
                    Switch to one of these businesses to help stop climate
                    change
                  </small>
                </span>
              </Link>
            </article>
          </li>
        </ul>
      </section>
      <div
        className="grid-full high-impact-viewport single-feature social-media"
        id="understand"
      >
        <section data-aos="fade-up"  className="x">
          <div className="c l6 text">
            <h2 class="headline">
              You <em>can</em> change the world.
            </h2>
            <p>
              Follow us on Twitter or Instagram to receive one daily
              suggestion on how you can change the world for the better.
            </p>
            <p>
              Follow us on:{" "}
              <a href="https://twitter.com/ARevolutionary7">Twitter</a>,{" "}
              <a href="https://www.instagram.com/arevolutionaryact/">
                Instagram
              </a>{" "}
              and{" "}
              <a href="https://www.facebook.com/A-Revolutionary-Act-100177155707169">
                Facebook
              </a>
              .
            </p>
          </div>
          <img
            src="assets/img/home-page/boy-planting-tree-full.jpg"
            alt="Smiling boy planting tree"
          />
        </section>
      </div>
    </main></motion.div>
  );
}

