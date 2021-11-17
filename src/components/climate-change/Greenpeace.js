import React from 'react'

import Aos from 'aos'
import 'aos/dist/aos.css'

export default function Greenpeace() {
  React.useEffect(() => {
    Aos.init({duration:1500});
  }, [])
  return (
    <section className="save-the-world-component">
      <div className="grid">
        <div data-aos="fade-up" className="x">
          <div className="c t4 hero-level">
            <h3 className="subhead">
              Become a <strong>level 11 Climate Hero</strong>
            </h3>
          </div>
          <div data-aos="fade-up-left" className="c t8">
            <h4 className="headline">Sign this Greenpeace Petition</h4>
            <ul className="meta">
              <li className="difficulty">Difficulty: Easy</li>
              <li className="time">Time: 1 minute</li>
              <li className="impact">Impact: Moderate</li>
            </ul>
            <p>
              Ask the government to take real action to stop climate change by
              stopping new fossil fuel projects, stopping banks from investing
              in fossil fuel businesses, protecting forests and more.
            </p>
            <div className="cta">
              <a href="https://action.greenpeace.org.uk/Climate-Leaders-Act">
                Sign the petition
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

