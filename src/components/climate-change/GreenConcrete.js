import React from 'react'

import Aos from 'aos'
import 'aos/dist/aos.css'

export default function GreenConcrete() {
  React.useEffect(() => {
    Aos.init({duration:1500});
  }, [])
  return (
    <section className="save-the-world-component">
      <div className="grid">
        <div  data-aos="fade-up" className="x">
          <div className="c t4 hero-level">
            <h3 className="subhead">
              Become a <strong>level 12 Climate Hero</strong>
            </h3>
          </div>
          <div  data-aos="fade-up-left" className="c t8">
            <h4 className="headline">Invest in carbon neutral concrete</h4>
            <ul className="meta">
              <li className="difficulty">Difficulty: Moderate</li>
              <li className="time">Time: 15 minutes</li>
              <li className="impact">Impact: Significant</li>
            </ul>
            <p>Believe it or not, concrete is the second most consumed material on the planet (second only to water). Unfortunately, the process of making concrete releases a huge amount of greenhouse gas. So much so that the construction industry accounts for approximately 30% of the 51 billion tons of annual emissions we need to eliminate to stop climate change.</p>
            <p>And construction work is not slowing down. It's speeding up. So much so that it's estimated we'll build on an area of land the size of New York City <strong>every month</strong>, year after year, over the next decade.</p>
            <p>We cannot offset that amount of greenhouse gas. And as those urban areas are built and developing countries become richer the people will buy more cars and use more energy, resulting in even larger emissions.</p>
            <p>In order to solve these problems, we need to rapidly innovate. Fortunately that creates amazing opportunities for businesses.</p>
            <p>We have no choice. We need to get to net zero emissions to avoid the greatest catastrophe humans have ever known. To do that we need to switch to carbon neutral construction. To do that we need to invest in innovative businesses that are making that possible and we need regulations that help businesses innovate rapidly, while discouraging the use of fossil fuels and the use of standard concrete and steel.</p>
            <div className="cta">
              <a href="https://www.trilliontreecampaign.org/" target="_blank">
                Invest in carbon neutral cement
              </a>
            </div>
            <div className="cta">
              <a href="https://www.trilliontreecampaign.org/" target="_blank">
                Ask the government to impose taxes on non-carbon-neutral concrete
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}



