import React from "react";

import Aos from 'aos'
import 'aos/dist/aos.css'

export default function AdoptAnAnimal() {
  React.useEffect(() => {
    Aos.init({duration:1500});
  }, [])
  return (
    <section className="save-the-world-component">
      <div className="grid">
        <div className="x">
          <div data-aos="fade-up" className="c t4 hero-level">
            <h3 className="subhead">
              Become a <strong>level 9 Climate Hero</strong>
            </h3>
          </div>
          <div data-aos="fade-up-left" className="c t8">
            <h4 className="headline">
              Adopt an Endangered Species of Animal
            </h4>
            <ul className="meta">
              <li className="difficulty">Difficulty: Easy</li>
              <li className="time">Time: 5 minutes</li>
              <li className="impact">Impact: Significant</li>
            </ul>
            <p>
              When you adopt an endangered animal such as a tiger or
              orangutan, you're not just protecting the animal, you're
              protecting it's habitat -- the forest. And this is critical.
              When you donate $5, or $10 a month to the WWF that money is used
              to protect the animal's habitat from destruction, which means
              the biodiversity is protected.
            </p>
            <p>Adopt an endangered animal for as $5 per month:</p>
            <div className="cta">
              <a href="https://support.wwf.org.uk/adopt-an-animal">
                Adopt an animal now
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

