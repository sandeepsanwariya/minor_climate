import React from 'react'

import Aos from 'aos'
import 'aos/dist/aos.css'

export default function Ecologi() {
  React.useEffect(() => {
    Aos.init({duration:1500});
  }, [])
  return (
    <section className="save-the-world-component">
      <div className="grid">
        <div data-aos="fade-up" className="x">
          <div className="c t4 hero-level">
            <h3 className="subhead">
              Become a <strong>level 10 Climate Hero</strong>
            </h3>
          </div>
          <div data-aos="fade-up-right" className="c t8">
            <h4 className="headline">
              Plant 12 trees per month with Ecologi
            </h4>
            <ul className="meta">
              <li className="difficulty">Difficulty: Easy</li>
              <li className="time">Time: 5 minutes</li>
              <li className="impact">Impact: Significant</li>
            </ul>
            <p>
              Become carbon negative with Ecologi, who will plant 12 trees per
              month for £4.70. Sign-up today and Ecologi will plant an extra
              10 trees in your forest.
            </p>
            <div className="cta">
              <a href="https://ecologi.com/plan">Sign-up at Ecologi.com</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

