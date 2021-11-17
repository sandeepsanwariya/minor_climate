import React from 'react'
import Aos from 'aos'
import 'aos/dist/aos.css'
export default function RunForAMillionTrees() {
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
          <div data-aos="fade-up-right" className="c t8">
            <h4 className="headline">Run for a Million Trees</h4>
            <ul className="meta">
              <li className="difficulty">Difficulty: Moderate</li>
              <li className="time">Time: 1 - 7 hours</li>
              <li className="impact">Impact: significant</li>
            </ul>
            <p>
              Sign up for a sponsored run such as a 5k, 10k, half marathon or
              even a marathon. Tell your friends and family you're running for
              a million trees. Send them the link below to the{" "}
              <a href="https://www.gofundme.com/manage/run-for-a-million-trees-plant-1-million-trees?teamInviteAccepted=1">
                GoFundMe fundraiser page
              </a>
              . Ask them to donate a small amount. If you can reach $100 in
              donations we'll use that money to plant 1000 trees! If we can
              get 1000 people to complete this step, we'll have planted a
              million trees, making a significant impact on removing
              atmospheric carbon, creating environments for trillions of
              animals and making employment for the tree growers who often
              live in areas with high levels of poverty.
            </p>
            <p>Do something amazing today.</p>
            <div className="cta">
              <a href="https://www.gofundme.com/manage/run-for-a-million-trees-plant-1-million-trees?teamInviteAccepted=1">
                Join Run for a Million Trees
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


