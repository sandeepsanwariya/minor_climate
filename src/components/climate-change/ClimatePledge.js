import React from 'react'
import Aos from 'aos'
import 'aos/dist/aos.css'
export default function ClimatePledge() {
  React.useEffect(() => {
    Aos.init({duration:1500});
  }, [])
  return (
    <section className="save-the-world-component">
      <div className="grid">
        <div data-aos="fade-up" className="x">
          <div className="c t4 hero-level">
            <h3 className="subhead">
              Become a <strong>level 12 Climate Hero</strong>
            </h3>
          </div>
          <div data-aos="fade-right" className="c t8">
            <h4 className="headline">
              Persuade your employer to join the Climate Pledge
            </h4>
            <ul className="meta">
              <li className="difficulty">Difficulty: Moderate</li>
              <li className="time">Extra time: None</li>
              <li className="impact">Impact: Significant</li>
            </ul>
            <p>In order to end climate change </p>
            <div className="cta">
              <a href="https://www.theclimatepledge.com/us/en/the-pledge">
                The pledge
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

