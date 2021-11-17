

// const currentURL = window.location.href;
// const redditURL = `https://www.reddit.com/submit?url=` + currentURL;
// const redditHref = document.getElementById("reddit-url");
// redditHref.setAttribute("href", "something");
import React from 'react'
import Aos from 'aos'
import 'aos/dist/aos.css'
export default function UpVote() {
  React.useEffect(() => {
    Aos.init({duration:1500});
  }, [])
  return (
    <section className="save-the-world-component">
      <div className="grid">
        <div data-aos="fade-up"className="x">
          <div className="c t4 hero-level">
            <h3 className="subhead">
              Become a <strong>level 6 Climate Hero</strong>
            </h3>
          </div>
          <div data-aos="fade-up-right" className="c t8">
            <h4 className="headline">Upvote this page on Reddit</h4>
            <ul className="meta">
              <li className="difficulty">Difficulty: Easy</li>
              <li className="time">Time: 1 minute</li>
              <li className="impact">Impact: World changing</li>
            </ul>
            <p>
              If we can get this page to go viral using Reddit (or Facebook,
              or Twitter if you prefer), we may be able to significantly
              multiply the number of people who complete these revolutionary
              acts.
            </p>
            <p>
              Maybe we don't need to watch the world flood. Maybe we don't
              need to watch millions of climate refugees flee their homelands.
              Maybe we don't need to watch the world's corals die, or the
              world's forests turn to deserts. Maybe today you can help start
              a revolution.
            </p>
            <div className="cta">
              <a id="reddit-url" href="">
                Click here to upvote this page on Reddit
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


