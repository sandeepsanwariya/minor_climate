import React from "react";



export default function GreenPeaceRainforestPetition() {
  React.useEffect(() => {
    Aos.init({duration:1500});
  }, [])
  return (
    <section className="save-the-world-component">
      <div className="grid">
        <div className="x">
          <div data-aos="fade-up-left" className="c t4 hero-level">
            <h3 className="subhead">
              Become a <strong>level 4 Climate Hero</strong>
            </h3>
          </div>
          <div className="c t8">
            <h4 className="headline">Sign this GreenPeace Petition</h4>
            <ul className="meta">
              <li className="difficulty">Difficulty: Hard</li>
              <li className="time">Time: 90+ minutes</li>
              <li className="impact">Impact: World changing</li>
            </ul>
            <p data-aos="fade-up-right" >
              One person completing the first three steps will make very
              little difference. But if each person who completes these steps
              can get two friends to complete them too, we will change the
              world.
            </p>
            <p data-aos="fade-up-left" >
              If you really want to do this, call your friends, go and meet
              them with your laptop or phone, load this web page and ask them
              to complete these steps. You almost certainly don't want to do
              this I know. But if you really want to save the world, I hope
              that you will consider trying.
            </p>
            <div className="cta">
              <a
                href="https://engage.us.greenpeace.org/onlineactions/R3MeI7lpBU6dDnrbXrLapQ2"
                target="_blank"
              >
                Sign the petition
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

