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
import {
  FacebookShareButton,
  RedditShareButton,
  LinkedinShareButton,
  TwitterShareButton,
} from "react-share";

const DonateToARA = () => {
  // const { path, url } = useRouteMatch();
  const [buttonPopup, setButtonPopup] = useState(false);
  return (
    <main className="article campaign donate">
      <header className="entry-header high-impact-viewport x">
        <div className="text c l6">
          <h1>Donate to A Revolutionary Act</h1>
          <p>
            See how donating to A Revolutionary Act will help make the world a better place.
          </p>
          <p class="cta with-icon with-pulsing-icon">
            <HashLink to="#play-animation">Keep reading</HashLink>
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
      <div className="x">
        <section className="c l6 entry-content">
          <h2 className="headline">How your donation will be used</h2>
          <p>Imagine if everyone in the world followed the instructions on this website. Every page is designed to encourage readers to complete the following 'revolutionay acts':</p>
          <ul>
            <li>Change your home electricity to 100% renewables</li>
            <li>Sell your gas powered car and buy an electric car</li>
            <li>Switch your home gas furnace for an electric water pump</li>
            <li>Sign up to a Climeworks Explorer account to remove carbon from the atmosphere</li>
            <li>Switch to a fossil fuel free bank account</li>
            <li>Go vegan 5 days per week</li>
            <li>Adopt an endangered species of animal</li>
            <li>Plant 12 trees per month with Ecologi</li>
            <li>Help us plant a million trees</li>
            <li>Help the construction industry switch to carbon-neutral concrete</li>
          </ul>
          <h2 className="headline">Our aim</h2>
          <p>Our aim is to get one billion web users to complete the above steps by 2030.</p>
          <p>To achieve that we need your help.</p>
          <h2 className="headline">How can you help?</h2>
          <p>There are several ways you can help us:</p>
          <ul>
            <li>Share the website with your friends in social media</li>
            <li>Tell your friends about the website</li>
            <li>Donate</li>
          </ul>
          <h2 className="headline">Donate</h2>
          <p>If you donate to us we will use 100% of the money to achieve our aim of getting one billion people to complete the steps.</p>
          <h2 className="headline">What's our strategy?</h2>
          <p>There are millions of people who want to stop climate change. We just need to tell them what they need to do to help us stop climate change and encourage them to complete the steps above.</p>
          <p>To do that we plan to use highly targeted and cost effective Google Advertising, specifically to attract 'brand evangelists' to visit the website.</p>
          <p>Brand evangelists are people who will help to promote the website for free because they want the same thing we want and they're just as passionate as us.</p>
          <p>Using high quality interactive content and encouraging brand evangelists to share it, we hop that a small number of the right website visitors will help to quickly increase the website traffic to millions or perhaps hundreds of millions per month.</p>
          <p>We desperately want to stop climate change.</p>
          <p>This is an extremely important goal.</p>
          <p>We must do it.</p>
          <p>Please help us by making a small donation.</p>
          <p>We'll use 100% of your money to bring brand evangelists to the website so we can help spread this message around the world.</p>
          <p>We'll produce much more high quality content to help capture more visitors.</p>
          <p>We need a billions people to complete the steps in less than 9 years. It's a difficult task. But it will change the world significantly. We can do it. But we desperately need your help.</p>
          <div className="cta"><a href="">Donate now</a></div>
        </section>
      </div>
      <SaveTheWorldClimateChange />
    </main>
  );
};

export default DonateToARA;
