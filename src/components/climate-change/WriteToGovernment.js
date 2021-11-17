import React from 'react'
import Aos from 'aos'
import 'aos/dist/aos.css'

export default function WriteToGovernment() {
  React.useEffect(() => {
    Aos.init({duration:1500});
  }, [])
  return (
    <section className="save-the-world-component">
      <div className="grid">
        <div data-aos="fade-up" className="x">
          <div className="c t4 hero-level">
            <h3 className="subhead">
              Become a <strong>level 1 Climate Hero</strong>
            </h3>
          </div>
          <div data-aos="fade-up-right" className="c t8">
            <h4 className="headline">
              Plant a tree for 10 cents: do it in 4 minutes online
            </h4>
            <ul className="meta">
              <li className="difficulty">Difficulty: Easy</li>
              <li className="time">Time: 4 minutes</li>
              <li className="impact">Impact: Significant</li>
            </ul>
            <p>
              If everyone in the world planted a tree today approximately 140
              billion kilograms of CO2 would be absorbed from the atmosphere,
              habitats would be created for trillions of animals and thousands
              of people would be provided jobs planting and maintaining the
              forests.
            </p>
            <p>
              You can buy one tree planting right now online for as little as
              $0.10
            </p>
            <div className="cta">
              <a href="https://www.trilliontreecampaign.org/" target="_blank">
                Plant a tree now
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


