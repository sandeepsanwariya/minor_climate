import React from 'react'
import Aos from 'aos'
import 'aos/dist/aos.css'

export default function SwitchBank() {
  React.useEffect(() => {
    Aos.init({duration:1500});
  }, [])
  return (
    <section className="save-the-world-component">
      <div className="grid">
        <div data-aos="fade-up" className="x">
          <div className="c t4 hero-level">
            <h3 className="subhead">
              Become a <strong>level 7 Climate Hero</strong>
            </h3>
          </div>
          <div data-aos="fade-up-right" className="c t8">
            <h4 className="headline">
              Switch to a fossil-fuel free bank account
            </h4>
            <ul className="meta">
              <li className="difficulty">Difficulty: Moderate</li>
              <li className="time">Time: 60 minutes</li>
              <li className="impact">Impact: Significant</li>
            </ul>
            <p>Next we need to start encouraging businesses to stop using fossil fuels. To change the behaviour of businesses our best bet is to vote using our money. Of course, the more money you have, the more votes you get, but if we can get 100 million people to switch to fossil fuel free bank accounts it will make a big difference.</p>
            <p>
              We each have the power to choose to change the world. We can
              choose how businesses act by choosing to consume products made
              by responsible businesses and not by irresponsible businesses.
              Doing so results in responsible business behaviour prevailing.
            </p>
            <div className="cta">
              <a href="https://good-with-money.com/2021/07/02/top-5-ethical-current-accounts/#">
                Select your new fossil-fuel free bank account
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


